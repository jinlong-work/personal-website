import request from '@/utils/request'

export async function getChapters(signal) {
  const { data } = await request.get('/english/chapters', { signal })
  return data.data
}

export async function getChapterWords(chapterId, pageNum, pageSize, signal) {
  const { data } = await request.get('/english/chapters/' + chapterId + '/words', {
    params: { pageNum, pageSize },
    signal
  })
  return data.data
}

export async function getAllChapterWords(chapterId, signal) {
  const pageSize = 100
  const first = await getChapterWords(chapterId, 1, pageSize, signal)
  const remaining = Math.max(0, Math.ceil(first.total / pageSize) - 1)
  const pages = await Promise.all(
    Array.from({ length: remaining }, (_, index) => getChapterWords(chapterId, index + 2, pageSize, signal))
  )
  return first.rows.concat(pages.flatMap(page => page.rows))
}

export async function getChapterPlaylist(chapterId, signal) {
  const { data } = await request.get('/english/chapters/' + chapterId + '/playlist', { signal })
  return data.data
}

export async function getWordAudio(wordId, signal) {
  const { data } = await request.get('/english/words/' + wordId + '/audio', { responseType: 'blob', signal })
  if (data.type !== 'audio/mpeg' || !data.size) throw new Error('词汇音频格式异常')
  return data
}

export async function getStudyProgress(signal) {
  const { data } = await request.get('/english/study/progress', { signal })
  return data.data
}

export async function saveStudyProgress(wordId, rating, version) {
  const { data } = await request.put('/english/study/words/' + wordId, { rating, version })
  return data.data
}
