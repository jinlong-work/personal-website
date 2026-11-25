export function shuffleWords(words) {
  const shuffled = words.slice()
  for (let index = shuffled.length - 1; index > 0; index--) {
    const otherIndex = Math.floor(Math.random() * (index + 1))
    const word = shuffled[index]
    shuffled[index] = shuffled[otherIndex]
    shuffled[otherIndex] = word
  }
  return shuffled
}

export const STUDY_GROUP_SIZE = 10
export const EMPTY_STUDY_SUMMARY = createStudySummary()

function createStudySummary() {
  return { learned: [], stable: [], due: [], weak: [] }
}

export function summarizeStudy(progress, now) {
  const summaries = new Map()
  for (const entry of progress.values()) {
    const summary = summaries.get(entry.chapterId) ?? createStudySummary()
    summary.learned.push(entry)
    if (entry.reviewStep >= 3) summary.stable.push(entry)
    if (Date.parse(entry.nextReviewAt) <= now) summary.due.push(entry)
    if (entry.rating === 'FORGOT' || entry.rating === 'UNSURE') summary.weak.push(entry)
    summaries.set(entry.chapterId, summary)
  }
  return summaries
}

export function nextStudyGroup(words, progress) {
  return words.filter(word => !progress.has(word.id)).slice(0, STUDY_GROUP_SIZE)
}

export function nextReviewGroup(entries) {
  return entries.slice()
    .sort((first, second) => Date.parse(first.nextReviewAt) - Date.parse(second.nextReviewAt))
    .slice(0, STUDY_GROUP_SIZE)
}

export function recallQuestion(word, retry = false) {
  return { word, retry, listen: word.hasAudio && Math.random() < 1 / 3 }
}

export function requeueForgottenWord(session, question) {
  const nextIndex = Math.min(session.index + 4, session.questions.length)
  if (nextIndex > session.index + 1) {
    session.questions.splice(nextIndex, 0, recallQuestion(question.word, true))
  }
}
