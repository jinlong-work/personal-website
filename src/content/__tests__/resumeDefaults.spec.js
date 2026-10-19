import { describe, expect, it } from 'vitest'
import { defaultResume, emptyResumeContent, localizeResume } from '../resumeDefaults'

describe('managed resume localization', () => {
  it('uses saved Chinese data including intentionally empty lists and optional fields', () => {
    const document = structuredClone(defaultResume)
    document.zh.education = []
    document.zh.skills = []
    document.zh.basic.phone = ''
    const resume = localizeResume(document, 'zh')
    expect(resume.education).toEqual([])
    expect(resume.skills).toEqual([])
    expect(resume.basic.phone).toBe('')
  })
  it('falls back to Chinese when an English field or section is missing', () => {
    const document = { zh: structuredClone(defaultResume.zh), en: emptyResumeContent() }
    document.en.basic.name = 'Custom English name'
    const resume = localizeResume(document, 'en')
    expect(resume.basic.name).toBe('Custom English name')
    expect(resume.basic.title).toBe(document.zh.basic.title)
    expect(resume.experience).toEqual(document.zh.experience)
    expect(resume.skills).toEqual(document.zh.skills)
  })
  it('uses translated arrays as complete sections without mixing languages', () => {
    expect(localizeResume(defaultResume, 'en').education[0].school).toBe('Hubei University')
    expect(localizeResume(defaultResume, 'en').experience).toHaveLength(2)
  })
})
