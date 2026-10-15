# 曹进龙的个人作品集网站

## 后台登录与管理首页

点击首页导航中的姓名进入 `/#/admin`，未登录时跳转到 `/#/admin/login`。登录页支持账号、密码、验证码、密码显示切换、表单校验与错误反馈；登录成功后获取真实账号资料并进入后台。已有会话打开后台或登录页时，先由后端确认状态。

- 对接当前若依格式接口：`GET /captchaImage`、`POST /login`、`GET /getInfo`、`POST /logout`。请求统一经过 `/api` 前缀，响应采用数值 `code` 和 `msg`，登录令牌从顶层 `token` 读取。
- 验证码按 `captchaEnabled` 开关显示；图片可点击刷新，加载失败可重试。每次登录失败后重新获取验证码，因为后端会消费验证码标识。
- 登录使用 Bearer JWT，令牌保存在 `sessionStorage`，密码和验证码不缓存。浏览器禁用存储时使用当前页面内存。旧接口格式的会话会自动清理，需要重新登录。
- `src/api/admin/auth.js` 定义接口，`src/utils/request.js` 注入 Authorization 并处理 HTTP 或业务响应中的 401。登录和验证码请求不附带旧令牌；403 只提示本次操作无权限。
- 后台展示服务端返回的账号、昵称、角色、邮箱、手机号、部门和最近登录时间。JWT 的到期时间仅用于展示凭证有效期；Redis 会话是否失效及续期由服务端判断，不根据客户端解码结果授予访问权限。
- 退出成功或登录失效时清除本机会话并返回登录页。从后台返回公开网站不会退出登录。临时网络或认证服务故障保留已有令牌，允许恢复后重新验证。
- 账号资料、头像和密码统一在“用户管理”中维护，已移除独立“账号信息”页面及相关入口。

本地联调：先启动 `personal-website-sys` 后端（默认 `8080`），再运行前端 `pnpm dev`，通过 `http://localhost:5173` 访问。Vite 将 `/api/*` 代理到 `http://127.0.0.1:8080/*` 并去掉 `/api` 前缀，以匹配后端根路径接口。前端固定使用 `5173` 端口。

生产部署使用 HTTPS，将同域名的 `/api/*` 反向代理到后端时同样去掉 `/api` 前缀；Vite 开发代理不会随静态构建部署。也可将 `VITE_API_BASE_URL` 配置为实际后端根地址。跨域部署时，后端 `AUTH_ALLOWED_ORIGINS` 应包含前端来源并允许 Authorization 请求头；前端不携带 Cookie 凭据。

最新生产构建、静态ZIP及部署代理规则见 [前端发布说明](release/README.md)。

## 用户管理台账

超级管理员和管理员登录后可在后台侧栏进入“用户管理”。台账显示账号、昵称、联系方式、角色、状态、创建时间和最近登录时间，支持搜索、角色与状态筛选、分页、新增用户、编辑账号、重置密码、启停账号和设置角色。

- 超级管理员（`admin`）：查看和管理全部用户，可为其他用户分配三种角色。
- 管理员（`manager`）：查看本人及普通用户，维护普通用户账号、密码和状态，新增账号只能选择普通用户。
- 普通用户（`common`）：不显示用户管理入口，账号资料、头像和密码由管理员维护。接口仍执行服务端权限限制。
- 内置超级管理员（用户 ID 为 1）不可停用或调整角色；所有用户都不能停用自己或调整自己的角色。角色设置为单选。
- 前端接口见 `src/api/admin/users.js`，对应后端 `/system/users`。数据库已执行后端 `sql/005_user_management_postgresql.sql`，初始化三种角色、操作权限及单角色约束；新环境也应执行该迁移。
- 密码至少8个字符、最多72个UTF-8字节，仅输入新密码，不展示或回填已有密码；账号修改后使用新账号登录，重置密码后旧会话需重新登录。

用户管理和头像功能已通过前端构建及头像组件测试，后端与MinIO的验证记录见后端用户管理文档。

### 用户头像

用户管理的新增、编辑弹窗支持上传、预览、更换和移除头像；列表与顶部账号栏同步显示，图片失效时回退为昵称首字。支持 JPG / PNG，最大2 MiB，保存后由后端居中裁为方形图片。

图片通过 `POST /files/avatars` 上传至后端，再保存返回的 `avatar` 相对路径。前端不保存 MinIO 密钥，也不直连9000或9001端口；图片通过同一 `VITE_API_BASE_URL`（默认 `/api`）访问。MinIO 的配置、部署注意事项和接口说明见后端 `docs/user-management.md` 的“头像上传与 MinIO”。

相关组件：`AvatarPicker.vue`、`UserAvatar.vue`；上传接口：`src/api/admin/files.js`。可运行 `npm run test:unit -- --run` 验证选择预览、格式/大小限制和默认头像回退。

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
