# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.24.0](https://github.com/indulgeback/react-questionnaire/compare/v1.23.2...v1.24.0) (2025-05-19)


### Bug Fixes

* 移动端显示有问题 ([d1f96d0](https://github.com/indulgeback/react-questionnaire/commit/d1f96d0d6b30dc4a3c0cb6393f468375338fdcc3))





## [1.23.2](https://github.com/indulgeback/react-questionnaire/compare/v1.23.1...v1.23.2) (2025-05-18)


### Bug Fixes

* 修复密钥无法正常传入生产环境的问题 ([0fdf0b3](https://github.com/indulgeback/react-questionnaire/commit/0fdf0b3251a22e50bf81f07555872b6dd9e4b96c))





## [1.23.1](https://github.com/indulgeback/react-questionnaire/compare/v1.23.0...v1.23.1) (2025-05-17)

**Note:** Version bump only for package @questionnaire/client





# [1.23.0](https://github.com/indulgeback/react-questionnaire/compare/v1.22.0...v1.23.0) (2025-05-16)


### Bug Fixes

* 修复无法打包的问题 ([e98a403](https://github.com/indulgeback/react-questionnaire/commit/e98a403a2735d45766be8040576fc5cee1712ae8))


### Features

* 更新问卷进度组件，添加可折叠功能并调整样式，优化用户体验 ([aa51c68](https://github.com/indulgeback/react-questionnaire/commit/aa51c68ecd41ded27b259092228a69f0dc859e63))
* 添加内部API密钥支持，新增增量答卷数量接口，更新问卷客户端逻辑以调用该接口 ([b8e4a33](https://github.com/indulgeback/react-questionnaire/commit/b8e4a3318758d8205a61f88b66645f26d19adffb))
* 新增答案模块，整合问卷统计功能，优化问卷编辑和分析逻辑，更新相关数据传输对象和API接口 ([70c156d](https://github.com/indulgeback/react-questionnaire/commit/70c156d75a69b870dd0357818950f29899007229))
* 移除不再使用的问卷组件（文件上传、图片选择、排序），更新相关类型和默认属性，优化问卷编辑和统计功能 ([9c2d9ea](https://github.com/indulgeback/react-questionnaire/commit/9c2d9ea7add8c8eb5d7e65ee78572132d98e7717))





# [1.22.0](https://github.com/indulgeback/react-questionnaire/compare/v1.21.1...v1.22.0) (2025-05-15)


### Features

* 添加问卷创建者字段，更新相关数据传输对象，新增答案提交和获取接口，优化问卷组件回显逻辑 ([b2f0fa1](https://github.com/indulgeback/react-questionnaire/commit/b2f0fa121a756466a39a97792746685354e1b984))





## [1.21.1](https://github.com/indulgeback/react-questionnaire/compare/v1.21.0...v1.21.1) (2025-05-13)


### Bug Fixes

* 修复打包失败的问题 ([ad08d9a](https://github.com/indulgeback/react-questionnaire/commit/ad08d9a6af72a295c0e9d3bf7156c88bbfb9fdf2))
* 修复问题类型导致的打包失败的问题 ([8557eff](https://github.com/indulgeback/react-questionnaire/commit/8557eff50cbedc0a0fa9753b8e10e3536334a552))





# [1.21.0](https://github.com/indulgeback/react-questionnaire/compare/v1.20.1...v1.21.0) (2025-05-12)


### Features

* 更新问卷编辑功能，新增问卷创建和保存接口，优化组件拖拽功能，支持动态组件管理和状态更新 ([1d64578](https://github.com/indulgeback/react-questionnaire/commit/1d6457823c89f3f4814f959d0ab82f04ca1eff08))





## [1.20.1](https://github.com/indulgeback/react-questionnaire/compare/v1.20.0...v1.20.1) (2025-05-09)

**Note:** Version bump only for package @questionnaire/client





# [1.20.0](https://github.com/indulgeback/react-questionnaire/compare/v1.19.0...v1.20.0) (2025-05-09)


### Bug Fixes

* 修复客户端打包失败问题 ([625fe09](https://github.com/indulgeback/react-questionnaire/commit/625fe09bd167b9c8451b837e0c217b9788c49058))


### Features

* 更新问卷客户端，新增当前问卷ID管理功能，优化答案存储结构以支持按问卷ID组织答案，同时改进问卷标题和元信息的动态展示 ([b878492](https://github.com/indulgeback/react-questionnaire/commit/b878492c2482d0c49b9840f3b346dd8b9a85039e))
* 在问卷客户端中新增Skeleton组件以提升加载体验，更新相关组件以支持Skeleton展示，同时优化答案更新逻辑以包含题目类型 ([800640d](https://github.com/indulgeback/react-questionnaire/commit/800640dfc2dc614ab40c002206d8829ef0545a6e))





# [1.19.0](https://github.com/indulgeback/react-questionnaire/compare/v1.18.0...v1.19.0) (2025-05-08)


### Features

* 更新问卷编辑器，优化组件版本并新增问卷进度组件，改进题型组件的状态管理和样式 ([c68506a](https://github.com/indulgeback/react-questionnaire/commit/c68506a23ab4a281db92fab3e8a9b7d73fcb6efd))
* 更新问卷客户端配置，新增图片域名支持，优化Webpack配置以处理MongoDB相关模块，同时重构问卷页面组件以支持动态数据展示和初始化功能 ([46f9669](https://github.com/indulgeback/react-questionnaire/commit/46f9669239ad30a559b2b712005752b67ba9893f))
* 更新问卷数据生成API，替换图片选择题的占位符图片为真实图片，并删除无用的favicon文件 ([cc31ec9](https://github.com/indulgeback/react-questionnaire/commit/cc31ec9ebd115fc2c8e14c7313351b873bc5f3c2))
* 更新问卷组件样式，将段落和简答题型的输入框样式修改为“underlined”以提升用户体验 ([ebce96c](https://github.com/indulgeback/react-questionnaire/commit/ebce96ccc7984724b0502144d900ac68a8ea5d11))
* 完善问卷编辑器，新增多种题型组件（如日期选择、下拉选择、评分、NPS、矩阵单选、矩阵多选、排序、文件上传等），并优化数据加载和测试数据功能 ([73f4691](https://github.com/indulgeback/react-questionnaire/commit/73f4691fa9bf711eb64d26c1291a539ed924cdd3))
* 新增问卷数据生成API，优化问卷页面加载逻辑，更新问卷组件以支持动态数据展示，并添加加载和错误处理组件 ([b291a71](https://github.com/indulgeback/react-questionnaire/commit/b291a718b6004dc1068bb29a9bdb8cbcede33904))
* 新增MongoDB连接和问卷初始化功能，确保默认问卷数据存在，并优化问卷数据获取逻辑 ([4980579](https://github.com/indulgeback/react-questionnaire/commit/49805790ea670c911877ae2ed2b969f2dc176e54))





# [1.18.0](https://github.com/indulgeback/react-questionnaire/compare/v1.17.0...v1.18.0) (2025-05-07)

**Note:** Version bump only for package @questionnaire/client





# [1.17.0](https://github.com/indulgeback/react-questionnaire/compare/v1.16.1...v1.17.0) (2025-05-06)

**Note:** Version bump only for package @questionnaire/client






## [1.16.1](https://github.com/indulgeback/react-questionnaire/compare/v1.16.0...v1.16.1) (2025-03-12)

**Note:** Version bump only for package @questionnaire/client





# [1.16.0](https://github.com/indulgeback/react-questionnaire/compare/v1.15.0...v1.16.0) (2025-03-12)


### Features

* 答题端连接mongo ([4421a5d](https://github.com/indulgeback/react-questionnaire/commit/4421a5dbdd7572924a21aa39ff344cd3f61b6906))





# [1.15.0](https://github.com/indulgeback/react-questionnaire/compare/v1.14.5...v1.15.0) (2025-02-24)


### Features

* CLIENT - 客户端路径前缀，方便反向代理服务器做URL代理 ([36739ad](https://github.com/indulgeback/react-questionnaire/commit/36739adef50b69390739d30edc24ce846665f402))





## [1.14.5](https://github.com/indulgeback/react-questionnaire/compare/v1.14.4...v1.14.5) (2025-02-12)

**Note:** Version bump only for package @questionnaire/client





## [1.14.4](https://github.com/indulgeback/react-questionnaire/compare/v1.14.3...v1.14.4) (2025-02-12)

**Note:** Version bump only for package @questionnaire/client





## [1.14.3](https://github.com/indulgeback/react-questionnaire/compare/v1.14.2...v1.14.3) (2025-02-12)

**Note:** Version bump only for package @questionnaire/client





## [1.14.2](https://github.com/indulgeback/react-questionnaire/compare/v1.14.1...v1.14.2) (2025-02-12)

**Note:** Version bump only for package @questionnaire/client





## [1.14.1](https://github.com/indulgeback/react-questionnaire/compare/v1.14.0...v1.14.1) (2025-02-12)

**Note:** Version bump only for package @questionnaire/client





# [1.14.0](https://github.com/indulgeback/react-questionnaire/compare/v1.13.7...v1.14.0) (2025-02-10)


### Features

* CLIENT - 新增简答题 ([53366af](https://github.com/indulgeback/react-questionnaire/commit/53366af9c594f32d61fe5a3da3ae60aca07c854b))


### Performance Improvements

* CLIENT - 答题列表的交互优化 ([dbd918a](https://github.com/indulgeback/react-questionnaire/commit/dbd918aa1d8d9712c3361278d17448a51ed12757))





## [1.13.7](https://github.com/indulgeback/react-questionnaire/compare/v1.13.6...v1.13.7) (2025-02-08)

**Note:** Version bump only for package @questionnaire/client





## [1.13.6](https://github.com/indulgeback/react-questionnaire/compare/v1.13.5...v1.13.6) (2025-02-07)


### Bug Fixes

* 尝试不使用国内npm镜像，观察是否可以提高构建速度 ([0328444](https://github.com/indulgeback/react-questionnaire/commit/03284442c7decbd0e9874c850ead26186610bb1b))





## [1.13.5](https://github.com/indulgeback/react-questionnaire/compare/v1.13.4...v1.13.5) (2025-02-07)

**Note:** Version bump only for package @questionnaire/client





## [1.13.4](https://github.com/indulgeback/react-questionnaire/compare/v1.13.3...v1.13.4) (2025-02-07)


### Bug Fixes

* CLIENT - 修复客户端答题页面传参BUG ([5c1e7df](https://github.com/indulgeback/react-questionnaire/commit/5c1e7dff39738bda777200f316cb4580b787434a))





## [1.13.3](https://github.com/indulgeback/react-questionnaire/compare/v1.13.2...v1.13.3) (2025-02-06)

**Note:** Version bump only for package @questionnaire/client





## [1.13.2](https://github.com/indulgeback/react-questionnaire/compare/v1.13.1...v1.13.2) (2025-02-06)

**Note:** Version bump only for package @questionnaire/client





## [1.13.1](https://github.com/indulgeback/react-questionnaire/compare/v1.13.0...v1.13.1) (2025-02-06)

**Note:** Version bump only for package @questionnaire/client





# [1.13.0](https://github.com/indulgeback/react-questionnaire/compare/v1.12.0...v1.13.0) (2025-02-06)


### Bug Fixes

* CLIENT - 修复客户端tooltip依赖缺失问题 ([2f100e3](https://github.com/indulgeback/react-questionnaire/commit/2f100e32d2f0c2131ea46db42caffa7e62192335))





# [1.12.0](https://github.com/indulgeback/react-questionnaire/compare/v1.11.0...v1.12.0) (2025-01-31)

**Note:** Version bump only for package @questionnaire/client





# [1.11.0](https://github.com/indulgeback/react-questionnaire/compare/v1.10.0...v1.11.0) (2025-01-23)


### Bug Fixes

* CLINET - 修复问卷填写状态弹框跳转路径BUG ([0fd601f](https://github.com/indulgeback/react-questionnaire/commit/0fd601f03b131839c63a07cf5afff688637a3d47))


### Features

* CLIENT - 客户端组件库迁移；渲染器设计与基础实现； ([ae54331](https://github.com/indulgeback/react-questionnaire/commit/ae543316c0d4615eae021dff8997ee59fe76fffe))
* CLIENT - 问卷答案收集的store ([3a25c07](https://github.com/indulgeback/react-questionnaire/commit/3a25c07ce15f126548e6fdc971de22ad95be6cfd))


### Performance Improvements

* CLIENT - 顶栏图标提示优化 ([a699823](https://github.com/indulgeback/react-questionnaire/commit/a699823f4431b4cda3ba05e638a4779e152b3e03))
* CLIENT - 问题类型UI显示优化 ([4d2a420](https://github.com/indulgeback/react-questionnaire/commit/4d2a42005519830d19a7722040da5ae1688d298c))
* CLINET - 基础信息框样式优化 ([86c6f3c](https://github.com/indulgeback/react-questionnaire/commit/86c6f3c01dcfdb63ce207c3599e46f26d9c13891))
* CLINET - 客户端渲染逻辑优化；引入mongodb库； ([260e7fd](https://github.com/indulgeback/react-questionnaire/commit/260e7fdc235f007041d2bab33190b536bb6b6e48))





# [1.10.0](https://github.com/indulgeback/react-questionnaire/compare/v1.9.4...v1.10.0) (2025-01-13)


### Bug Fixes

* CLIENT - 修复消息提示组件在初始化较早导致无法获取window的问题； ([9707eeb](https://github.com/indulgeback/react-questionnaire/commit/9707eebf2d780238a27fe2292e590b207edcee87))


### Features

* CLIENT - 答题页面与答题控制组件部分更新；引入消息提示库； ([2618aa9](https://github.com/indulgeback/react-questionnaire/commit/2618aa980bd8f13ee3c6d7c9be95e46047a87cda))
* CLIENT - 客户端首页改造完成 ([c312145](https://github.com/indulgeback/react-questionnaire/commit/c312145bdc58de32182721f0485b5ea7c00cc32b))
* CLIENT - 小木问卷新增客户端 ([2244f2c](https://github.com/indulgeback/react-questionnaire/commit/2244f2c225ac1021a219152f72ea842f90b7e898))
* CLIENT - 移除无用组件；样式基础优化； ([c371dc2](https://github.com/indulgeback/react-questionnaire/commit/c371dc25da87c0604f9c82ce3f34b3c196d69dc5))
* CLIENT - 增加icon依赖库 ([f165649](https://github.com/indulgeback/react-questionnaire/commit/f16564942b76d3499a7fd2aa8a2d3cb3e987b826))


### Performance Improvements

* CLIENT - 样式优化；功能组件名调整； ([bdd8a11](https://github.com/indulgeback/react-questionnaire/commit/bdd8a11549df5dd4fcadf0841b84b725a08e1cff))
