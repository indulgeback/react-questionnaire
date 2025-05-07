# 🌟 小木问卷 (React Questionnaire)

<div align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/NestJS-10-E0234E?logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/NextJS-13-000000?logo=next.js&logoColor=white" alt="NextJS" />
  <img src="https://img.shields.io/badge/TypeScript-4-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
  <img src="https://img.shields.io/badge/LottieReact-2.4-00A3E0?logo=lottie&logoColor=white" alt="Lottie" />
  <img src="https://img.shields.io/badge/Ant%20Design-5.16-0170FE?logo=antdesign&logoColor=white" alt="Ant Design" />
  <img src="https://img.shields.io/badge/HeroUI-2.2-4F46E5?logo=heroicons&logoColor=white" alt="HeroUI" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/pnpm-10-F69220?logo=pnpm&logoColor=white" alt="pnpm" />
  <img src="https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
</div>

---

## 📝 介绍

小木问卷 - 基于 NestJS 的问卷生成系统

### 🛠️ 技术栈

- **前端(PC 端前台)** ：React18
- **前端(移动端前台)** ：NextJS
- **后端** ：NestJS
- **数据库** ：MySQL + MongoDB + Redis
- **AI 模型** ：DeepSeek Chat
- **动画库** ：GSAP + lottie web
- **UI 库** ：Ant Design + HeroUI + TailwindCSS
- **前端构建工具** ：Vite + SWC
- **包管理器** ：pnpm
- **版本管理** ：Lerna
- **代码规范** ：ESLint + Prettier
- **提交规范** ：Husky + Commitlint
- **单元测试** ：Jest
- **开源协议** ：MIT

---

## ✨ 功能特性

- 🎯 **问卷编辑器** ：拖拽式问卷设计器，支持组件拖拽、配置和预览
- 🤖 **智能推荐** ：基于DeepSeek Chat模型的智能问卷推荐
- 🧩 **组件配置** ：丰富的问卷组件配置选项，包括：
  - 📋 标题组件配置
  - 📄 段落组件配置
  - ✏️ 简答题组件配置
  - 🔘 单选题组件配置
  - ☑️ 多选题组件配置
  - 📊 NPS评分题组件配置
  - ⭐ 评分（星级）组件配置
  - 📅 日期选择组件配置
  - 📝 下拉选择组件配置
- 👁️ **实时预览** ：编辑过程中实时预览问卷效果
- 📱 **响应式设计** ：同时支持PC端和移动端
- 📈 **数据分析** ：问卷结果统计和可视化分析

---

## 🏗️ 软件架构

- 📂 目录树：查看 `/doc/structure-tree.txt`
- 📚 API 接口文档地址：查看 `/doc/apifox接口文档.txt`
- 🔍 架构图：查看 `/doc/小木问卷软件架构图.pdf`
- 💾 ER 图：查看 `/doc/ER.dio`

---

## 🚀 安装教程

```bash
# 在根目录使用 pnpm 安装依赖
pnpm i
```

---

## 📋 使用说明

> ⚠️ 注：mac 或 linux 用户使用 husky 脚本时，请赋予执行权限

```bash
# 为 .husky 文件夹下的所有脚本添加执行权限
chmod +x .husky/*
```

### 项目脚本

项目 node 脚本 `scripts` 如下：

```json
"scripts": {
    "dev:fe": "pnpm -F @questionnaire/fe dev",                // 前端服务开发模式
    "dev:client": "pnpm -F @questionnaire/client dev",        // 移动端前端服务开发模式
    "dev:be": "pnpm -F @questionnaire/be start:dev",          // 后端服务开发模式
    "generate-tree": "npx treer -e ./doc/structure-tree.txt -i \"/node_modules|.git|dist|.next|logs/\"",  // 生成目录树
    "prepare": "husky install",                               // 预装 husky
    "version": "npx lerna version --conventional-commits --no-git-tag-version --force-publish=*",  // 发布版本号
    "postversion": "node scripts/postVersion.js",             // 发布版本号后，自动打 tag
    "lint": "pnpm -F @questionnaire/fe lint && pnpm -F @questionnaire/be lint",  // eslint 校验
    "format": "pnpm -F @questionnaire/fe format && pnpm -F @questionnaire/be format",  // prettier 格式化代码
    "stat": "cloc --include-lang=JavaScript,TypeScript,SCSS,CSS,Markdown --exclude-dir='node_modules,dist,build,.next' .",  // 统计代码行数
    "build:docker-compose:dev": "docker-compose down && docker-compose up --build -d",  // 构建docker-compose
    "build:docker-images-and-push-to-registry": "node scripts/buildAndPushImageWithLernaVersion.js"  // 构建docker镜像并推送到镜像仓库
}
```

---

## 🐳 容器化部署

如需在本地或云服务器上部署，请复制根目录下 `/docker/docker-compose.yml` 配置文件到服务器，并修改相关配置（如 MySQL 密码等），然后执行 `docker-compose up -d`。未暴露的环境变量可在前后端项目的配置文件中自行修改，并将镜像推送到自己的仓库，记得修改相关的镜像配置。

---

## 🤝 参与贡献

- 本 gitee 仓库仅为 github 镜像仓库，暂不处理 issue 和 pr，如有需求，请在 github 提 issue 或 pr。
- 📦 **GitHub**: [https://github.com/indulgeback/react-questionnaire](https://github.com/indulgeback/react-questionnaire)
- 📦 **Gitee**: [https://gitee.com/IndulgeBack/react-questionnaire](https://gitee.com/IndulgeBack/react-questionnaire)
- 🏠 **个人主页**: [https://indulgeback.netlify.app/](https://indulgeback.netlify.app/) or [https://indulgeback.github.io/](https://indulgeback.github.io/)
- 📧 **邮箱**: liuwenyu1937@outlook.com
- 📝 **掘金**: [https://juejin.cn/user/1410020421418286](https://juejin.cn/user/1410020421418286)
