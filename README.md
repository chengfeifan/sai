# Couple Life Journal (Next.js + Supabase)

温暖、简洁、浪漫、私密的情侣生活记录网站。

## 新增体验
- 页面主题色可在设置页一键切换（Rose / Ocean / Forest / Violet）
- 页面语言支持中文 / English 切换
- 设置页提供「一键部署」按钮，直接跳转 Vercel 创建部署

## 技术栈
- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui 风格组件
- Supabase (Auth + Postgres + Storage)

## 快速开始
```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## 数据库初始化
1. 在 Supabase SQL Editor 运行 `sql/schema.sql`
2. 再运行 `sql/rls.sql`

## 登录与权限
- 登录页：`/login`（邮箱密码登录）
- 受保护页面：`/dashboard` `/timeline` `/albums` `/blog` `/anniversaries` `/settings`
- 中间件在 `middleware.ts` 中进行访问拦截

## 核心目录结构
```text
app/
  login/
  dashboard/
  timeline/
  albums/
  blog/
  anniversaries/
  settings/
components/
  ui/
  image-upload.tsx
  markdown-editor.tsx
lib/
  supabase.ts
sql/
  schema.sql
  rls.sql
middleware.ts
.env.local.example
```

## 部署（Vercel）
1. 推送代码到 GitHub。
2. 在 Vercel 导入项目。
3. 设置环境变量（`.env.local.example`）。
4. 部署后在 Supabase Auth 中配置站点 URL 与回调 URL。

## 说明
- 图片上传到 Supabase Storage `photos` bucket，数据库保存 URL 与元数据。
- 当前为基础模板，已包含各页面与关键组件骨架，可继续扩展真实 CRUD 与服务端 actions。
