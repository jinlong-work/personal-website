/**
 * UI-independent response boundary. Replace this implementation with a call to
 * your own server when enabling a model. Keep provider credentials server-side.
 * Returns { text, projectIds, showResume, showContact }.
 */
export async function getPortfolioReply({ question, projects = [], signal, locale = 'zh' }) {
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
  const available = (ids) => ids.filter((id) => projects.some((p) => p.id === id))
  if (/三维|3d|cesium/i.test(question)) {
    return {
      text:
        locale === 'en'
          ? 'Yes. Jinlong worked on the Hainan 3D project, including terrain and spatial analysis, map annotations and multi-window comparison.'
          : '有的，进龙参与过海南三维项目。主要实践包括地形与空间分析、地图标绘，以及多窗口对比等交互功能。',
      projectIds: available([3])
    }
  }
  if (/java|backend|full.stack|后端|全栈/i.test(question)) {
    return {
      text:
        locale === 'en'
          ? 'Jinlong focuses on WebGIS frontend development. He is learning and applying Java, Spring Boot and MyBatis, including backend APIs and business features with the RuoYi framework. Full-stack GIS is his ongoing direction.'
          : '进龙的能力重心是 WebGIS 前端，目前正在系统学习和实践 Java、Spring Boot 与 MyBatis，并参与若依框架下的后端接口与业务开发。GIS 全栈是持续发展的方向。'
    }
  }
  if (/resume|contact|collaborat|email|简历|联系|合作|邮箱/i.test(question)) {
    return {
      text:
        locale === 'en'
          ? 'View Jinlong\u2019s resume for his full experience, or use the contact details on this website to get in touch.'
          : '可以查看进龙的简历，了解完整经历；也可以通过网站的联系方式直接交流。',
      showResume: true,
      showContact: true
    }
  }
  if (/skill|tech|技术|技能|擅长/i.test(question)) {
    return {
      text:
        locale === 'en'
          ? 'His strengths are WebGIS frontend development: 2D and 3D maps, spatial visualization and complex business interactions. He uses Vue, ArcGIS, Cesium and ECharts, while developing his Java backend skills.'
          : '主要优势是 WebGIS 前端：二维与三维地图、空间可视化和复杂业务交互。常用 Vue、ArcGIS、Cesium 和 ECharts，同时持续补强 Java 后端能力。'
    }
  }
  if (/project|portfolio|gis|项目|作品/i.test(question)) {
    return {
      text:
        locale === 'en'
          ? 'Start with these projects: the survey map demonstrates 2D mapping and dashboard development; the Hainan 3D project focuses on spatial analysis and map interactions.'
          : '可以从这些项目开始了解：调查地图项目展示二维地图与数据大屏能力，海南三维项目侧重空间分析与地图交互。',
      projectIds: available([1, 3])
    }
  }
  return {
    text:
      locale === 'en'
        ? 'This portfolio demo offers sample answers about projects, skills, Java backend development and the resume. Try asking about 3D GIS experience.'
        : '目前是作品集问答演示，支持项目、技术能力、Java 后端和简历相关的示例回答。你可以问“他有三维 GIS 项目经验吗？”来查看项目介绍。'
  }
}
