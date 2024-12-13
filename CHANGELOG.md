# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
