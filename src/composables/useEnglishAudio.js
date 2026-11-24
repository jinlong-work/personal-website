import { onBeforeUnmount, ref } from 'vue'
import { getChapterPlaylist, getWordAudio } from '@/api/admin/english'
import { getErrorStatus } from '@/utils/request'

export function useEnglishAudio() {
  const playback = ref(null)
  const audioError = ref(null)
  let session = null

  function stop() {
    if (session) {
      const { controller, audio, url } = session
      session = null
      controller.abort()
      audio.onended = null
      audio.onerror = null
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
      if (url) URL.revokeObjectURL(url)
    }
    playback.value = null
  }

  function reset() {
    stop()
    audioError.value = null
  }

  function fail(run, message) {
    if (session !== run) return
    stop()
    audioError.value = { mode: run.mode, message }
  }

  function start(mode) {
    reset()
    session = { controller: new AbortController(), audio: new Audio(), url: null, mode }
    playback.value = { mode, loading: true }
    return session
  }

  async function playTrack(run, tracks, index) {
    const track = tracks[index]
    const state = { mode: run.mode, track, position: index + 1, total: tracks.length }
    playback.value = { ...state, loading: true }
    try {
      const blob = await getWordAudio(track.id, run.controller.signal)
      if (session !== run) return
      if (run.url) URL.revokeObjectURL(run.url)
      run.url = URL.createObjectURL(blob)
      run.audio.onerror = () => fail(run, '音频无法播放，请重试')
      run.audio.onended = () => {
        if (session !== run) return
        if (run.mode === 'loop') void playTrack(run, tracks, (index + 1) % tracks.length)
        else stop()
      }
      run.audio.src = run.url
      await run.audio.play()
      if (session === run) playback.value = { ...state, loading: false }
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        fail(run, '浏览器阻止了播放，请点击播放重试')
      } else {
        fail(run, getErrorStatus(error) === 404 ? '这条词汇暂无发音' : '音频加载失败，请重试')
      }
    }
  }

  function playWord(word, mode = 'word') {
    void playTrack(start(mode), [word], 0)
  }

  function toggleWord(word, mode = 'word') {
    if (playback.value?.mode === mode && playback.value.track?.id === word.id) {
      stop()
      return
    }
    playWord(word, mode)
  }

  async function toggleLoop(chapterId) {
    if (playback.value?.mode === 'loop') {
      stop()
      return
    }
    const run = start('loop')
    try {
      const tracks = await getChapterPlaylist(chapterId, run.controller.signal)
      if (session !== run) return
      if (tracks.length) void playTrack(run, tracks, 0)
      else fail(run, '本章暂无可播放的发音')
    } catch {
      fail(run, '播放列表加载失败，请重试')
    }
  }

  onBeforeUnmount(stop)

  return { playback, audioError, reset, playWord, toggleWord, toggleLoop }
}
