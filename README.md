# react-questionnaire

#### 介绍

小木问卷 - 基于 NestJS 的问卷生成系统

- 前端(PC端前台)：React18 + AntD
- 前端(移动端前台)：NextJS
- 后端：NestJS + MySQL + MongoDB
- Mock：mockjs

#### 软件架构

软件架构图

```js
react-questionnaire
├─README.md
├─package.json
├─pnpm-lock.yaml
├─pnpm-workspace.yaml
├─result.txt
├─packages
| ├─questionnaire-mock
| | ├─index.js
| | ├─package.json
| | ├─pnpm-lock.yaml
| | ├─mock
| | | ├─index.js
| | | ├─module
| | | | ├─question.js
| | | | └test.js
| | | ├─data
| | | | └getQuestionList.js
| ├─questionnaire-fe
| | ├─.babelrc
| | ├─.eslintrc.js
| | ├─.prettierrc.js
| | ├─README.md
| | ├─commitlint.config.js
| | ├─craco.config.js
| | ├─package-lock.json
| | ├─package.json
| | ├─pnpm-lock.yaml
| | ├─tsconfig.json
| | ├─src
| | | ├─App.css
| | | ├─App.tsx
| | | ├─index.css
| | | ├─index.tsx
| | | ├─logo.svg
| | | ├─react-app-env.d.ts
| | | ├─reportWebVitals.ts
| | | ├─setupTests.ts
| | | ├─utils
| | | | └request.ts
| | | ├─router
| | | | └index.tsx
| | | ├─pages
| | | | ├─Home.module.scss
| | | | ├─Home.tsx
| | | | ├─Login.module.scss
| | | | ├─Login.tsx
| | | | ├─NotFound.tsx
| | | | ├─Register.module.scss
| | | | ├─Register.tsx
| | | | ├─x6
| | | | | ├─index.module.scss
| | | | | └index.tsx
| | | | ├─question
| | | | | ├─Stat
| | | | | | └index.tsx
| | | | | ├─Edit
| | | | | | └index.tsx
| | | | ├─manage
| | | | | ├─Common.module.scss
| | | | | ├─List.tsx
| | | | | ├─Star.tsx
| | | | | └Trash.tsx
| | | ├─layouts
| | | | ├─MainLayout.module.scss
| | | | ├─MainLayout.tsx
| | | | ├─ManageLayout.module.scss
| | | | ├─ManageLayout.tsx
| | | | └QuestionLayout.tsx
| | | ├─hooks
| | | | ├─useLoadQuestionData.ts
| | | | └useRollEyeBalls.ts
| | | ├─constant
| | | | └index.ts
| | | ├─components
| | | | ├─Face
| | | | | ├─Face.module.scss
| | | | | └Face.tsx
| | | | ├─Common
| | | | | ├─Logo.module.scss
| | | | | ├─Logo.tsx
| | | | | ├─QuestionCard.module.scss
| | | | | ├─QuestionCard.tsx
| | | | | ├─UserInfo.tsx
| | | | | └listSearch.tsx
| | | ├─apis
| | | | ├─index.ts
| | | | ├─modules
| | | | | ├─question.ts
| | | | | ├─types
| | | | | | ├─common.d.ts
| | | | | | └question.d.ts
| | ├─public
| | | ├─favicon.ico
| | | ├─index.html
| | | ├─logo192.png
| | | ├─logo512.png
| | | ├─manifest.json
| | | └robots.txt
| ├─questionnaire-be
| | ├─.eslintrc.js
| | ├─.prettierrc
| | ├─README.md
| | ├─nest-cli.json
| | ├─package.json
| | ├─tsconfig.build.json
| | ├─tsconfig.json
| | ├─test
| | | ├─app.e2e-spec.ts
| | | └jest-e2e.json
| | ├─src
| | | ├─app.controller.spec.ts
| | | ├─app.controller.ts
| | | ├─app.module.ts
| | | ├─app.service.ts
| | | ├─main.ts
| | | ├─question
| | | | ├─question.controller.spec.ts
| | | | ├─question.controller.ts
| | | | ├─question.module.ts
| | | | ├─question.service.spec.ts
| | | | ├─question.service.ts
| | | | ├─entities
| | | | | └question.entity.ts
| | | | ├─dto
| | | | | ├─create-question.dto.ts
| | | | | └update-question.dto.ts
├─.husky
| ├─commit-msg
| ├─pre-commit
| ├─\*
| | └husky.sh
```

#### 安装教程

```bash
# 安装依赖请在根目录使用 pnpm 安装
pnpm i
```

#### 使用说明

```json
    "scripts": {
        "dev:fe": "pnpm -F @questionnaire/fe dev", // 前端服务开发模式
        "dev:be": "pnpm -F @questionnaire/be start:dev", // 后端服务开发模式
        "dev:mock": "pnpm -F @questionnaire/mock dev", // mock 服务开发模式
        "generate-tree": "npx treer -e ./structure-tree.txt -i \"/node_modules|.git|dist/\"", // 生成目录树
        "prepare": "husky install"
    },
```

#### 版本更新记录

- 0.0.2 项目于 2024 年 10 月 9 日新增 be(后端) 服务
- 0.0.1 项目于 2024 年 9 月 24 日进行架构重构为 MonoRepo 架构，分包为 fe(前端) 、mock(mock 服务)

#### 参与贡献

请在 gitee 提 issue，或者 pr
