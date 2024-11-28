# react-questionnaire

#### 介绍

小木问卷 - 基于 NestJS 的问卷生成系统

- 前端(PC 端前台)：React18 + AntD
- 前端(移动端前台)：NextJS
- 后端：NestJS + MySQL + MongoDB + Redis

#### 软件架构

- 目录树请查看 /doc/structure-tree.txt
- 架构图请查看 /doc/小木问卷软件架构图.pdf
- ER图请查看 /doc/ER.dio
- 数据流图请查看 /doc/DFD.dio

#### 安装教程

```bash
# 安装依赖请在根目录使用 pnpm 安装
pnpm i
```

#### 使用说明

注：mac或linux用户使用husky脚本时，请赋予执行权限

```bash
# 添加权限给.husky文件夹下的所有脚本
chmod +x .husky/*
```

项目 node 脚本 scripts 如下：

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
        "stat": "cloc --include-lang=JavaScript,TypeScript,SCSS --exclude-dir=node_modules,dist,build .", // 统计代码行数 自行安装 cloc npm全局包
        "build:docker-compose": "docker-compose down && docker-compose up -d" // 构建docker-compose
    },
```

#### 参与贡献

请在 gitee 提 issue，或者 pr
