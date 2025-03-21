# BOLD Turtle Website

这个项目是BOLD Turtle加密货币的官方网站，使用现代前端技术构建。

## 技术栈

- Next.js 15
- Tailwind CSS
- TypeScript
- React

## 功能特点

- 响应式设计，适配所有设备屏幕尺寸
- 交互式图片轮播
- 加密货币项目信息展示
- 路线图和发展计划展示
- GitHub Pages自动部署

## 项目结构

```
bold-turtle-website/
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
│       ├── HowToBuy.tsx
│       ├── Roadmap.tsx
│       └── Footer.tsx
```

## 本地开发

### 前提条件

- Node.js 18+
- Git

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/wahahaneke/BOLD.git
cd BOLD
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 在浏览器中打开 http://localhost:3000 查看网站

## 部署

该项目配置了GitHub Actions工作流，可自动部署到GitHub Pages：

1. 对main分支的任何推送都会触发部署
2. 构建结果会自动部署到gh-pages分支
3. 网站在 https://wahahaneke.github.io/BOLD/ 上可用

## 许可证

MIT
