export const RESUME_FILE_NAME = '曹进龙-个人简历.pdf'
export const RESUME_FILE_PATH = `${import.meta.env.BASE_URL}${RESUME_FILE_NAME}`

export const fallbackProjects = [
  {
    id: 1,
    name: '海南国家调查地图基层网点系统',
    type: '大屏二维项目',
    description:
      '该项目是一个集大屏数据可视化、地理信息分析与后台运维管理于一体的综合性平台。主要用于展示和管理调查机构、专业及区域的分布与实时数据，通过“一张图”的形式实现对海南省调查资源的直观监管。',
    technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
    achievements: [
      '调查地图大屏开发：独立负责调查地图大屏的整体架构与开发，通过 ECharts 与 ArcGIS API for JS，实现调查机构、调查专业及多维度数据展示，支持实时动态渲染与地图下钻。',
      '调查经济地图大屏开发：展示海南省全体居民、城镇居民和农村居民的收入收支情况，支持多类统计数据查看，并使用 ECharts 地图进行可视化呈现。',
      '运维管理模块建设：开发配套运维管理模块，负责调查机构、辅调员、调查证及调查网点等数据的维护与展示。'
    ],
    images: [
      '/img/调查一张图.jpg',
      '/img/调查一张图02.jpg',
      '/img/调查一张图03.jpg',
      '/img/调查一张图05.jpg'
    ]
  },
  {
    id: 2,
    name: '深造村便民服务系统',
    type: '大屏三维项目',
    description:
      '该系统为大屏三维项目，属于琼中番响村智慧乡村项目，提供村庄总览、人口统计和领导小组展示，同时通过实时三维地图展示村庄规划与基础设施布局。',
    technologies: ['Vue 3', '超图版Cesium', 'Element Plus'],
    achievements: [
      '负责村庄总览大屏开发，实现村庄概述、人口统计和领导小组等内容的集中展示。',
      '根据项目需求完成三维地图界面开发与地图服务加载，实现服务切换、查询及弹窗拖拽功能。',
      '完成报建审查功能，支持用户绘制区域或输入坐标，判定占用生态红线、林地和基本农田等面积。'
    ],
    images: [
      '/img/深造村03.jpg',
      '/img/深造村04-脱敏.webp'
    ]
  },
  {
    id: 3,
    name: '海南三维项目',
    type: '三维项目',
    description:
      '海南 3D 项目是一个基于 Vue 2 和 Cesium 构建的三维地理信息系统应用，专注于提供海南地区的三维地理空间分析与可视化能力，支持空间分析、数据展示和地图浏览等功能。',
    technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
    achievements: [
      '宜农资源分析：基于坡度分析计算符合条件的图斑面积，并输出可视化结果，支持点击 ArcGIS 图斑、绘制矩形和上传文件三种分析区域获取方式。',
      '水土保持监管：通过区域开挖分析计算不同地形服务在绘制范围内的挖方量差值，用于评估水土流失情况。',
      '交互功能开发：独立完成地图标绘系统、多窗口对比分析功能以及比例尺组件开发。'
    ],
    images: [
      '/img/海南3D01.jpg',
      '/img/海南3D03.jpg',
      '/img/海南3D05.jpg',
      '/img/海南3D06.jpg'
    ]
  },
  {
    id: 5,
    name: '地籍知识库系统',
    type: '管理系统',
    description:
      '为地籍相关人员提供地籍知识检索、课程学习和试题练习的一站式知识管理平台，支持文档在线预览、视频课程播放和 AI 智能问答等功能。',
    technologies: ['Vue 3', 'Element Plus', 'ECharts', 'Tailwindcss'],
    achievements: [
      '多模块知识库系统：开发地籍资料库、课程库和试题库三大核心模块，实现知识分类管理与展示。',
      '智能检索与筛选：实现按标题、正文等多维度搜索，并支持按资料类型、发布机构与时间范围筛选和排序。',
      '在线文档预览：集成 PDF.js 实现 PDF 在线预览，支持元数据展示与目录导航。',
      '视频课程播放：开发课程播放功能，支持视频上传、进度展示和错误处理，并使用 Supabase SDK 实现大文件分片上传。',
      'AI 智能问答：集成 Dify AI 聊天机器人，在资料库页面提供全屏交互式知识问答服务。',
      '管理后台系统：开发完整的 CRUD 管理能力，覆盖资料、课程、试题和用户认证。',
      '响应式设计：采用 Tailwind CSS 实现现代化响应式布局，适配不同屏幕尺寸并优化用户体验。'
    ],
    images: [
      '/img/地籍知识库01.jpg',
      '/img/地籍知识库03.jpg',
      '/img/地籍知识库04.jpg',
      '/img/地籍知识库06.jpg',
      '/img/地籍知识库07.jpg'
    ]
  },
  {
    id: 6,
    name: '海南省机器管督查系统',
    type: '管理系统',
    description:
      '面向海南省自然资源执法督查的一体化管理平台，整合海洋、林业、矿产、耕地等多领域执法督查功能，实现从问题发现、交办、整改到验收的全流程数字化管理。',
    technologies: ['Vue 3', 'Element Plus', 'ECharts', 'Vite', 'Pinia', 'Axios'],
    achievements: [
      '七大业务模块前端开发：独立完成海洋督查、林业督查、矿产执法、乱占耕地、省级卫片执法、砂质岸线和督查问题等模块的前端页面开发与功能实现。',
      '通用组件封装：抽象并封装时间线、材料上传和地图定位等公共组件，提升代码复用率与开发效率。',
      '复杂表单交互：实现多步骤填报、动态表格编辑、级联选择器和表单验证等复杂交互能力。',
      'GIS 地图前端集成：对接 GIS 地图服务，实现图斑定位、空间查询和影像图层切换等功能。',
      '数据可视化大屏：基于 ECharts 开发多维度数据统计页面，包括整改率趋势图、类型分布图和区域统计图表。',
      '文件预览功能：集成 vue3-pdf-app 实现 PDF 在线预览，并结合 viewerjs 实现图片在线查阅。',
      '批量操作优化：实现批量导入、批量导出和批量审核等功能，支持大文件上传与进度展示。',
      '响应式布局适配：通过动态计算表格高度和弹性布局等方式适配不同屏幕尺寸，并支持大屏展示模式。',
      '性能优化实践：使用 KeepAlive 缓存页面、虚拟列表优化大数据量表格，并按需加载组件。',
      '权限控制前端实现：基于角色权限动态渲染菜单、控制按钮显隐并过滤数据范围。'
    ],
    images: [
      '/img/机器管督查04.jpg',
      '/img/机器管督查05.jpg',
      '/img/机器管督查06.jpg'
    ]
  },
  {
    id: 7,
    name: '海南岛台风路径展示',
    type: '二维项目',
    description:
      '为海南一张图系统二维地图新增台风路径展示功能，用户可通过地图查看不同台风的路径，并配合多类数据进行综合研判。',
    technologies: ['Vue 2', 'ArcGIS API for JS'],
    achievements: [
      '路径绘制：使用实线绘制实况路径、虚线绘制预报路径，并按台风等级与不同台风进行颜色区分。',
      '风圈可视化：绘制七级、十级和十二级风圈，支持四个方向半径不一致的椭圆风圈表达。',
      '交互动效：实现台风图标持续旋转动画，点击路径点后显示详情弹窗并重新绘制风圈。'
    ],
    images: ['/img/台风路径展示.jpg']
  },
  {
    id: 8,
    name: '烈士纪念设施一张图',
    type: '三维项目',
    description:
      '为海南一张图系统三维地图新增烈士纪念设施展示功能，用户可通过地图查看不同烈士纪念设施的信息并进行相关数据浏览。',
    technologies: ['Vue 3', 'Cesium', 'ECharts'],
    achievements: [
      '大屏界面开发：负责烈士纪念设施一张图的大屏整体布局与样式实现。',
      '设施聚合展示：基于 Cesium 实现海南省烈士纪念设施空间聚合展示，支持随地图缩放动态调整聚合粒度。',
      '详情交互功能：实现设施图标点击与列表选择双触发，弹出详情窗口展示设施介绍、历史背景和图片资料。'
    ],
    images: [
      '/img/烈士一张图01.jpg',
      '/img/烈士一张图02.jpg',
      '/img/烈士一张图03.jpg',
      '/img/烈士一张图04.jpg'
    ]
  },
  {
    id: 9,
    name: '海南省林业一张图',
    type: '二维大屏项目',
    description:
      '面向海南省林业资源综合监管与专题分析建设的可视化平台，集中展示森林资源、公益林、湿地、自然保护地、红树林、森林防火和有害生物防控等业务数据，并通过一张图呈现资源概况、空间分布与应用系统入口。',
    technologies: ['Vue 2', 'Element UI', 'ECharts', 'WebGIS', 'Axios'],
    achievements: [
      '可视化大屏开发：完成 1920×1080 林业数据大屏的整体布局与页面开发，采用动态缩放适配不同分辨率，并构建可复用的指标卡片、图表和专题面板组件。',
      '林业专题整合：围绕森林资源、公益林、自然保护地、红树林、森林防火和有害生物防控等业务，开发多类专题页面与统计图表。',
      'WebGIS 地图集成：将林业专题地图嵌入大屏，联动展示资源分布、行政区划和业务指标，形成地图与两侧数据面板协同展示的一张图界面。',
      '配置化与系统联动：使用 JSON 配置和 Axios 动态加载面板数据、菜单及跳转信息，整合数据中心和多个林业业务系统入口，提升页面扩展与维护效率。'
    ],
    images: [
      '/img/林业一张图01.jpg',
      '/img/林业一张图02.jpg',
      '/img/林业一张图03.jpg',
      '/img/林业一张图04.jpg'
    ]
  }
]

export const siteContent = {
  zh: {
    name: '曹进龙',
    profileTitle: 'GIS 全栈工程师',
    profileDescription:
      '以 WebGIS 前端开发为核心优势，目前正在系统补强 Java 后端能力，逐步向 GIS 全栈方向转型。',
    sections: {
      about: '关于我',
      experience: '工作经历',
      skills: '技术技能',
      projects: '项目经历',
      contact: '联系方式'
    },
    about: [
      '您好，我是曹进龙，一名正在向 GIS 全栈方向转型的开发工程师。自 2023 年毕业于湖北大学地理信息科学专业以来，我一直深耕 WebGIS 领域的技术实践与应用开发。',
      '我的能力重心是 WebGIS 前端：熟练进行 2D/3D 地图开发、空间数据可视化、复杂地图交互和数据大屏建设，能够将 GIS 业务需求转化为清晰、流畅且易用的前端产品。',
      '目前我正在系统学习并实践 Java、Spring Boot、MyBatis 等后端技术，已能够承担接口、业务逻辑和数据访问层的开发工作，并持续补强服务端架构与工程化能力。',
      '我的目标是在保持 WebGIS 前端优势的基础上，逐步形成覆盖前端地图应用、Java 后端服务与空间数据处理的 GIS 全栈交付能力。'
    ],
    experience: [
      {
        title: 'WebGIS 开发工程师',
        company: '湖北嘉款科技有限公司',
        period: '2024.11 - 至今',
        description:
          '长期驻场海南省测绘地理信息局，以 WebGIS 前端开发为主要职责，负责二维地图、三维地图、数据大屏及业务管理系统建设；同时参与若依框架下的 Java 后端接口与业务功能开发，能够独立推进多个 GIS 项目交付。'
      },
      {
        title: 'WebGIS 开发实习生',
        company: '武汉中地数码科技有限公司',
        period: '2022.07 - 2022.09',
        description:
          '使用 HTML、CSS、JavaScript 及 OpenLayers 进行 WebGIS 前端开发，构建交互式地图应用，实现图层切换、视频监控和测量工具等功能，并系统掌握 WebGIS 开发基础。'
      }
    ],
    skillGroups: [
      {
        title: '前端基础技能',
        items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'ES6+']
      },
      {
        title: 'Vue 相关技术',
        items: [
          'Vue 2',
          'Vue 3',
          'Vue Router',
          'Pinia',
          'Webpack',
          'Vite',
          'Element Plus',
          'ECharts'
        ]
      },
      {
        title: 'GIS 与三维地图',
        items: [
          'OpenLayers',
          'ArcGIS API for JS',
          'Cesium',
          'MapBox',
          'Three.js',
          'WebGL',
          'MapGIS'
        ]
      },
      {
        title: 'Java 后端与接口',
        items: [
          'Java',
          'Spring Boot',
          'Spring MVC',
          'MyBatis / MyBatis-Plus',
          'RESTful API',
          '若依框架',
          'JWT / RBAC',
          'Swagger / Knife4j'
        ]
      },
      {
        title: '数据库与服务',
        items: ['MySQL', 'PostgreSQL', 'Redis']
      },
      {
        title: '工程化与协作',
        items: [
          'Git/Gitee',
          'pnpm / npm',
          'Axios',
          'Linux',
          'Nginx',
          'Docker',
          'API 联调',
          '空间分析'
        ]
      }
    ],
    projectHint: '点击查看详情',
    resumePreview: '预览简历',
    contactIntro:
      '期待与志同道合的技术伙伴交流合作。目前我正以 WebGIS 前端优势为基础向 GIS 全栈方向发展，并对相关岗位保持开放态度，欢迎通过以下方式联系我：',
    location: '湖北恩施',
    wechatLabel: '微信',
    qrAlt: '微信二维码',
    footer: '© 2024 曹进龙. All rights reserved.',
    dialog: {
      overview: '项目简介',
      techStack: '技术栈',
      achievements: '主要职责',
      gallery: '项目截图',
      imageHint: '点击图片可放大预览',
      disclaimer: '展示图片已筛选并完成隐私脱敏',
      close: '关闭'
    }
  },
  en: {
    name: 'Jinlong Cao',
    profileTitle: 'GIS Full-Stack Engineer',
    profileDescription:
      'Building on a strong WebGIS frontend foundation while systematically strengthening my Java backend skills and transitioning toward GIS full-stack engineering.',
    sections: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    about: [
      'I am Jinlong Cao, a developer currently transitioning toward GIS full-stack engineering. Since graduating from Hubei University in 2023 with a major in Geographic Information Science, I have focused on building real-world WebGIS applications.',
      'My primary expertise is in 2D and 3D mapping, spatial data visualization, complex map interactions, and large-screen dashboards. I turn GIS requirements into frontend products that are clear, responsive, and intuitive to use.',
      'I am systematically learning and applying Java, Spring Boot, and MyBatis. I can already deliver backend APIs, business logic, and data-access features while continuing to strengthen my server-side architecture and engineering skills.',
      'My goal is to retain WebGIS frontend as a core strength while developing end-to-end delivery capabilities across map applications, Java backend services, and spatial data workflows.'
    ],
    experience: [
      {
        title: 'WebGIS Developer',
        company: 'Hubei Jiakuan Technology Co., Ltd.',
        period: 'Nov 2024 - Present',
        description:
          'Worked onsite for the Hainan Surveying and Geographic Information Bureau with WebGIS frontend development as my primary responsibility, building 2D and 3D maps, dashboards, and business systems. I also contributed Java backend APIs and business features within the Ruoyi framework and independently drove multiple GIS projects to delivery.'
      },
      {
        title: 'WebGIS Development Intern',
        company: 'Wuhan Zhongdi Digital Technology Co., Ltd.',
        period: 'Jul 2022 - Sep 2022',
        description:
          'Built interactive WebGIS interfaces with HTML, CSS, JavaScript, and OpenLayers, including layer switching, video monitoring, and measurement tools. This role helped me build a solid foundation in WebGIS development.'
      }
    ],
    skillGroups: [
      {
        title: 'Frontend Fundamentals',
        items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'ES6+']
      },
      {
        title: 'Vue Ecosystem',
        items: [
          'Vue 2',
          'Vue 3',
          'Vue Router',
          'Pinia',
          'Webpack',
          'Vite',
          'Element Plus',
          'ECharts'
        ]
      },
      {
        title: 'GIS & 3D Mapping',
        items: [
          'OpenLayers',
          'ArcGIS API for JS',
          'Cesium',
          'MapBox',
          'Three.js',
          'WebGL',
          'MapGIS'
        ]
      },
      {
        title: 'Java Backend & APIs',
        items: [
          'Java',
          'Spring Boot',
          'Spring MVC',
          'MyBatis / MyBatis-Plus',
          'RESTful API',
          'Ruoyi Framework',
          'JWT / RBAC',
          'Swagger / Knife4j'
        ]
      },
      {
        title: 'Databases & Services',
        items: ['MySQL', 'PostgreSQL', 'Redis']
      },
      {
        title: 'Engineering & Collaboration',
        items: [
          'Git/Gitee',
          'pnpm / npm',
          'Axios',
          'Linux',
          'Nginx',
          'Docker',
          'API Integration',
          'Spatial Analysis'
        ]
      }
    ],
    projectHint: 'Click for details',
    resumePreview: 'Preview Resume',
    contactIntro:
      'I’m building toward GIS full-stack engineering from a strong WebGIS frontend foundation and remain open to related roles. If you would like to discuss projects, opportunities, or ideas, feel free to reach out.',
    location: 'Enshi, Hubei',
    wechatLabel: 'WeChat',
    qrAlt: 'WeChat QR Code',
    footer: '© 2024 Jinlong Cao. All rights reserved.',
    dialog: {
      overview: 'Project Overview',
      techStack: 'Tech Stack',
      achievements: 'Key Contributions',
      gallery: 'Screenshots',
      imageHint: 'Click an image to enlarge',
      disclaimer: 'Portfolio images have been reviewed and privacy-redacted.',
      close: 'Close'
    }
  }
}

const projectTranslations = {
  en: {
    1: {
      name: 'Hainan National Survey Map Grassroots Network System',
      type: '2D Dashboard Project',
      description:
        'A comprehensive platform that combines big-screen data visualization, geospatial analysis, and backend operations management. It presents survey organizations, disciplines, and regional data through a unified one-map experience for Hainan Province.',
      technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
      achievements: [
        'Owned the architecture and frontend delivery of the survey dashboard, integrating ECharts with ArcGIS API for JS to visualize institutions, disciplines, and multi-dimensional metrics with real-time updates and drill-down map interactions.',
        'Built an economic dashboard that visualized income and expenditure data for urban and rural residents across Hainan using ECharts-based map presentations.',
        'Delivered a companion operations module to maintain and display key dashboard data, including institutions, assistant investigators, credentials, and survey outlets.'
      ]
    },
    2: {
      name: 'Shenzao Village Public Service System',
      type: '3D Dashboard Project',
      description:
        'A 3D dashboard built for the smart-village initiative in Fanxiang Village, Qiongzhong. It provides a village overview, demographic summaries, leadership information, and a real-time 3D map for planning and infrastructure visualization.',
      technologies: ['Vue 3', 'Cesium (SuperMap Edition)', 'Element Plus'],
      achievements: [
        'Built the village overview dashboard used to present village profiles, population statistics, and leadership information.',
        'Implemented the 3D map interface and service-loading workflow, including service switching, data queries, and draggable popup interactions.',
        'Delivered a construction-review tool that let users draw areas or enter coordinates to evaluate overlaps with ecological red lines, forest land, and permanent farmland.'
      ]
    },
    3: {
      name: 'Hainan 3D GIS Project',
      type: '3D GIS Project',
      description:
        'A 3D geographic information system built with Vue and Cesium for Hainan. The project focuses on spatial analysis and 3D visualization, helping users explore geospatial data through interactive browsing, analysis, and visual presentation.',
      technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
      achievements: [
        'Implemented agricultural suitability analysis based on slope calculations, with support for selecting analysis areas from ArcGIS features, drawn rectangles, or uploaded files.',
        'Built soil and water conservation supervision tools that estimated excavation differences across terrain services to assess erosion risks.',
        'Delivered advanced interactions including a full map markup system, multi-window comparison analysis, and custom scale components.'
      ]
    },
    5: {
      name: 'Cadastral Knowledge Base System',
      type: 'Knowledge Management System',
      description:
        'A one-stop knowledge platform for cadastral professionals that supports knowledge retrieval, course learning, practice questions, online document preview, video playback, and AI-powered Q&A.',
      technologies: ['Vue 3', 'Element Plus', 'ECharts', 'Tailwind CSS'],
      achievements: [
        'Built three core modules for cadastral materials, courses, and question banks, enabling structured knowledge management and presentation.',
        'Implemented multi-dimensional search and filtering by title, full text, resource type, publisher, date range, and sorting rules.',
        'Integrated PDF.js for online PDF preview with document metadata display and table-of-contents navigation.',
        'Developed video-course playback with upload, progress display, and error handling, and used Supabase SDK for large-file chunked uploads.',
        'Integrated a Dify AI assistant to provide full-screen, knowledge-based conversational support inside the platform.',
        'Built complete CRUD-based admin workflows for resources, courses, question banks, and user authentication.',
        'Created a responsive UI with Tailwind CSS to improve usability across different screen sizes.'
      ]
    },
    6: {
      name: 'Hainan Intelligent Supervision Platform',
      type: 'Management System',
      description:
        'An integrated supervision platform for natural resources enforcement in Hainan, covering marine, forestry, mining, cultivated land, and related domains. It digitizes the full lifecycle from issue discovery and assignment to rectification and acceptance.',
      technologies: ['Vue 3', 'Element Plus', 'ECharts', 'Vite', 'Pinia', 'Axios'],
      achievements: [
        'Independently delivered frontend pages and features for seven business modules, including marine supervision, forestry inspection, mining enforcement, illegal farmland occupation, provincial satellite-image enforcement, coastline inspection, and issue management.',
        'Designed reusable shared components such as a timeline, material upload module, and map positioning widget to improve development speed and consistency.',
        'Implemented complex form interactions including multi-step workflows, dynamic table editing, cascaders, and robust validation.',
        'Integrated GIS map services to support feature positioning, spatial queries, and imagery layer switching.',
        'Built multi-dimensional data dashboards with ECharts, including trend charts, type distributions, and regional statistics.',
        'Integrated vue3-pdf-app and viewerjs to support online preview of PDF files and images.',
        'Optimized batch operations such as bulk import, export, and review, with large-file upload progress support.',
        'Adapted layouts for multiple screen sizes with dynamic table heights and flexible page structures, including large-screen display modes.',
        'Improved runtime performance through page caching, virtual lists for large tables, and on-demand component loading.',
        'Implemented frontend permission controls with role-based menu rendering, button visibility rules, and data-scope filtering.'
      ]
    },
    7: {
      name: 'Typhoon Track Visualization for Hainan Island',
      type: '2D Map Feature',
      description:
        'A typhoon-track visualization feature added to the 2D map of the Hainan one-map system, allowing users to inspect different storm paths together with supporting data.',
      technologies: ['Vue 2', 'ArcGIS API for JS'],
      achievements: [
        'Drew live tracks with solid lines and forecast tracks with dashed lines, using different colors for each typhoon and level-based coloring for track points.',
        'Visualized level-7, level-10, and level-12 wind circles with elliptical geometry and different radii in four directions.',
        'Added rotating typhoon-marker animation and interactive path points that reopened a details popup and re-rendered wind circles when clicked.'
      ]
    },
    8: {
      name: 'Martyrs Memorial Facilities One-Map',
      type: '3D Map Feature',
      description:
        'A 3D visualization feature added to the Hainan one-map system to display memorial facilities for martyrs, enabling users to browse facility information directly on the map.',
      technologies: ['Vue 3', 'Cesium', 'ECharts'],
      achievements: [
        'Implemented the overall large-screen layout and styling for the memorial-facilities one-map interface.',
        'Built Cesium-based clustering for memorial facilities across Hainan, with cluster granularity that adjusts dynamically as the map zoom level changes.',
        'Implemented dual-trigger details interactions from both map icons and list selections, showing facility information, historical background, and related images in a popup.'
      ]
    },
    9: {
      name: 'Hainan Forestry One-Map',
      type: '2D Dashboard Project',
      description:
        'A visual analytics platform for integrated forestry-resource supervision in Hainan. It brings together forest resources, public-welfare forests, wetlands, protected areas, mangroves, wildfire prevention, pest control, and connected business-system entry points in one map-centric interface.',
      technologies: ['Vue 2', 'Element UI', 'ECharts', 'WebGIS', 'Axios'],
      achievements: [
        'Built the 1920×1080 forestry dashboard with resolution-aware scaling and reusable metric cards, charts, and thematic panels.',
        'Delivered thematic views and statistical visualizations for forest resources, public-welfare forests, protected areas, mangroves, wildfire prevention, and pest control.',
        'Integrated the WebGIS map with resource distributions, administrative context, and business indicators to coordinate the central map with surrounding data panels.',
        'Used JSON configuration and Axios-based loading for dashboard data, menus, and navigation, connecting the data center with multiple forestry business systems while keeping the interface maintainable.'
      ]
    }
  }
}

export function localizeProjects(projects, locale) {
  const localeProjects = projectTranslations[locale]

  if (!localeProjects) {
    return projects
  }

  return projects.map((project) => {
    const localizedProject = localeProjects[project.id]

    if (!localizedProject) {
      return project
    }

    return {
      ...project,
      ...localizedProject
    }
  })
}
