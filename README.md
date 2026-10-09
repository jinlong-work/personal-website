# 曹进龙的个人作品集网站

## 后台登录与管理首页

点击首页导航中的姓名进入 `/#/admin`，路由守卫向后端验证登录状态：仍有效时直接进入管理页，未登录或已失效时才跳转到 `/#/admin/login`。使用数据库中已创建的管理员账号登录成功后进入管理页。已登录时直接打开登录页，也会转到管理页并验证状态。

- 登录、获取当前账号、退出登录分别调用 `/api/auth/login`、`/api/auth/me`、`/api/auth/logout`。
- 登录采用 Bearer JWT，Token及有效期保存到 `sessionStorage`，密码和请求体不缓存。浏览器禁用存储时只保留当前页面内存中的登录状态。
- 参考本机若依 Vue3：`src/api/admin/auth.js` 定义接口；`src/utils/auth.js` 管理 Token；`src/utils/request.js` 统一注入 Authorization、处理续期响应头及失效；`src/services/adminAuth.js` 管理账号状态；路由守卫保护后台。
- “个人资料”下方提供修改密码，需填写当前密码、新密码及确认密码。新密码至少8个字符，最多72个UTF-8字节；修改成功撤销账号全部 Token，自动返回登录页，用新密码重新登录。修改前请先保存其他账号资料。
- 后台路由进入时携带 Token 向服务端验证账号，401或权限撤销会清理本机 Token 并返回登录页；页面上的“刷新账号信息”也会重新验证。登录失败401不会触发全局跳转。
- 从后台返回公开网站不会退出登录，再次点击姓名可继续进入后台。验证时网络或Redis暂不可用，会保留Token、提示重试并返回公开网站，不显示重新登录表单；后台刷新资料失败时保留页面并显示重试提示。
- 默认登录缓存有效期30分钟，剩余不超过20分钟时受保护请求续期，最长登录8小时，后端配置可调整。后台显示服务端返回的当前和最长有效时间；滑动续期不更换 JWT。后端登录缓存已接入Redis，JWT配置不变且缓存未过期时，重启后可继续使用。Redis不可用返回503，前端保留Token供恢复后重试；首次切换到Redis需重新登录。
- 后台首页显示真实账号资料。“个人资料”支持修改登录账号、昵称和邮箱，通过 `PUT /api/auth/me` 保存到数据库。昵称及邮箱可留空；账号不区分大小写且必须唯一，修改后下次登录使用新账号，当前 Token 保留。保存后顶部账号名称和工作台同步更新。项目管理和网站设置目前为占位页面。

本地联调：先启动 `personal-website-sys` 后端（默认 `8080`），再运行本项目前端的 `pnpm dev`，通过 `http://localhost:5173` 访问。Vite 将 `/api` 代理到 `http://127.0.0.1:8080`，前端固定使用 `5173` 端口；后端端口变更时同步修改 `vite.config.js` 的代理地址。

生产部署使用 HTTPS，将同域名下的 `/api` 反向代理到后端，Vite 开发代理不会随静态构建部署。后端 `AUTH_ALLOWED_ORIGINS` 应包含实际前端来源，并配置 `JWT_SECRET`。也可在构建前配置 `VITE_API_BASE_URL` 为包含 `/api` 的后端地址；不同来源需要后端允许 `Authorization` 请求头及有效期响应头，前端不携带 Cookie 凭据。JWT更新后前后端需同步部署并重新登录。

本次代码接入未运行构建、接口测试或浏览器测试。

## 新版首页与 AI 演示

首页已接入 Spatial Portfolio 设计，运行 `pnpm dev` 后访问根路径即可查看。包括桌面与移动端布局、等高线入场与浮动、鼠标视差和滚动渐入，动效固定开启。

- `src/views/HomeView.vue`：首页布局、项目配置加载、联系方式与弹窗联动。
- `src/components/SpatialTerrain.vue`：可编辑 SVG 地形动效。
- `src/components/PortfolioAssistant.vue`：AI 演示窗口、消息状态与项目卡片。
- `src/services/portfolioAssistant.js`：问答数据入口。目前仅提供本地示例回答，不调用模型。

接入真实 AI 时，替换 `getPortfolioReply({ question, history, projects, signal })` 的实现，调用自己的后端服务；返回 `{ text, projectIds?, showResume?, showContact? }` 即可沿用现有窗口。`projectIds` 对应项目数据中的数字 ID。窗口已支持请求取消和失败提示，密钥应保存在服务端，勿写入前端代码。同时更新窗口底部的演示提示。

原有项目配置 `public/config/projects.json`、本地备用项目、项目图集、PDF 简历预览与下载均保留。`public/design-preview.html` 是此前的独立设计预览，正式入口为 Vue 首页。

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

网站地址：[www.caojinlong.top](https://www.caojinlong.top)

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
