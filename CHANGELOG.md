# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
