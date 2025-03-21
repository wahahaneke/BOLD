# Toby Turtle Website Clone

这个项目是对 Toby Turtle 加密货币网站的克隆实现，使用现代前端技术构建。

## 技术栈

- Next.js 15
- Tailwind CSS
- TypeScript
- Bun（包管理器）

## 功能特点

- 响应式设计，适配所有设备屏幕尺寸
- 暗色主题
- 交互式图片轮播
- 加密货币项目信息展示
- 路线图和发展计划展示

## 项目结构

```
toby-turtle-clone/
├── public/             # 静态资源
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # 全局样式
│   │   ├── layout.tsx  # 布局组件
│   │   └── page.tsx    # 主页面
│   └── components/     # 可重用组件
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Journey.tsx
│       ├── Music.tsx
│       ├── HowToBuy.tsx
│       ├── Roadmap.tsx
│       └── Footer.tsx
```

## 本地开发

### 前提条件

- Node.js 18+ 或 Bun
- Git

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/toby-turtle-clone.git
cd toby-turtle-clone
```

2. 安装依赖
```bash
bun install
# 或者使用npm
# npm install
```

3. 启动开发服务器
```bash
bun run dev
# 或者使用npm
# npm run dev
```

4. 在浏览器中打开 http://localhost:3000 查看网站

## 部署

该项目已配置为可在 Vercel、Netlify 或其他支持 Next.js 的平台上部署。

## 许可证

MIT
