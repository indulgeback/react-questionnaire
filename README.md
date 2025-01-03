# react-questionnaire

#### 介绍

小木问卷 - 基于 NestJS 的问卷生成系统

- **前端(PC 端前台)**：React18
- **前端(移动端前台)**：NextJS
- **后端**：NestJS + MySQL + MongoDB + Redis
- **AI 模型**：DeepSeek Chat
- **动画库**：GSAP + lottie web
- **UI 库**：Ant Design + TailwindCSS
- **前端构建工具**：Vite + SWC
- **包管理器**：pnpm
- **版本管理**：Lerna
- **代码规范**：ESLint + Prettier
- **提交规范**：Husky + Commitlint
- **单元测试**：Jest
- **开源协议**：MIT

#### 软件架构

- 目录树：查看 `/doc/structure-tree.txt`
- 架构图：查看 `/doc/小木问卷软件架构图.pdf`
- ER 图：查看 `/doc/ER.dio`
- 数据流图：查看 `/doc/DFD.dio`

#### 安装教程

```bash
# 在根目录使用 pnpm 安装依赖
pnpm i
```

#### 使用说明

> 注：mac 或 linux 用户使用 husky 脚本时，请赋予执行权限

```bash
# 为 .husky 文件夹下的所有脚本添加执行权限
chmod +x .husky/*
```

项目 node 脚本 `scripts` 如下：

```json
"scripts": {
    "dev:fe": "pnpm -F @questionnaire/fe dev", // 前端服务开发模式
    "dev:be": "pnpm -F @questionnaire/be start:dev", // 后端服务开发模式
    "generate-tree": "npx treer -e ./doc/structure-tree.txt -i \"/node_modules|.git|dist/\"", // 生成目录树
    "prepare": "husky install", // 预装 husky
    "version": "npx lerna version --conventional-commits --no-git-tag-version --force-publish=*", // 发布版本号
    "postversion": "git add . && git commit -m 'chore: bump versions' && git tag v`node -p \"require('./lerna.json').version\"` && git push && git push origin --tags", // 发布版本号后，自动打 tag
    "lint": "pnpm -F @questionnaire/fe lint && pnpm -F @questionnaire/be lint", // eslint 校验
    "format": "pnpm -F @questionnaire/fe format && pnpm -F @questionnaire/be format", // prettier 格式化代码
    "stat": "cloc --include-lang=JavaScript,TypeScript,SCSS --exclude-dir=node_modules,dist,build .", // 统计代码行数
    "build:docker-compose:dev": "docker-compose down && docker-compose up --build -d", // 构建docker-compose
    "build:docker-images-and-push-to-registry": "node scripts/buildAndPushImageWithLernaVersion.js" // 构建docker镜像并推送到镜像仓库
}
```

#### 容器化部署

如需在本地或云服务器上部署，请复制根目录下 `/docker/docker-compose.yml` 配置文件到服务器，并修改相关配置（如 MySQL 密码等），然后执行 `docker-compose up -d`。未暴露的环境变量可在前后端项目的配置文件中自行修改，并将镜像推送到自己的仓库，记得修改相关的镜像配置。

#### 参与贡献

- 本 gitee 仓库仅为 github 镜像仓库，暂不处理 issue 和 pr，如有需求，请在 github 提 issue 或 pr。
- github 仓库地址：https://github.com/indulgeback/react-questionnaire
- gitee 仓库地址：https://gitee.com/IndulgeBack/react-questionnaire
- 个人主页：https://indulgeback.netlify.app/ or https://indulgeback.github.io/
- 邮箱：liuwenyu1937@outlook.com
- juejin：https://juejin.cn/user/1410020421418286
