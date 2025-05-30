# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.24.0](https://github.com/indulgeback/react-questionnaire/compare/v1.23.2...v1.24.0) (2025-05-19)


### Bug Fixes

* 移动端显示有问题 ([d1f96d0](https://github.com/indulgeback/react-questionnaire/commit/d1f96d0d6b30dc4a3c0cb6393f468375338fdcc3))


### Features

* 添加撤销和前进功能，更新组件状态管理，移除复制功能 ([6757103](https://github.com/indulgeback/react-questionnaire/commit/67571035d3afa05b6d32d823dce537547fd1bc92))
* 增加问卷复制功能，支持从原问卷获取详细信息并保存新问卷，更新相关API参数 ([7946b3d](https://github.com/indulgeback/react-questionnaire/commit/7946b3d58672e2a83ee1d3400f40e81af4a5123c))





## [1.23.2](https://github.com/indulgeback/react-questionnaire/compare/v1.23.1...v1.23.2) (2025-05-18)


### Bug Fixes

* 修复密钥无法正常传入生产环境的问题 ([0fdf0b3](https://github.com/indulgeback/react-questionnaire/commit/0fdf0b3251a22e50bf81f07555872b6dd9e4b96c))





## [1.23.1](https://github.com/indulgeback/react-questionnaire/compare/v1.23.0...v1.23.1) (2025-05-17)


### Bug Fixes

* 修复构建机没有由于python环境导致后端包构建失败的原因 ([a644307](https://github.com/indulgeback/react-questionnaire/commit/a6443075eea341cafc0f2ee13e02e991380b4873))





# [1.23.0](https://github.com/indulgeback/react-questionnaire/compare/v1.22.0...v1.23.0) (2025-05-16)


### Bug Fixes

* 修复无法打包的问题 ([e98a403](https://github.com/indulgeback/react-questionnaire/commit/e98a403a2735d45766be8040576fc5cee1712ae8))


### Features

* 更新问卷进度组件，添加可折叠功能并调整样式，优化用户体验 ([aa51c68](https://github.com/indulgeback/react-questionnaire/commit/aa51c68ecd41ded27b259092228a69f0dc859e63))
* 更新用户资料页面，修改问卷列表展示为星标问卷，优化加载状态和空状态卡片，提升用户体验 ([b348bd9](https://github.com/indulgeback/react-questionnaire/commit/b348bd9e7ea2f3576fcefb9acc56a7d30095cbef))
* 更新用户资料页面，整合用户信息获取逻辑，优化密码修改和账号注销功能，增强用户体验 ([d4e05dd](https://github.com/indulgeback/react-questionnaire/commit/d4e05ddd70f7e44081214a6c4e062cf56bbf8573))
* 更新docker-compose配置，将NODE_ENV环境变量修改为production，并添加NEXT_PUBLIC_INTERNAL_API_SECRET环境变量 ([572bd7e](https://github.com/indulgeback/react-questionnaire/commit/572bd7eb0d92b40070cc11e1fcc64e18d54a8ecb))
* 添加内部API密钥支持，新增增量答卷数量接口，更新问卷客户端逻辑以调用该接口 ([b8e4a33](https://github.com/indulgeback/react-questionnaire/commit/b8e4a3318758d8205a61f88b66645f26d19adffb))
* 新增答案模块，整合问卷统计功能，优化问卷编辑和分析逻辑，更新相关数据传输对象和API接口 ([70c156d](https://github.com/indulgeback/react-questionnaire/commit/70c156d75a69b870dd0357818950f29899007229))
* 移除不再使用的问卷组件（文件上传、图片选择、排序），更新相关类型和默认属性，优化问卷编辑和统计功能 ([9c2d9ea](https://github.com/indulgeback/react-questionnaire/commit/9c2d9ea7add8c8eb5d7e65ee78572132d98e7717))
* 增强AI服务功能，支持模型选择和获取可用模型列表，更新问卷生成和分析接口 ([b713e91](https://github.com/indulgeback/react-questionnaire/commit/b713e91d2889b326bbf5f358942a025e9ea177cf))





# [1.22.0](https://github.com/indulgeback/react-questionnaire/compare/v1.21.1...v1.22.0) (2025-05-15)


### Bug Fixes

* 添加请求成功检查 ([19df971](https://github.com/indulgeback/react-questionnaire/commit/19df9718d93435139b391064380011833165a57d))


### Features

* 添加问卷创建者字段，更新相关数据传输对象，新增答案提交和获取接口，优化问卷组件回显逻辑 ([b2f0fa1](https://github.com/indulgeback/react-questionnaire/commit/b2f0fa121a756466a39a97792746685354e1b984))
* 新增问卷底部文本字段，更新相关数据传输对象和页面配置，优化问卷编辑功能 ([c091e1f](https://github.com/indulgeback/react-questionnaire/commit/c091e1f1801627f50cd4108bafaf2ea5cf4b7c8b))
* 增强问卷功能，支持问卷发布与取消发布，更新问卷时返回更详细的响应信息，新增二维码分享功能 ([1f1b1d2](https://github.com/indulgeback/react-questionnaire/commit/1f1b1d2d72fb06b3766a5e8a822e722e26f11c07))





## [1.21.1](https://github.com/indulgeback/react-questionnaire/compare/v1.21.0...v1.21.1) (2025-05-13)


### Bug Fixes

* 修复打包失败的问题 ([ad08d9a](https://github.com/indulgeback/react-questionnaire/commit/ad08d9a6af72a295c0e9d3bf7156c88bbfb9fdf2))
* 修复问题类型导致的打包失败的问题 ([8557eff](https://github.com/indulgeback/react-questionnaire/commit/8557eff50cbedc0a0fa9753b8e10e3536334a552))





# [1.21.0](https://github.com/indulgeback/react-questionnaire/compare/v1.20.1...v1.21.0) (2025-05-12)


### Features

* 更新问卷编辑功能，新增问卷创建和保存接口，优化组件拖拽功能，支持动态组件管理和状态更新 ([1d64578](https://github.com/indulgeback/react-questionnaire/commit/1d6457823c89f3f4814f959d0ab82f04ca1eff08))
* 更新问卷生成逻辑，支持自定义问题数量和详细格式，优化问卷组件管理，增强用户体验 ([b7795eb](https://github.com/indulgeback/react-questionnaire/commit/b7795eb5090943728f6b703ff14f2c6ef022e555))





## [1.20.1](https://github.com/indulgeback/react-questionnaire/compare/v1.20.0...v1.20.1) (2025-05-09)

**Note:** Version bump only for package root





# [1.20.0](https://github.com/indulgeback/react-questionnaire/compare/v1.19.0...v1.20.0) (2025-05-09)


### Bug Fixes

* 修复客户端打包失败问题 ([625fe09](https://github.com/indulgeback/react-questionnaire/commit/625fe09bd167b9c8451b837e0c217b9788c49058))


### Features

* 更新问卷客户端，新增当前问卷ID管理功能，优化答案存储结构以支持按问卷ID组织答案，同时改进问卷标题和元信息的动态展示 ([b878492](https://github.com/indulgeback/react-questionnaire/commit/b878492c2482d0c49b9840f3b346dd8b9a85039e))
* 在问卷客户端中新增Skeleton组件以提升加载体验，更新相关组件以支持Skeleton展示，同时优化答案更新逻辑以包含题目类型 ([800640d](https://github.com/indulgeback/react-questionnaire/commit/800640dfc2dc614ab40c002206d8829ef0545a6e))





# [1.19.0](https://github.com/indulgeback/react-questionnaire/compare/v1.18.0...v1.19.0) (2025-05-08)


### Bug Fixes

* FE - 优化编辑器按钮组件的禁用状态和鼠标悬停效果，调整Tooltip的结构 ([c82c7f2](https://github.com/indulgeback/react-questionnaire/commit/c82c7f24a7c92e9733937f7051bb43bea265467c))


### Features

* 更新问卷编辑器，优化组件版本并新增问卷进度组件，改进题型组件的状态管理和样式 ([c68506a](https://github.com/indulgeback/react-questionnaire/commit/c68506a23ab4a281db92fab3e8a9b7d73fcb6efd))
* 更新问卷客户端配置，新增图片域名支持，优化Webpack配置以处理MongoDB相关模块，同时重构问卷页面组件以支持动态数据展示和初始化功能 ([46f9669](https://github.com/indulgeback/react-questionnaire/commit/46f9669239ad30a559b2b712005752b67ba9893f))
* 更新问卷数据生成API，替换图片选择题的占位符图片为真实图片，并删除无用的favicon文件 ([cc31ec9](https://github.com/indulgeback/react-questionnaire/commit/cc31ec9ebd115fc2c8e14c7313351b873bc5f3c2))
* 更新问卷组件样式，将段落和简答题型的输入框样式修改为“underlined”以提升用户体验 ([ebce96c](https://github.com/indulgeback/react-questionnaire/commit/ebce96ccc7984724b0502144d900ac68a8ea5d11))
* 完善问卷编辑器，新增多种题型组件（如日期选择、下拉选择、评分、NPS、矩阵单选、矩阵多选、排序、文件上传等），并优化数据加载和测试数据功能 ([73f4691](https://github.com/indulgeback/react-questionnaire/commit/73f4691fa9bf711eb64d26c1291a539ed924cdd3))
* 完善问卷编辑器，新增滑块、图片选择、矩阵单选、矩阵多选、排序和文件上传组件及其配置功能，并优化页面配置功能 ([df1b871](https://github.com/indulgeback/react-questionnaire/commit/df1b871bd510cd45afd01fcbd6c770013a0e6585))
* 新增问卷数据生成API，优化问卷页面加载逻辑，更新问卷组件以支持动态数据展示，并添加加载和错误处理组件 ([b291a71](https://github.com/indulgeback/react-questionnaire/commit/b291a718b6004dc1068bb29a9bdb8cbcede33904))
* 新增MongoDB连接和问卷初始化功能，确保默认问卷数据存在，并优化问卷数据获取逻辑 ([4980579](https://github.com/indulgeback/react-questionnaire/commit/49805790ea670c911877ae2ed2b969f2dc176e54))





# [1.18.0](https://github.com/indulgeback/react-questionnaire/compare/v1.17.0...v1.18.0) (2025-05-07)


### Features

* 完善问卷编辑器，新增多种题型组件及其默认属性 ([fe14020](https://github.com/indulgeback/react-questionnaire/commit/fe140206a195a1a55da5684fc3424718fcbfef72))
* 完善问卷编辑器，新增日期选择、下拉选择、评分和NPS题型组件及其配置功能 ([9e3e65a](https://github.com/indulgeback/react-questionnaire/commit/9e3e65aba1e9d8c4eea787ff531b0e0762ef3592))
* 新增编辑器按钮组件，优化问卷编辑器的组件配置功能 ([97b89aa](https://github.com/indulgeback/react-questionnaire/commit/97b89aa74ab8fe94d0d43aa892b06db0dda6e560))
* 优化问卷编辑器，调整面板布局并更新保存按钮文本为“应用” ([e59dd0a](https://github.com/indulgeback/react-questionnaire/commit/e59dd0a69f158347f0cb171c4298d17bb05df051))





# [1.17.0](https://github.com/indulgeback/react-questionnaire/compare/v1.16.1...v1.17.0) (2025-05-06)


### Features

* 新增数据分析 ([53e1aa6](https://github.com/indulgeback/react-questionnaire/commit/53e1aa660c8601532dce69a4f475abcbc3f6e599))
* BE - 新增获取问卷详情接口 ([d0aca95](https://github.com/indulgeback/react-questionnaire/commit/d0aca95cb47473869a410b0cd338d178c3a4a175))
* FE - 完善问卷编辑器，新增左右面板组件及其内容 ([284bdcc](https://github.com/indulgeback/react-questionnaire/commit/284bdcc71f36ddd5a98735a120c0515e4b0da36a))
* FE - 问卷编辑器开发 ([a675f2b](https://github.com/indulgeback/react-questionnaire/commit/a675f2b47531f815f1fd2722bb0898901dde692b))
* FE - 问卷编辑器开发-渲染器实现 ([2897d77](https://github.com/indulgeback/react-questionnaire/commit/2897d77baa8d1d16ff448a864026df42eca6974b))






## [1.16.1](https://github.com/indulgeback/react-questionnaire/compare/v1.16.0...v1.16.1) (2025-03-12)

**Note:** Version bump only for package root





# [1.16.0](https://github.com/indulgeback/react-questionnaire/compare/v1.15.0...v1.16.0) (2025-03-12)


### Features

* 答题端连接mongo ([4421a5d](https://github.com/indulgeback/react-questionnaire/commit/4421a5dbdd7572924a21aa39ff344cd3f61b6906))
* 更新SQL文件 ([9329104](https://github.com/indulgeback/react-questionnaire/commit/93291041e604b2a3c4bef9e26c4e32b8a3b25235))
* BE - 保存问卷数据接口 ([cf919e6](https://github.com/indulgeback/react-questionnaire/commit/cf919e6f3e75c5f748b75cdd19c20be4fa2d57a6))
* BE - 新增问卷数据mock接口 ([00b3cb0](https://github.com/indulgeback/react-questionnaire/commit/00b3cb00d9b413c5f802a4139eadbcbff93fcb12))





# [1.15.0](https://github.com/indulgeback/react-questionnaire/compare/v1.14.5...v1.15.0) (2025-02-24)


### Bug Fixes

* FE - 修复问卷编辑器响应式失效的问题 ([2bfad02](https://github.com/indulgeback/react-questionnaire/commit/2bfad0271190aa70e946366fbc70592067aeba7b))


### Features

* CLIENT - 客户端路径前缀，方便反向代理服务器做URL代理 ([36739ad](https://github.com/indulgeback/react-questionnaire/commit/36739adef50b69390739d30edc24ce846665f402))
* FE - 前端增加问卷画布与部分问卷题型组件 ([dc764f2](https://github.com/indulgeback/react-questionnaire/commit/dc764f2fad50b5efef17d1b3fd1ff70035bb767a))
* SQL文件更新 ([3b9f5c5](https://github.com/indulgeback/react-questionnaire/commit/3b9f5c5ccaef378f86da60c1056d4e36b1c38603))





## [1.14.5](https://github.com/indulgeback/react-questionnaire/compare/v1.14.4...v1.14.5) (2025-02-12)


### Bug Fixes

* 修复mongo在服务器ip不正确导致的后端程序没有启动的问题 ([7497107](https://github.com/indulgeback/react-questionnaire/commit/7497107da8ae8ae38acd306e084d3e8777114cf3))
* Enable MongoDB authentication and privileged mode in docker-compose ([772a8f2](https://github.com/indulgeback/react-questionnaire/commit/772a8f2079b3abca79d2a4e2c697104fe5ac14b5))
* FE - 修复登录时闭包造成的提示用户昵称未及时更新的问题 ([a2601b4](https://github.com/indulgeback/react-questionnaire/commit/a2601b43c88dd1c222c959be302efde130d81803))





## [1.14.4](https://github.com/indulgeback/react-questionnaire/compare/v1.14.3...v1.14.4) (2025-02-12)


### Bug Fixes

* Simplify GitHub Actions workflow by consolidating build and push jobs ([d7d2499](https://github.com/indulgeback/react-questionnaire/commit/d7d2499be19894546e7333481d78d2dceac3ccfb))





## [1.14.3](https://github.com/indulgeback/react-questionnaire/compare/v1.14.2...v1.14.3) (2025-02-12)

**Note:** Version bump only for package root





## [1.14.2](https://github.com/indulgeback/react-questionnaire/compare/v1.14.1...v1.14.2) (2025-02-12)

**Note:** Version bump only for package root





## [1.14.1](https://github.com/indulgeback/react-questionnaire/compare/v1.14.0...v1.14.1) (2025-02-12)


### Bug Fixes

* 修复docker容器配置未同步导致的服务器端连接不到mongo ([81fe648](https://github.com/indulgeback/react-questionnaire/commit/81fe6487f9312f0a8e179e3d31fc664ca0ecfef7))





# [1.14.0](https://github.com/indulgeback/react-questionnaire/compare/v1.13.7...v1.14.0) (2025-02-10)


### Bug Fixes

* BE - 修复后端自动化测试在不传环境变量的情况下引发的bug ([96dfd73](https://github.com/indulgeback/react-questionnaire/commit/96dfd73223cc553e6be3083618dbf2cdc3222f63))
* BE - mongodb连接问题修复；FE - 修复节流导致的问卷引擎渲染问题 ([47af8ac](https://github.com/indulgeback/react-questionnaire/commit/47af8ac1149f7e35dab5c95472337927f70ce718))


### Features

* BE - 创建问卷接口完成 ([7e2bce3](https://github.com/indulgeback/react-questionnaire/commit/7e2bce3e6d92e7e44f6cb8b84db71ec12e82ebe6))
* BE - 后端接入mongodb ([87154e4](https://github.com/indulgeback/react-questionnaire/commit/87154e46a75a024eb6dba49e058ec3e5727f6371))
* BE - 问卷详情表结构设计 ([058b341](https://github.com/indulgeback/react-questionnaire/commit/058b341fde54b6a4051cd8c45e685101cf60b6ec))
* CLIENT - 新增简答题 ([53366af](https://github.com/indulgeback/react-questionnaire/commit/53366af9c594f32d61fe5a3da3ae60aca07c854b))


### Performance Improvements

* CLIENT - 答题列表的交互优化 ([dbd918a](https://github.com/indulgeback/react-questionnaire/commit/dbd918aa1d8d9712c3361278d17448a51ed12757))





## [1.13.7](https://github.com/indulgeback/react-questionnaire/compare/v1.13.6...v1.13.7) (2025-02-08)


### Bug Fixes

* FE - 修复问题匹配正则存在的已知问题；BE - 添加更多模型选项； ([99fbda5](https://github.com/indulgeback/react-questionnaire/commit/99fbda5df5e33d34ce6708204220ceb4ef84d41a))





## [1.13.6](https://github.com/indulgeback/react-questionnaire/compare/v1.13.5...v1.13.6) (2025-02-07)


### Bug Fixes

* 尝试不使用国内npm镜像，观察是否可以提高构建速度 ([0328444](https://github.com/indulgeback/react-questionnaire/commit/03284442c7decbd0e9874c850ead26186610bb1b))





## [1.13.5](https://github.com/indulgeback/react-questionnaire/compare/v1.13.4...v1.13.5) (2025-02-07)


### Bug Fixes

* 修复github actions 环境变量与密钥格式问题 ([497da3c](https://github.com/indulgeback/react-questionnaire/commit/497da3ce389728ae770e1736260b13f3a3802fd4))





## [1.13.4](https://github.com/indulgeback/react-questionnaire/compare/v1.13.3...v1.13.4) (2025-02-07)


### Bug Fixes

* CLIENT - 修复客户端答题页面传参BUG ([5c1e7df](https://github.com/indulgeback/react-questionnaire/commit/5c1e7dff39738bda777200f316cb4580b787434a))





## [1.13.3](https://github.com/indulgeback/react-questionnaire/compare/v1.13.2...v1.13.3) (2025-02-06)

**Note:** Version bump only for package root





## [1.13.2](https://github.com/indulgeback/react-questionnaire/compare/v1.13.1...v1.13.2) (2025-02-06)

**Note:** Version bump only for package root





## [1.13.1](https://github.com/indulgeback/react-questionnaire/compare/v1.13.0...v1.13.1) (2025-02-06)

**Note:** Version bump only for package root





# [1.13.0](https://github.com/indulgeback/react-questionnaire/compare/v1.12.0...v1.13.0) (2025-02-06)


### Bug Fixes

* CLIENT - 修复客户端tooltip依赖缺失问题 ([2f100e3](https://github.com/indulgeback/react-questionnaire/commit/2f100e32d2f0c2131ea46db42caffa7e62192335))
* FE - 修复问卷列表类型格式问题 ([f43e66b](https://github.com/indulgeback/react-questionnaire/commit/f43e66b215af184fa1a7284978244ec3a41e7241))


### Features

* BE - 修改密码与注销账户接口 ([2f7fb05](https://github.com/indulgeback/react-questionnaire/commit/2f7fb05eb4c6540b40a4a798469f6813b2a9db3d))
* FE - 前端个人信息页静态搭建完成 ([ab0d08f](https://github.com/indulgeback/react-questionnaire/commit/ab0d08f554e2ae185f03190e8b6273859dd4fa89))





# [1.12.0](https://github.com/indulgeback/react-questionnaire/compare/v1.11.0...v1.12.0) (2025-01-31)


### Bug Fixes

* FE - 修复生成问卷弹框样式及逻辑问题 ([60ce299](https://github.com/indulgeback/react-questionnaire/commit/60ce299765154ead185618df1476a06f85175025))


### Features

* 修改服务器端docker-compose ([dfda319](https://github.com/indulgeback/react-questionnaire/commit/dfda319181399503bb4c950621b3964984db457d))
* 移除ai体验接口 ([541a632](https://github.com/indulgeback/react-questionnaire/commit/541a632269c2831737da43785443b4265ddfd5a8))
* FE - 新增问卷编辑器组件，标题 ([0323f59](https://github.com/indulgeback/react-questionnaire/commit/0323f59178297e93dbe6081a78009442d8c11aac))





# [1.11.0](https://github.com/indulgeback/react-questionnaire/compare/v1.10.0...v1.11.0) (2025-01-23)


### Bug Fixes

* CLINET - 修复问卷填写状态弹框跳转路径BUG ([0fd601f](https://github.com/indulgeback/react-questionnaire/commit/0fd601f03b131839c63a07cf5afff688637a3d47))


### Features

* CLIENT - 客户端组件库迁移；渲染器设计与基础实现； ([ae54331](https://github.com/indulgeback/react-questionnaire/commit/ae543316c0d4615eae021dff8997ee59fe76fffe))
* CLIENT - 问卷答案收集的store ([3a25c07](https://github.com/indulgeback/react-questionnaire/commit/3a25c07ce15f126548e6fdc971de22ad95be6cfd))
* FE - 问卷编辑器布局初始化 ([199f6fd](https://github.com/indulgeback/react-questionnaire/commit/199f6fd37bf0bf776248f5d922b018f829cc668d))
* FE - 问卷编辑器布局初始化；添加编辑器按钮通用组件； ([b22bb9c](https://github.com/indulgeback/react-questionnaire/commit/b22bb9c83bb001f5dc0a9ba0142b0b506079913c))
* FE - 问卷编辑器集成ai弹框能力；样式修复； ([80441d0](https://github.com/indulgeback/react-questionnaire/commit/80441d0ac7d4d9da8d5326db0ccc00ff81ff5cef))


### Performance Improvements

* CLIENT - 顶栏图标提示优化 ([a699823](https://github.com/indulgeback/react-questionnaire/commit/a699823f4431b4cda3ba05e638a4779e152b3e03))
* CLIENT - 问题类型UI显示优化 ([4d2a420](https://github.com/indulgeback/react-questionnaire/commit/4d2a42005519830d19a7722040da5ae1688d298c))
* CLINET - 基础信息框样式优化 ([86c6f3c](https://github.com/indulgeback/react-questionnaire/commit/86c6f3c01dcfdb63ce207c3599e46f26d9c13891))
* CLINET - 客户端渲染逻辑优化；引入mongodb库； ([260e7fd](https://github.com/indulgeback/react-questionnaire/commit/260e7fdc235f007041d2bab33190b536bb6b6e48))
* FE - 样式优化与文案修复 ([9e197c5](https://github.com/indulgeback/react-questionnaire/commit/9e197c5215a4ec4de758ef252b36e9bbea913901))





# [1.10.0](https://github.com/indulgeback/react-questionnaire/compare/v1.9.4...v1.10.0) (2025-01-13)


### Bug Fixes

* CLIENT - 修复消息提示组件在初始化较早导致无法获取window的问题； ([9707eeb](https://github.com/indulgeback/react-questionnaire/commit/9707eebf2d780238a27fe2292e590b207edcee87))


### Features

* CLIENT - 答题页面与答题控制组件部分更新；引入消息提示库； ([2618aa9](https://github.com/indulgeback/react-questionnaire/commit/2618aa980bd8f13ee3c6d7c9be95e46047a87cda))
* CLIENT - 客户端首页改造完成 ([c312145](https://github.com/indulgeback/react-questionnaire/commit/c312145bdc58de32182721f0485b5ea7c00cc32b))
* CLIENT - 小木问卷新增客户端 ([2244f2c](https://github.com/indulgeback/react-questionnaire/commit/2244f2c225ac1021a219152f72ea842f90b7e898))
* CLIENT - 移除无用组件；样式基础优化； ([c371dc2](https://github.com/indulgeback/react-questionnaire/commit/c371dc25da87c0604f9c82ce3f34b3c196d69dc5))
* CLIENT - 增加icon依赖库 ([f165649](https://github.com/indulgeback/react-questionnaire/commit/f16564942b76d3499a7fd2aa8a2d3cb3e987b826))
* FE - 新增问卷详情组件，与路由搭建 ([9066b55](https://github.com/indulgeback/react-questionnaire/commit/9066b5505bcab3f1d190cb8a503d8131121dd6ba))


### Performance Improvements

* 大模型API类型枚举，切换模型为QwenMax ([1ad63c9](https://github.com/indulgeback/react-questionnaire/commit/1ad63c972f533d644e85c6e2c69578a8c2f1034f))
* 修改项目md ([f8c7470](https://github.com/indulgeback/react-questionnaire/commit/f8c74701484dcd39226b0277c9f1de9c8a821581))
* CLIENT - 样式优化；功能组件名调整； ([bdd8a11](https://github.com/indulgeback/react-questionnaire/commit/bdd8a11549df5dd4fcadf0841b84b725a08e1cff))
* FE - 优化前端接口TS标注 ([e9ad88f](https://github.com/indulgeback/react-questionnaire/commit/e9ad88fceedbab0736fba42009720bbe4cd5a90a))





## [1.9.4](https://github.com/indulgeback/react-questionnaire/compare/v1.9.3...v1.9.4) (2025-01-03)

**Note:** Version bump only for package root





## [1.9.3](https://github.com/indulgeback/react-questionnaire/compare/v1.9.2...v1.9.3) (2025-01-03)


### Performance Improvements

* FE - 为viteconfig添加注释 ([3d00847](https://github.com/indulgeback/react-questionnaire/commit/3d008476c6fa9f36b3f0fcbce7c34b81ac5c749f))
* FE - 优化登录逻辑与全局错误提示 ([86c0706](https://github.com/indulgeback/react-questionnaire/commit/86c07064b63572614b5198adc2b002e84587df46))





## [1.9.2](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.9.1...v1.9.2) (2024-12-27)


### Bug Fixes

* FE - 修复登录等页面背景尺寸错乱的问题 ([fa6df32](https://gitee.com/IndulgeBack/react-questionnaire/commits/fa6df323d2ecd7afdb7ceb181b0d8763197ae10c))


### Performance Improvements

* FE - 优化首页动效；完成生成问卷的问题提取； ([c7da0ce](https://gitee.com/IndulgeBack/react-questionnaire/commits/c7da0ceb289b66604b3787dbe22a8e209c28857a))





## [1.9.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.9.0...v1.9.1) (2024-12-26)

**Note:** Version bump only for package root





# [1.9.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.6...v1.9.0) (2024-12-26)


### Bug Fixes

* 更新docker环境下ai配置 ([a99bae5](https://gitee.com/IndulgeBack/react-questionnaire/commits/a99bae5946a20ae29a8fb7e5555e5be132a0b3b4))


### Features

* 收藏问卷功能前后端联调 ([507e961](https://gitee.com/IndulgeBack/react-questionnaire/commits/507e961b5278a49813351f0c8e488c63d0056923))
* BE - 更新question表结构；完善问卷删除接口; ([8b62b1c](https://gitee.com/IndulgeBack/react-questionnaire/commits/8b62b1c2a53da37b8783b66d3ab18899ed093036))
* FE - 前端新增问卷市场；问卷渲染和收藏前端逻辑重构； ([b2f2d7a](https://gitee.com/IndulgeBack/react-questionnaire/commits/b2f2d7a71974119e484b70bcdf5bc42167218cc4))
* FE - 删除功能前后端联调 ([a9451af](https://gitee.com/IndulgeBack/react-questionnaire/commits/a9451af32392bf0bbd12a7f632d011d565060fde))
* FE - 问卷卡片显示状态根据列表类型变化 ([6105a9f](https://gitee.com/IndulgeBack/react-questionnaire/commits/6105a9f3afffdd103100af2e33f501d65b166f00))
* FE - 星标问卷静态搭建 ([d6aad83](https://gitee.com/IndulgeBack/react-questionnaire/commits/d6aad83a61df1cffebee3ac5b6d06a7898b54dbc))


### Performance Improvements

* FE - 优化底栏及滚动条样式 ([66aed9e](https://gitee.com/IndulgeBack/react-questionnaire/commits/66aed9e09445026fde093e88307a8c03a20b2211))





## [1.8.6](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.5...v1.8.6) (2024-12-19)

**Note:** Version bump only for package root





## [1.8.5](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.3...v1.8.5) (2024-12-19)


### Performance Improvements

* FE - 底栏样式优化 ([9bc4e38](https://gitee.com/IndulgeBack/react-questionnaire/commits/9bc4e385e56297c8330aa5a64b28e394eca388e1))
* FE - 移除造成较大性能影响的加载效果 ([aab63da](https://gitee.com/IndulgeBack/react-questionnaire/commits/aab63daaa1c503e3a5df3e1bd9f14940e7073d40))
* FE - 移除backdrop-filter，减少性能消耗 ([35aa9f2](https://gitee.com/IndulgeBack/react-questionnaire/commits/35aa9f23828da659daf1cdec931e7454876097f1))
* FE - 优化问卷列表页UI ([d8e2c03](https://gitee.com/IndulgeBack/react-questionnaire/commits/d8e2c03e10e8042d06a9791e6acf58e85122a2c5))
* FE - 优化项目图片为webp ([07c5615](https://gitee.com/IndulgeBack/react-questionnaire/commits/07c5615232770ebedce0c6d9d20b164bc905ec12))





## [1.8.4](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.3...v1.8.4) (2024-12-19)


### Performance Improvements

* 优化项目图片为webp ([bb19dc2](https://gitee.com/IndulgeBack/react-questionnaire/commits/bb19dc2d12791520cf06544090988f1a071456a5))
* FE - 底栏样式优化 ([9bc4e38](https://gitee.com/IndulgeBack/react-questionnaire/commits/9bc4e385e56297c8330aa5a64b28e394eca388e1))
* FE - 移除造成较大性能影响的加载效果 ([f853cd3](https://gitee.com/IndulgeBack/react-questionnaire/commits/f853cd35d348f9914ec2530cb041f4881bdc2dbf))





## [1.8.3](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.2...v1.8.3) (2024-12-18)

**Note:** Version bump only for package root





## [1.8.2](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.1...v1.8.2) (2024-12-18)


### Bug Fixes

* FE - 修复问卷列表页面的显示BUG ([01faf84](https://gitee.com/IndulgeBack/react-questionnaire/commits/01faf848d4aa8a504af2d1f4861b08901c66ab25))





## [1.8.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.8.0...v1.8.1) (2024-12-18)


### Performance Improvements

* 主页添加简介部分 ([6b27fb6](https://gitee.com/IndulgeBack/react-questionnaire/commits/6b27fb6f0d3857a39fac7bbcdb58aafd287e2335))
* FE - 主页Hero与FeatureUI优化 ([c30c11d](https://gitee.com/IndulgeBack/react-questionnaire/commits/c30c11d2e0b766c01943dc7fb57687c6616db18e))





# [1.8.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.7.1...v1.8.0) (2024-12-17)


### Features

* FE - 添加顶栏icon ([03eefbf](https://gitee.com/IndulgeBack/react-questionnaire/commits/03eefbf0c02960e485467e3d819106b9630db9df))
* FE - 问卷生成取消生成功能 ([689ad5e](https://gitee.com/IndulgeBack/react-questionnaire/commits/689ad5efcf2d49ea724910c44efeb476afbdf922))


### Performance Improvements

* BE - 优化日志，在进行ai流式传输时，不打印日志 ([9890e9a](https://gitee.com/IndulgeBack/react-questionnaire/commits/9890e9aa807166da8b45ae43bd9369ca6aad1db3))





## [1.7.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.7.0...v1.7.1) (2024-12-17)


### Bug Fixes

* FE - 修复组件挂起引发的加载错误426BUG ([e0e1d4d](https://gitee.com/IndulgeBack/react-questionnaire/commits/e0e1d4d8dc79075cd338b7df78ba156a89408968))





# [1.7.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.6.1...v1.7.0) (2024-12-16)


### Bug Fixes

* BE - 更新docker环境配置以使用容器传递的环境变量 ([b7b3fd8](https://gitee.com/IndulgeBack/react-questionnaire/commits/b7b3fd809248f7563822cc4fee5957c2e4217ec6))


### Features

* BE - 删除问卷前先删除该问卷有关的收藏记录；删除问卷流程添加事务； ([245829e](https://gitee.com/IndulgeBack/react-questionnaire/commits/245829e17bc60c859500623c8dff55dcce28cf7e))
* FE - 添加AI生成问卷Demo入口 ([54257f5](https://gitee.com/IndulgeBack/react-questionnaire/commits/54257f5ed4b1e1482c6dac36c3da2f5655137298))
* FE - 新增问卷JSON数据生成体验Demo ([b1d550b](https://gitee.com/IndulgeBack/react-questionnaire/commits/b1d550b529c4523708da8fde55229613a601367f))





## [1.6.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.6.0...v1.6.1) (2024-12-13)


### Bug Fixes

* BE - 修复docker环境下openai配置 ([4817720](https://gitee.com/IndulgeBack/react-questionnaire/commits/481772003de052d3dc91083f44f4fefa449905b6))


### Performance Improvements

* FE - 实现路由的懒加载并增强 Vite 配置以实现手动分包 ([0a20ded](https://gitee.com/IndulgeBack/react-questionnaire/commits/0a20ded8af3b3eb7a13dcfeaca93958ca0d9c502))





# [1.6.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.5.3...v1.6.0) (2024-12-13)


### Bug Fixes

* 修复自动化构建脚本输出的异步问题 ([b3d5482](https://gitee.com/IndulgeBack/react-questionnaire/commits/b3d5482bb3eb5491ebda44d9aee57458d771584a))
* 优化自动化构建脚本 ([e24f1b1](https://gitee.com/IndulgeBack/react-questionnaire/commits/e24f1b1a2b1638745fe4b4ed094962d46be03a68))
* BE - 修复服务端日志的保存问题 ([f3ef7c5](https://gitee.com/IndulgeBack/react-questionnaire/commits/f3ef7c5ad1c09456ffb7332e942ca80d7123cafa))
* BE - 修复问卷生成服务以动态使用主题内容 ([ae2ccda](https://gitee.com/IndulgeBack/react-questionnaire/commits/ae2ccda1a84c1d2f4935cabe303d62bd5262e1dd))


### Features

* 自动化docker构建脚本添加figlet实现ASCII艺术 ([4aaa1f7](https://gitee.com/IndulgeBack/react-questionnaire/commits/4aaa1f79382d40fbae4414c008272a4d29f84aba))
* BE - 更新AI服务以支持流式问卷生成，添加OpenAI API配置 ([dee3879](https://gitee.com/IndulgeBack/react-questionnaire/commits/dee38794dcefcbc2bb67226b6af63ca444d2b6ac))
* BE - 添加AI控制器和服务的单元测试，更新生成方法以接受字符串主题 ([c3f7098](https://gitee.com/IndulgeBack/react-questionnaire/commits/c3f709837b19003bbf3e1f26139f7c0e111bb75e))
* BE - 添加AI模块及问卷生成服务 ([6f0b5c3](https://gitee.com/IndulgeBack/react-questionnaire/commits/6f0b5c350a1f83b8f7f5826eaa870ce5b946cb16))
* BE - 添加AuthController和AuthService的单元测试，涵盖用户注册、登录及信息获取功能 ([26d0409](https://gitee.com/IndulgeBack/react-questionnaire/commits/26d0409c35142f67a88b53c9626b897af84ebbbe))
* BE - 添加FileController的单元测试，涵盖文件上传和下载功能，包括错误处理 ([c0862ee](https://gitee.com/IndulgeBack/react-questionnaire/commits/c0862ee7cb50063f5a982171221e2c39a2dbf619))
* BE - 添加MailController和MailService的单元测试，涵盖邮箱验证和验证码验证功能；更新AI服务测试以生成预期结果 ([871f056](https://gitee.com/IndulgeBack/react-questionnaire/commits/871f056f04f52dacaa9f1ab4de952f5c00cca3c1))
* FE - 修改页脚添加网站备案信息区域 ([27a7fe2](https://gitee.com/IndulgeBack/react-questionnaire/commits/27a7fe26719a5d08d07a531b38a151ac9712612e))
* FE - 页脚添加软件版本号 ([55e2afa](https://gitee.com/IndulgeBack/react-questionnaire/commits/55e2afa64b315da74e816549c439f85aa5d789a1))
* FE - 在用户登录后没有头像时，使用默认头像，持久化到redux ([ad176c1](https://gitee.com/IndulgeBack/react-questionnaire/commits/ad176c15ac9a784475600cb82211e8b169a8cf13))





## [1.5.3](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.5.2...v1.5.3) (2024-12-05)


### Bug Fixes

* 修复服务器文件模块返回链接错误的问题 ([b226626](https://gitee.com/IndulgeBack/react-questionnaire/commits/b226626beb27a7107716666266cfd3d824ec7b58))
* 优化自动化构建脚本 ([a309183](https://gitee.com/IndulgeBack/react-questionnaire/commits/a3091836f2a296b8f1bc82ad055b8b6e84524b54))
* BE - 文件服务增加错误捕获 ([afbcd14](https://gitee.com/IndulgeBack/react-questionnaire/commits/afbcd1454d47d399a69bfb49ab81d56f82ce39db))
* FE - 解决前端路由匹配错误的bug ([67a6a5b](https://gitee.com/IndulgeBack/react-questionnaire/commits/67a6a5b8cfde30bf0ca6e3713d18fe29fbdc8eca))
* FE - 修复登录与注册密码表单校验前后端不一致的问题 ([a8a070d](https://gitee.com/IndulgeBack/react-questionnaire/commits/a8a070d41d98fc086be2b4973259f1563cae68dc))





## [1.5.2](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.5.1...v1.5.2) (2024-11-28)

**Note:** Version bump only for package root





## [1.5.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.5.0...v1.5.1) (2024-11-26)


### Bug Fixes

* BE - 修复默认返回状态码组件将所有状态码都重置为200 ([9e048b0](https://gitee.com/IndulgeBack/react-questionnaire/commits/9e048b0d3542c36ccaa635c599f924fed7b4f7be))
* BE - 修复全局环境变量问题，引入cross-env传递全局环境变量 ([1cf0bba](https://gitee.com/IndulgeBack/react-questionnaire/commits/1cf0bba4cf96ff0866be13a7b87c5a9a0e9e42b4))


### Performance Improvements

* BE - 静态文件服务器优化，写入配置进配置文件，上传文件接口返回静态服务器访问url ([30fbebb](https://gitee.com/IndulgeBack/react-questionnaire/commits/30fbebb398782b822796d61bbcbed92bcffb2172))





# [1.5.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.4.0...v1.5.0) (2024-11-26)


### Bug Fixes

* 修复列表空状态样式 ([88f88ee](https://gitee.com/IndulgeBack/react-questionnaire/commits/88f88eeb666ea322ff14f691f48914b4c26e7970))
* BE - 登录接口返回的部分用户信息添加avatar字段 ([d5980d7](https://gitee.com/IndulgeBack/react-questionnaire/commits/d5980d7a82220e1ea03743147a79aa27197a8fe7))
* BE - 修复问卷市场列表接口 ([470da27](https://gitee.com/IndulgeBack/react-questionnaire/commits/470da27f6e0d77cff3029d40c79767c9221a7f30))


### Features

* 新增用户收藏表，调整项目结构 ([f599c99](https://gitee.com/IndulgeBack/react-questionnaire/commits/f599c99b37c7e072cb8eb1d902619bece533fa18))
* BE - 问卷列表返回值添加is_favorated字段，用来判断该问卷当前用户是否收藏 ([a2eb342](https://gitee.com/IndulgeBack/react-questionnaire/commits/a2eb342ebc1e8de82bf9d0f30778f9f58a4ee193))
* BE - 问卷列表支持查询用户收藏的问卷 ([df4afec](https://gitee.com/IndulgeBack/react-questionnaire/commits/df4afec906494d5c04c933d527624fe15a27efbf))
* BE - 新增查询用户详情接口 ([e3fc241](https://gitee.com/IndulgeBack/react-questionnaire/commits/e3fc2415c704808f3593719e03b9057a24384579))
* BE - 新增取消收藏问卷接口 ([3c81824](https://gitee.com/IndulgeBack/react-questionnaire/commits/3c81824a926b7f853122383683c6e52706185ffa))
* BE - 新增用户收藏问卷接口 ([4768d40](https://gitee.com/IndulgeBack/react-questionnaire/commits/4768d407ab757912a28081073ca07b65045b3b67))
* BE - 用户信息接口 ([ef2ba65](https://gitee.com/IndulgeBack/react-questionnaire/commits/ef2ba65aa7235557a389a7697fea1959103c46e6))
* FE - 封装问卷收藏相关接口 ([7978a50](https://gitee.com/IndulgeBack/react-questionnaire/commits/7978a504709d24f2694a91151cfb366785cd40d0))
* FE - 用户信息持久化存储与默认头像设置 ([e9b07ea](https://gitee.com/IndulgeBack/react-questionnaire/commits/e9b07ea3db899c4118206d6b746d804fc94e9a7a))


### Performance Improvements

* BE - 后端项目优化：配置全局错误处理器于默认响应状态码 ([cfc646f](https://gitee.com/IndulgeBack/react-questionnaire/commits/cfc646f4b08db9d4c81366d7e15eacf035361b45))





# [1.4.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.3.0...v1.4.0) (2024-11-20)


### Features

* BE - 单个问卷移除与彻底删除功能 ([67073ea](https://gitee.com/IndulgeBack/react-questionnaire/commits/67073ea144c0d8086c5bba8d2bf5e0c7cf74b80c))
* BE - 问卷列表接口支持星标与回收站查询 ([bc0f62a](https://gitee.com/IndulgeBack/react-questionnaire/commits/bc0f62a224196d3a6dfb4b5f87a423f4cb358634))


### Performance Improvements

* BE - 文件上传接口封装文件上传通用拦截器优化 ([7c71563](https://gitee.com/IndulgeBack/react-questionnaire/commits/7c7156384f07bdd1965ee9bbbcb3f457b89db599))
* BE - 优化邮件验证码发送体验 ([2330d5a](https://gitee.com/IndulgeBack/react-questionnaire/commits/2330d5a94d53b247f4914ffaec70030963eda40f))
* FE - 前端邮件验证码增加重发倒计时 ([f257c27](https://gitee.com/IndulgeBack/react-questionnaire/commits/f257c2787beac1e2223e79763ba2bdae661273be))





# [1.3.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.2.0...v1.3.0) (2024-11-18)


### Bug Fixes

* FE - 修复鉴权失败没有修改登录状态的BUG ([c189fc8](https://gitee.com/IndulgeBack/react-questionnaire/commits/c189fc82d65243f90d7936255e513a12605662bd))


### Features

* BE - 更新问卷表结构 ([bb89b38](https://gitee.com/IndulgeBack/react-questionnaire/commits/bb89b3845af227b86b8d25bb6636bcee945ec146))
* BE - 静态资源服务 ([e664b57](https://gitee.com/IndulgeBack/react-questionnaire/commits/e664b57c80cada78051e5c529b3ebfc15f6476c4))
* BE - 文件上传下载功能 ([6512da1](https://gitee.com/IndulgeBack/react-questionnaire/commits/6512da196ba7e61f578f41f6ec095fa441b829f3))
* BE - 问卷列表支持模糊搜索 ([490b278](https://gitee.com/IndulgeBack/react-questionnaire/commits/490b278586d373a06d435c9381141a2f88332771))
* FE - 登录状态持久化 ([7b85f28](https://gitee.com/IndulgeBack/react-questionnaire/commits/7b85f2897ba731484f40608af3c7ad8a2aacad99))
* FE - 前端集成lottie动画 ([85e689a](https://gitee.com/IndulgeBack/react-questionnaire/commits/85e689afbe82bd4f97fa21f0bf88f5e3abbe0913))
* FE - 问卷列表支持模糊搜索 ([d950b82](https://gitee.com/IndulgeBack/react-questionnaire/commits/d950b824dd7d3e5a8f286ed8e9372b865e9535fd))
* FE - 修复问卷列表搜索BUG ([3f2efb7](https://gitee.com/IndulgeBack/react-questionnaire/commits/3f2efb731811184fa4eb639d2f6f344a17840612))
* FE - 用户详情静态搭建 ([bb1b893](https://gitee.com/IndulgeBack/react-questionnaire/commits/bb1b8933c84ead11bfbcaf5a1c529a212b4f52b5))
* FE - UI主题更新 - 绿松石 ([7240cba](https://gitee.com/IndulgeBack/react-questionnaire/commits/7240cba2f99cd5e5be68eed3d3299376d7464c5b))





# [1.2.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.1.0...v1.2.0) (2024-11-08)


### Features

* 登录Token持久化，请求携带token ([ee3ecaa](https://gitee.com/IndulgeBack/react-questionnaire/commits/ee3ecaa6fb9ed6343e535f8e0d8f8c35009edcbb))
* BE - 集成 JWT 校验 ([48ffe5f](https://gitee.com/IndulgeBack/react-questionnaire/commits/48ffe5fcd36fce13124e197ccdf7007ef19f1515))
* BE - 集成 JWT 校验 ([94190ee](https://gitee.com/IndulgeBack/react-questionnaire/commits/94190ee7ecaf153d06952b967d3567064031363a))
* BE - 集成 JWT 校验 ([ef88847](https://gitee.com/IndulgeBack/react-questionnaire/commits/ef8884766ab9734a83445a6d0797fbcfd714ebfa))
* FE - 封装SvgIcon组件 ([5602d0d](https://gitee.com/IndulgeBack/react-questionnaire/commits/5602d0d8b6469862752c946272c5a83569e3e581))
* FE - 鉴权页面添加背景图与缓入动画 ([d911d7f](https://gitee.com/IndulgeBack/react-questionnaire/commits/d911d7f990e6bb222c21edba09d11a3e7a9c907d))
* FE - 接口鉴权失败返回重新登录，前置路由记忆功能，提示 ([51cc51b](https://gitee.com/IndulgeBack/react-questionnaire/commits/51cc51b863887f57da97c598552ca321b6422439))





# [1.1.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.0.1...v1.1.0) (2024-11-01)


### Features

* 邮箱添加后端校验 ([bc453d0](https://gitee.com/IndulgeBack/react-questionnaire/commits/bc453d034824e3954105003a42f66cdd7f6324b9))
* BE - 更新拦截器配置 ([60deab6](https://gitee.com/IndulgeBack/react-questionnaire/commits/60deab6f87e7c7d0063f90ebeb6bc155d07adae4))
* BE - 更新验证码邮件为html格式 ([f71c339](https://gitee.com/IndulgeBack/react-questionnaire/commits/f71c339d422b493f2a55561ed9b776567e8447a2))
* BE - 集成mysql日志 ([ddc093a](https://gitee.com/IndulgeBack/react-questionnaire/commits/ddc093a4145bcd0e5ce505269b57c858646865b6))
* BE - 实现定时任务功能模块 ([20a1b5c](https://gitee.com/IndulgeBack/react-questionnaire/commits/20a1b5cd2af1728e59b1a927d4c7fb4ae3f2d8c6))
* BE - 系统身份认证转为邮箱认证 ([a38c058](https://gitee.com/IndulgeBack/react-questionnaire/commits/a38c058d6543dcd3c3a3a7b280dbbc5d1985b69f))
* FE - 抽离复杂动画的sass实现 ([6196ebe](https://gitee.com/IndulgeBack/react-questionnaire/commits/6196ebeb2daecb7279f84e5831c99186dd6f14c3))
* FE - 登陆注册页面布局调整 ([5b904b4](https://gitee.com/IndulgeBack/react-questionnaire/commits/5b904b4484bc25c0df822ce56e5ddbfde701f785))
* FE - 登陆注册页面UI更新 ([ec924e3](https://gitee.com/IndulgeBack/react-questionnaire/commits/ec924e35e5f0c4483ad45df7fa74b308c4c38f09))
* FE - 封装 useRequestSuccessChecker hook 解决消息通知问题 ([3198462](https://gitee.com/IndulgeBack/react-questionnaire/commits/31984624e8e2c8af3562b318b311568d10d36e6a))
* FE - 集成MUI与tailwindcss ([fb53c7d](https://gitee.com/IndulgeBack/react-questionnaire/commits/fb53c7df3d8958e4fef4a6af2e0719f66c2c46df))
* FE - 前端验证码校验 ([3c2eb0f](https://gitee.com/IndulgeBack/react-questionnaire/commits/3c2eb0fe1e7e4c9ba542a34cf02969d1ea1a15bf))
* FE - 全屏加载封装 ([55d757b](https://gitee.com/IndulgeBack/react-questionnaire/commits/55d757b431d7013e0a82127a4ff40814010d8236))
* FE - 图标替换 ([197db45](https://gitee.com/IndulgeBack/react-questionnaire/commits/197db45d93d3211f00a587b38086856cbf7e42ac))
* FE - 问卷列表页面更新 ([aa276f0](https://gitee.com/IndulgeBack/react-questionnaire/commits/aa276f0cbd02f707f24a4242e98ae814935ed812))
* FE - 问卷列表页面使用全局loading ([138ca1c](https://gitee.com/IndulgeBack/react-questionnaire/commits/138ca1c76fb1f0487ab7f0d98dd58390dc3ea67d))
* FE - 修改组件库为AntD ([8caf5fc](https://gitee.com/IndulgeBack/react-questionnaire/commits/8caf5fc7be5b9ac5d63cfb7a2043c082396384b7))
* FE - 验证码发送体验优化 ([518a1ed](https://gitee.com/IndulgeBack/react-questionnaire/commits/518a1ed9986dceaddf9318ddca4981b62054b7cc))
* FE - 邮件验证成功注册功能 ([8706c5c](https://gitee.com/IndulgeBack/react-questionnaire/commits/8706c5c77ecc27e17966b105b2336885d0428a5e))
* FE - 注册验证邮箱功能 ([3aeeb9b](https://gitee.com/IndulgeBack/react-questionnaire/commits/3aeeb9b6021b2af19313a3a6ff4fc9986a8282c7))
* FE - SvgIcon通用组件封装 ([11e0312](https://gitee.com/IndulgeBack/react-questionnaire/commits/11e0312b82e5e8b7cf6396c896b1c8f0d703887e))





## [1.0.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v0.2.1...v1.0.1) (2024-10-28)


### Bug Fixes

* BE - 修复 windows 无法正确安装 bcrypt 的问题 ([3bde0ea](https://gitee.com/IndulgeBack/react-questionnaire/commits/3bde0ea056ab3d6dd905d4c149a832ee886ff46b))


### Features

* 登录接口前后端联调; BE - 数据库密码加密; FE - 前端配置统一的接口返回类型校验 ([03640fe](https://gitee.com/IndulgeBack/react-questionnaire/commits/03640fe0dbcb914f31efddd3a7964ac05ca4de89))
* 集成log4js，实现请求响应的日志拦截器中间件 ([99bb86a](https://gitee.com/IndulgeBack/react-questionnaire/commits/99bb86a4a332f8c0c250269d7d3659e23cbc72b6))
* 上拉加载分页列表功能 ([569056f](https://gitee.com/IndulgeBack/react-questionnaire/commits/569056ff6e0310ad62976e405554862d73dd6ef6))
* 注册接口前后端联调 ([e5dfd70](https://gitee.com/IndulgeBack/react-questionnaire/commits/e5dfd70e7869103b4a643632e9516538aac51d01))
* BE - 获取问卷列表功能 ([05d3d6d](https://gitee.com/IndulgeBack/react-questionnaire/commits/05d3d6dd0e013651a897d7d44eee41f78f3b970e))
* BE - 集成第三方邮件实现验证码服务 ([8301a5e](https://gitee.com/IndulgeBack/react-questionnaire/commits/8301a5e27ddfbea68f8f5d26f3a400127b694ca3))
* BE - 上传数据库sql ([e7cc865](https://gitee.com/IndulgeBack/react-questionnaire/commits/e7cc86573b5e481a70c293fec86c8b15f7ff5ea0))
* BE - 自动获取不同环境下的配置文件 ([2004b6f](https://gitee.com/IndulgeBack/react-questionnaire/commits/2004b6f31077903720a77c87c4ffcc4a911a886c))
* FE - 调整前端首页样式与布局 ([2e0849d](https://gitee.com/IndulgeBack/react-questionnaire/commits/2e0849dd335f61ad9c240256b4501803302e542b))
* FE - 调整问卷列表前端样式 ([efc7d17](https://gitee.com/IndulgeBack/react-questionnaire/commits/efc7d172465c7aa4d282ed7a7b9c4d7a63cf5be3))
* FE - antd@5 message静态方法不可用解决方案适配 ([6c707b0](https://gitee.com/IndulgeBack/react-questionnaire/commits/6c707b00fbad57ff5dea824d94f8381430bf7557))
* FE - messageApi - 未完成 ([0d94a2a](https://gitee.com/IndulgeBack/react-questionnaire/commits/0d94a2ad7bdce63affbf4855efa4c100540fe469))





## [0.2.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v0.2.0...v0.2.1) (2024-10-10)

**Note:** Version bump only for package root





# 0.2.0 (2024-10-10)


### Features

* 表单校验完成，配置后端mock服务 ([812e89a](https://gitee.com/IndulgeBack/react-questionnaire/commits/812e89a63daa042625680ae75dfe1d070f2c8c00))
* 创建问卷跳转功能 ([96a315c](https://gitee.com/IndulgeBack/react-questionnaire/commits/96a315c0bf618fb66d268d7bd971889f11c54d09))
* 登录--静态搭建完成 ([a3cea37](https://gitee.com/IndulgeBack/react-questionnaire/commits/a3cea372fba38c042942d6a4d13b45654d25a374))
* 后端初始化构建 ([24a38f6](https://gitee.com/IndulgeBack/react-questionnaire/commits/24a38f6db9b8831e3fffc3ece1d4fe8f3098475e))
* 回收站多选、恢复、删除交互 ([c1c9492](https://gitee.com/IndulgeBack/react-questionnaire/commits/c1c9492864cef9ee83eba491bf952c4c6cf6bb1d))
* 获取问卷列表功能 ([c16f388](https://gitee.com/IndulgeBack/react-questionnaire/commits/c16f38811b8ac16ac6c001f7db6a0f30395ec72b))
* 获取问卷列表接口mock ([d886c0f](https://gitee.com/IndulgeBack/react-questionnaire/commits/d886c0f02425430935a46826f469f50aba7f87e0))
* 加载问卷数据的hook ([d260d30](https://gitee.com/IndulgeBack/react-questionnaire/commits/d260d301afff3b81fa7895c7b2d6a637d8825032))
* 列表管理页静态搭建完成 ([ae299b1](https://gitee.com/IndulgeBack/react-questionnaire/commits/ae299b174ed439efc59183b392899bb1dcce81f5))
* 使用useRequest重构请求逻辑 ([f8f0a80](https://gitee.com/IndulgeBack/react-questionnaire/commits/f8f0a8049d5b20c82d168e716ab23f374a68235b))
* 首页 404 搭建完成 ([82e23c9](https://gitee.com/IndulgeBack/react-questionnaire/commits/82e23c9150753883dac6765e3284e9e0bede46e1))
* 首页进行动画调整 ([d523784](https://gitee.com/IndulgeBack/react-questionnaire/commits/d523784ebce66bdef51622fedbd0ba4f6d38662b))
* 首页新增文字动画 ([db73f81](https://gitee.com/IndulgeBack/react-questionnaire/commits/db73f8124abadb6dc6bde4fe34aec515525e4e75))
* 首页gsap动画与样式调整 ([3d178f4](https://gitee.com/IndulgeBack/react-questionnaire/commits/3d178f4f695f01d6a1f02cbef28cb4350778bad0))
* 添加antV X6示例，用于测试 ([767fcef](https://gitee.com/IndulgeBack/react-questionnaire/commits/767fcef3ef558b028a7d09cab57fd526e036328f))
* 完成首页背景图Face，实现useRollEyeBalls hook ([68fed2f](https://gitee.com/IndulgeBack/react-questionnaire/commits/68fed2fdc1f0c8197ce57993b1f41854c28a22a7))
* 注册--静态搭建完成 ([020f78e](https://gitee.com/IndulgeBack/react-questionnaire/commits/020f78e7aad7a98056c4614c9c1ebd54800cb598))
* axios封装 ([d5fc213](https://gitee.com/IndulgeBack/react-questionnaire/commits/d5fc213114093d367e4a3a92edbee145efd509bc))
* BE - 新增问卷模块实体类 ([34b51bd](https://gitee.com/IndulgeBack/react-questionnaire/commits/34b51bdc3e12d4a308ce4a0998349416de1450c2))
* listSearch列表搜索组件——修改路径参数 ([844a6d8](https://gitee.com/IndulgeBack/react-questionnaire/commits/844a6d8c9608df1c7593012bfeecdfbb298c84cd))





## [0.1.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v0.0.1...v0.1.1) (2024-10-10)

**Note:** Version bump only for package root
