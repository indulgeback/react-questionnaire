# react-questionnaire

#### 介绍

react-小木问卷项目

#### 软件架构

软件架构说明

项目于 2024 年 9 月 24 日进行架构重构为 MonoRepo 架构，分包为 fe(前端) 和 mock(mock 服务)

#### 安装教程

```bash
# 安装依赖请在根目录使用 pnpm 安装
pnpm i
```

#### 使用说明

```json
    "scripts": {
        "dev:fe": "pnpm -F questionnaire-fe dev", // 前端服务开发模式
        "dev:mock": "pnpm -F questionnaire-mock dev", // mock 服务开发模式
        "prepare": "husky install"
    },
```

#### 参与贡献

请在 gitee 提 issue，或者 pr
