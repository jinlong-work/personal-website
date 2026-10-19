import { portfolioCopy } from './portfolioCopy.js'

export const basicFields = [
  { key: 'name', label: '姓名', max: 80, required: true },
  { key: 'latinName', label: '英文 / 拼音姓名', max: 100 },
  { key: 'title', label: '职业标题', max: 120, required: true },
  { key: 'role', label: '补充身份', max: 120 },
  { key: 'tagline', label: '首页主张', max: 100 },
  { key: 'taglineAccent', label: '主张强调文字', max: 100 },
  { key: 'intro', label: '首页简介', max: 600, multiline: true },
  { key: 'about', label: '关于我', max: 1600, multiline: true },
  { key: 'hometown', label: '来自哪里', max: 80 },
  { key: 'location', label: '目前所在地 / 工作地点', max: 100 },
  { key: 'email', label: '公开邮箱', max: 160 },
  { key: 'phone', label: '公开联系电话', max: 40 },
  { key: 'availability', label: '导航状态文案', max: 80 }
]

export function emptyResumeContent() {
  return {
    basic: Object.fromEntries(basicFields.map((field) => [field.key, ''])),
    education: [],
    experience: [],
    skills: []
  }
}

export const defaultResume = Object.fromEntries(
  ['zh', 'en'].map((locale) => {
    const copy = portfolioCopy[locale]
    return [
      locale,
      {
        basic: {
          name: copy.t1,
          latinName: 'JINLONG CAO',
          title: copy.t37,
          role: copy.hero.role,
          tagline: copy.hero.statement,
          taglineAccent: copy.hero.statementAccent,
          intro: copy.hero.intro,
          about: `${copy.p2}\n${copy.p3}`,
          hometown: copy.t53,
          location: copy.hero.currentLocation,
          email: '1426559553@qq.com',
          phone: '13310539521',
          availability: copy.t6
        },
        education: [
          {
            school: copy.t44,
            major: locale === 'zh' ? '地理信息科学' : 'Geographic Information Science',
            degree: locale === 'zh' ? '本科' : 'BSc',
            start: '',
            end: '2023',
            description: ''
          }
        ],
        experience: [
          { company: copy.t38, role: copy.t37, start: '2024-11', end: '', description: copy.t39 },
          { company: copy.t42, role: copy.t41, start: '2022-07', end: '2022-09', description: '' }
        ],
        skills: [
          { name: copy.t46, items: ['ArcGIS', 'Cesium', 'OpenLayers'], description: '' },
          { name: copy.t47, items: ['Vue 3', 'ECharts', 'Three.js'], description: '' },
          { name: copy.t48, items: ['Java', 'Spring Boot', 'MyBatis'], description: '' }
        ]
      }
    ]
  })
)

export function localizeResume(document, locale) {
  const zh = document.zh
  if (locale !== 'en') return zh
  const en = document.en || emptyResumeContent()
  return {
    basic: Object.fromEntries(
      basicFields.map(({ key }) => [key, en.basic?.[key]?.trim() || zh.basic[key]])
    ),
    education: en.education?.length ? en.education : zh.education,
    experience: en.experience?.length ? en.experience : zh.experience,
    skills: en.skills?.length ? en.skills : zh.skills
  }
}
