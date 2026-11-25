// @vitest-environment jsdom

import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { createMemoryHistory, createRouter, RouterView } from 'vue-router'
import { getAllChapterWords, getChapters, getChapterWords, getStudyProgress, saveStudyProgress } from '@/api/admin/english'
import EnglishCornerView from '@/views/EnglishCornerView.vue'
import EnglishPracticeView from '@/views/EnglishPracticeView.vue'
import EnglishStudyLedgerView from '@/views/EnglishStudyLedgerView.vue'
import EnglishStudyView from '@/views/EnglishStudyView.vue'

vi.mock('@/api/admin/english')
vi.mock('@/services/adminAuth', () => ({ currentAdmin: { value: { id: 1 } } }))

const chapters = [{ id: 12, number: 12, title: '饮食健康', wordCount: 4 }]
const words = ['food', 'diet', 'appetite', 'treat'].map((word, index) => ({
  id: index + 1, word, meaningZh: ['食物', '饮食', '食欲', '款待'][index], partOfSpeech: 'n.', hasAudio: false
}))
const entries = new Map()
const dialogStub = {
  props: ['modelValue', 'title'],
  emits: ['update:modelValue'],
  template: `
    <section v-if="modelValue" role="dialog" :aria-label="title">
      <button type="button" @click="$emit('update:modelValue', false)">关闭列表</button>
      <slot />
    </section>
  `
}

beforeEach(() => {
  entries.clear()
  const selectedChapters = new Map()
  vi.stubGlobal('localStorage', {
    getItem: (key) => selectedChapters.get(key) ?? null,
    setItem: (key, value) => selectedChapters.set(key, value)
  })
  vi.clearAllMocks()
  getChapters.mockResolvedValue(chapters)
  getChapterWords.mockResolvedValue({ rows: words, total: words.length })
  getAllChapterWords.mockResolvedValue(words)
  getStudyProgress.mockImplementation(async () => [...entries.values()])
  saveStudyProgress.mockImplementation(async (wordId, rating, version) => {
    expect(version).toBe(entries.get(wordId)?.version ?? 0)
    const entry = {
      wordId, chapterId: 12, rating, version: version + 1,
      reviewStep: rating === 'REMEMBERED' ? 1 : 0,
      startedAt: new Date().toISOString(),
      nextReviewAt: new Date(Date.now() + (rating === 'SEEN' ? -1000 : 86_400_000)).toISOString()
    }
    entries.set(wordId, entry)
    return entry
  })
})

afterEach(() => vi.unstubAllGlobals())

async function openEnglishPage(name = 'admin-english-study') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/admin', name: 'admin-dashboard', component: { template: '<div />' } },
      { path: '/english', name: 'admin-english', component: EnglishCornerView },
      { path: '/english/study', name: 'admin-english-study', component: EnglishStudyView },
      { path: '/english/study/ledger', name: 'admin-english-study-ledger', component: EnglishStudyLedgerView },
      { path: '/english/practice', name: 'admin-english-practice', component: EnglishPracticeView }
    ]
  })
  await router.push({ name, query: { chapter: '12' } })
  const view = mount(RouterView, { global: { plugins: [router], stubs: { ElDialog: dialogStub } } })
  await flushPromises()
  return { view, router }
}

async function click(view, label) {
  const button = view.findAll('button').find(item => item.text() === label)
  expect(button, label).toBeDefined()
  await button.trigger('click')
  await flushPromises()
}

it('continues an unfinished chapter and sends just the reviewed words into dictation', async () => {
  const first = await openEnglishPage()
  try {
    await click(first.view, '开始学习')
    expect(first.view.get('.lesson-word').text()).toBe('food')
    await click(first.view, '下一个单词')
    expect(first.view.get('.lesson-word').text()).toBe('diet')
  } finally {
    first.view.unmount()
  }

  const { view, router } = await openEnglishPage()
  try {
    expect(view.get('.chapter-progress').text()).toContain('1 / 4')
    await click(view, '复习本章')
    expect(view.get('.lesson-word').text()).toBe('food')
    expect(view.find('.lesson-details').exists()).toBe(false)
    await click(view, '翻开答案')
    expect(view.get('.lesson-details').text()).toContain('食物')
    await click(view, '有点模糊')
    expect(saveStudyProgress).toHaveBeenLastCalledWith(1, 'UNSURE', 1)
    expect(view.get('.lesson-finished').text()).toContain('本轮完成')

    const link = view.findAll('a').find(item => item.text() === '默写本轮单词')
    await router.push(link.attributes('href'))
    await flushPromises()
    expect(view.get('.practice-selection').text()).toContain('指定词汇 · 1 词')
    expect(view.get('.question-meaning').text()).toBe('食物')
    await click(view, '练习整章')
    expect(view.find('.practice-selection').exists()).toBe(false)
    expect(view.get('progress').attributes('max')).toBe('4')
  } finally {
    view.unmount()
  }
})

it('retries a forgotten word after intervening cards and keeps one saved grade per word', async () => {
  const random = vi.spyOn(Math, 'random').mockReturnValue(.99)
  const { view } = await openEnglishPage()
  try {
    await click(view, '开始学习')
    for (const word of words.slice(0, -1)) {
      expect(view.get('.lesson-word').text()).toBe(word.word)
      await click(view, '下一个单词')
    }
    await click(view, '开始回想')
    await click(view, '翻开答案')
    await click(view, '没想起来')
    for (const word of words.slice(1)) {
      expect(view.get('.lesson-word').text()).toBe(word.word)
      await click(view, '翻开答案')
      await click(view, '想起来了')
    }
    expect(view.get('.lesson-word').text()).toBe('food')
    expect(view.get('.lesson-step').text()).toBe('再回想一次')
    await click(view, '翻开答案')
    await click(view, '想起来了')
    expect(view.get('.lesson-finished').text()).toContain('回想了 4 个词')
    expect(saveStudyProgress).toHaveBeenCalledTimes(8)
    expect(entries.get(1).rating).toBe('FORGOT')
  } finally {
    view.unmount()
    random.mockRestore()
  }
})

it('reviews one earlier chapter at a time without changing the active chapter', async () => {
  const prior = [
    { id: 1, number: 1, title: '时间与存在', wordCount: 1 },
    { id: 2, number: 2, title: '植物研究', wordCount: 1 }
  ]
  const olderWord = { id: 51, word: 'atmosphere', meaningZh: '大气层', hasAudio: false }
  getChapters.mockResolvedValue([...prior, ...chapters])
  getAllChapterWords.mockResolvedValue([olderWord])
  getStudyProgress.mockResolvedValue([
    { wordId: 52, chapterId: 2, startedAt: '2024-01-04T00:00:00Z', nextReviewAt: '2024-01-06T00:00:00Z', version: 2 },
    { wordId: 51, chapterId: 1, startedAt: '2024-01-02T00:00:00Z', nextReviewAt: '2024-01-05T00:00:00Z', version: 2 }
  ])
  localStorage.setItem('ielts-study-chapter:1', '12')

  const { view } = await openEnglishPage()
  try {
    expect(view.get('#learning-chapter-title').text()).toBe('饮食健康')
    await view.get('.past-review').trigger('click')
    await flushPromises()
    expect(getAllChapterWords).toHaveBeenCalledTimes(1)
    expect(getAllChapterWords).toHaveBeenCalledWith(1, expect.any(AbortSignal))
    expect(view.get('#learning-chapter-title').text()).toBe('时间与存在')
    expect(view.get('.lesson-word').text()).toBe('atmosphere')
    await click(view, '返回章节')
    expect(view.get('#learning-chapter-title').text()).toBe('饮食健康')
  } finally {
    view.unmount()
  }
})

it('shows all chapter statistics and opens a due chapter selected in the ledger', async () => {
  getChapters.mockResolvedValue([
    { id: 1, number: 1, title: '时间与存在', wordCount: 7 },
    { id: 2, number: 2, title: '植物研究', wordCount: 6 },
    ...chapters
  ])
  getStudyProgress.mockResolvedValue([
    {
      wordId: 51, chapterId: 1, startedAt: '2024-01-01T00:00:00Z',
      nextReviewAt: '2024-01-02T00:00:00Z', rating: 'FORGOT', reviewStep: 0, version: 2
    },
    {
      wordId: 1, chapterId: 12, startedAt: '2024-01-01T00:00:00Z',
      nextReviewAt: new Date(Date.now() + 86_400_000).toISOString(), rating: 'REMEMBERED', reviewStep: 3, version: 4
    }
  ])

  localStorage.setItem('ielts-study-chapter:1', '12')
  const { view, router } = await openEnglishPage('admin-english')
  try {
    const actions = view.findAll('.study-actions a')
    expect(actions.map(item => item.text())).toEqual(['背单词', '单词默写', '学习台账', '返回后台'])
    const ledger = actions.find(item => item.text() === '学习台账')
    await router.push(ledger.attributes('href'))
    await flushPromises()
    expect(view.get('h1').text()).toBe('学习台账')
    expect(view.get('.study-actions a').attributes('href')).toBe('/english?chapter=12')
    expect(view.get('.study-heading').text()).toContain('已开始 2 / 3 章')
    expect(view.findAll('.ledger-summary-value').map(cell => cell.text())).toEqual(['2 / 17 词', '1', '1', '1'])
    expect(view.findAll('tbody tr')).toHaveLength(3)
    expect(view.findAll('tbody progress').map(bar => bar.attributes('value'))).toEqual(['1', '0', '1'])

    await view.get('input[type=checkbox]').setValue(true)
    expect(view.findAll('tbody tr')).toHaveLength(1)
    const review = view.get('a[aria-label="去复习，时间与存在"]')
    await router.push(review.attributes('href'))
    await flushPromises()
    expect(view.get('#learning-chapter-title').text()).toBe('时间与存在')
    expect(view.findAll('button').some(button => button.text() === '复习本章')).toBe(true)
  } finally {
    view.unmount()
  }
})

async function openWordStatus(view, label) {
  const card = view.findAll('.ledger-summary-card').find(button => button.get('.ledger-summary-label').text() === label)
  expect(card, label).toBeDefined()
  await card.trigger('click')
  await flushPromises()
  return view.get('[role="dialog"]')
}

it('opens the exact words counted by each status and loads other chapters on demand', async () => {
  const earlier = { id: 1, number: 1, title: '时间与存在', wordCount: 3 }
  const earlierWords = [
    { id: 51, word: 'atmosphere', meaningZh: '大气层' },
    { id: 52, word: 'hydrosphere', meaningZh: '水圈' },
    { id: 53, word: 'lithosphere', meaningZh: '岩石圈' }
  ]
  const future = new Date(Date.now() + 86_400_000).toISOString()
  const past = '2024-01-02T00:00:00Z'
  getChapters.mockResolvedValue([earlier, ...chapters])
  getAllChapterWords.mockImplementation(async id => id === 1 ? earlierWords : words)
  getStudyProgress.mockResolvedValue([
    { wordId: 51, chapterId: 1, nextReviewAt: past, rating: 'FORGOT', reviewStep: 0 },
    { wordId: 52, chapterId: 1, nextReviewAt: past, rating: 'REMEMBERED', reviewStep: 3 },
    { wordId: 1, chapterId: 12, nextReviewAt: future, rating: 'REMEMBERED', reviewStep: 1 },
    { wordId: 2, chapterId: 12, nextReviewAt: future, rating: 'UNSURE', reviewStep: 0 }
  ])

  const { view } = await openEnglishPage('admin-english-study-ledger')
  try {
    const learned = await openWordStatus(view, '已学')
    expect(learned.attributes('aria-label')).toBe('已学 · 4 词')
    expect(learned.findAll('li strong').map(item => item.text())).toEqual(['atmosphere', 'hydrosphere'])
    expect(learned.text()).toContain('大气层')
    expect(getAllChapterWords).toHaveBeenCalledTimes(1)
    await learned.get('select').setValue('12')
    await flushPromises()
    expect(learned.findAll('li strong').map(item => item.text())).toEqual(['food', 'diet'])
    await click(view, '关闭列表')

    const stable = await openWordStatus(view, '稳定记住')
    expect(stable.findAll('li strong').map(item => item.text())).toEqual(['hydrosphere'])
    await click(view, '关闭列表')

    const due = await openWordStatus(view, '待复习')
    expect(due.findAll('li strong').map(item => item.text())).toEqual(['atmosphere', 'hydrosphere'])
    await click(view, '关闭列表')

    const weak = await openWordStatus(view, '薄弱词')
    expect(weak.attributes('aria-label')).toBe('薄弱词 · 2 词')
    expect(weak.findAll('li strong').map(item => item.text())).toEqual(['atmosphere'])
    await weak.get('select').setValue('12')
    await flushPromises()
    expect(weak.findAll('li strong').map(item => item.text())).toEqual(['diet'])
    expect(getAllChapterWords).toHaveBeenCalledTimes(2)
  } finally {
    view.unmount()
  }
})

it('shows an empty list when a status has no words', async () => {
  const { view } = await openEnglishPage('admin-english-study-ledger')
  try {
    const dialog = await openWordStatus(view, '待复习')
    expect(dialog.attributes('aria-label')).toBe('待复习 · 0 词')
    expect(dialog.text()).toContain('这个状态下暂时没有单词。')
    expect(getAllChapterWords).not.toHaveBeenCalled()
  } finally {
    view.unmount()
  }
})
