# 前端发布包

服务器自动部署沿用仓库根目录的 `dist/`，其中包含生产构建后的 `index.html`、`assets/` 等静态文件。将 `dist/` 内的内容部署到网站根目录即可，取包路径与此前远程仓库一致。

`release/personal-website-dist.zip` 是同一份 `dist/` 的辅助下载包，解压后直接得到 `index.html`、`assets/` 等文件；现有自动部署无需切换到此ZIP。

## 重新生成

```powershell
npm.cmd run test:unit -- --run
npm.cmd run build
Compress-Archive -Path dist/* -DestinationPath release/personal-website-dist.zip -Force
```

发布前核对 ZIP 的 SHA256，校验值位于 `personal-website-dist.zip.sha256`。解压时保留目录结构。

## 后端代理

默认后端根地址为同源 `/api`。Nginx 应去掉 `/api/` 前缀转发到后端，并允许头像及项目效果图上传：

```nginx
location /api/ {
    client_max_body_size 12m;
    proxy_pass http://127.0.0.1:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

静态服务器与后端不在同一台机器时，将代理地址替换为实际后端地址。需要不同的 API 域名时，在构建前配置 `VITE_API_BASE_URL` 并重新构建；前端不包含数据库、Redis、JWT 或 MinIO 密钥。

前端路由使用 Hash 模式，后台入口为 `/#/admin`。GitHub Pages 工作流会在 `main` 推送后自动构建并更新 `gh-pages` 分支；独立服务器可使用本 ZIP 部署。
