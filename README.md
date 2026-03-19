# 曹进龙的个人作品集网站

这是一个使用 Vue 3 构建的现代化个人简历和作品集网站，展示了我的 WebGIS 开发技能和项目经验。

## 🌟 网站特色

- **响应式设计**：完美适配桌面端、平板和移动端
- **3D 交互**：首页集成 Three.js 3D 场景展示
- **动态效果**：打字机特效、平滑滚动、动画过渡
- **现代 UI**：精美的渐变效果、卡片式布局
- **完整内容**：个人介绍、技术技能、教育背景

## 📦 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **路由**: Vue Router
- **状态管理**: Pinia
- **样式**: SCSS
- **3D**: Three.js
- **动画**: GSAP
- **图标**: FontAwesome
- **轮播**: Swiper
- **测试**: Vitest

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

### 运行测试

```bash
pnpm test:unit
```

### 代码格式化

```bash
pnpm lint
```

## 📁 项目结构

```
src/
├── components/          # Vue 组件
│   ├── AppHome.vue     # 首页组件
│   ├── AppAbout.vue    # 关于我组件
│   ├── AppSkills.vue   # 技能展示组件
│   ├── AppQualification.vue  # 教育背景组件
│   ├── AppNav.vue       # 导航组件
│   ├── AppFooter.vue    # 页脚组件
│   ├── MyOfficeScene.vue    # Three.js 3D 场景
│   └── TheQualificationItem.vue  # 资格项组件
├── views/              # 页面视图
│   └── HomeView.vue    # 主页视图
├── styles/             # 全局样式
├── assets/             # 静态资源
├── App.vue            # 根组件
└── main.js            # 入口文件
```

## 📋 网站内容

### 首页
- 欢迎语打字机特效
- WebGIS 工程师职业介绍
- Three.js 3D 互动场景
- 滚动引导

### 关于我
- 个人照片展示
- 自我介绍
- 基本信息（年龄、学历）

### 技能
- 前端技术栈展示
- GIS 相关技术
- 开发工具和框架

### 教育背景
- 学历信息
- 毕业院校
- 专业介绍

### 联系方式
- 电话
- 微信
- 邮箱
- 现居住地

## 🌐 在线访问

网站已部署到 GitHub Pages：[访问我的个人网站](https://jinlong-work.github.io/personal-website)

## 📱 联系方式

- **邮箱**: 1426559553@qq.com
- **电话**: 13310539521
- **微信**: 查看网站二维码
- **现居住地**: 广东惠州

## 📄 关于我

我叫曹进龙，2023年毕业于湖北大学地理信息科学专业。在过去的一年中，我深入学习了 WebGIS 开发相关的知识，掌握了诸如 Vue、Openlayers、Mapbox、Cesium 等前端技术，并且熟悉使用这些技术来开发与 GIS 相关的应用。我对地理信息系统有着浓厚的兴趣，乐于钻研技术细节，致力于将地理数据与现代 Web 技术相结合，开发出高效、直观的 GIS 应用。

## 📝 开发说明

本项目使用中文作为主要语言，已移除国际化功能，确保内容的一致性和简洁性。

## 📄 许可证

© 2024 Caojinlong. All rights reserved.
