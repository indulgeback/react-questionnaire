# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.5.0...v1.5.1) (2024-11-26)


### Bug Fixes

* BE - 修复默认返回状态码组件将所有状态码都重置为200 ([9e048b0](https://gitee.com/IndulgeBack/react-questionnaire/commits/9e048b0d3542c36ccaa635c599f924fed7b4f7be))
* BE - 修复全局环境变量问题，引入cross-env传递全局环境变量 ([1cf0bba](https://gitee.com/IndulgeBack/react-questionnaire/commits/1cf0bba4cf96ff0866be13a7b87c5a9a0e9e42b4))


### Performance Improvements

* BE - 静态文件服务器优化，写入配置进配置文件，上传文件接口返回静态服务器访问url ([30fbebb](https://gitee.com/IndulgeBack/react-questionnaire/commits/30fbebb398782b822796d61bbcbed92bcffb2172))





# [1.5.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.4.0...v1.5.0) (2024-11-26)


### Bug Fixes

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


### Performance Improvements

* BE - 后端项目优化：配置全局错误处理器于默认响应状态码 ([cfc646f](https://gitee.com/IndulgeBack/react-questionnaire/commits/cfc646f4b08db9d4c81366d7e15eacf035361b45))





# [1.4.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.3.0...v1.4.0) (2024-11-20)


### Features

* BE - 单个问卷移除与彻底删除功能 ([67073ea](https://gitee.com/IndulgeBack/react-questionnaire/commits/67073ea144c0d8086c5bba8d2bf5e0c7cf74b80c))
* BE - 问卷列表接口支持星标与回收站查询 ([bc0f62a](https://gitee.com/IndulgeBack/react-questionnaire/commits/bc0f62a224196d3a6dfb4b5f87a423f4cb358634))


### Performance Improvements

* BE - 文件上传接口封装文件上传通用拦截器优化 ([7c71563](https://gitee.com/IndulgeBack/react-questionnaire/commits/7c7156384f07bdd1965ee9bbbcb3f457b89db599))
* BE - 优化邮件验证码发送体验 ([2330d5a](https://gitee.com/IndulgeBack/react-questionnaire/commits/2330d5a94d53b247f4914ffaec70030963eda40f))





# [1.3.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.2.0...v1.3.0) (2024-11-18)


### Features

* BE - 更新问卷表结构 ([bb89b38](https://gitee.com/IndulgeBack/react-questionnaire/commits/bb89b3845af227b86b8d25bb6636bcee945ec146))
* BE - 静态资源服务 ([e664b57](https://gitee.com/IndulgeBack/react-questionnaire/commits/e664b57c80cada78051e5c529b3ebfc15f6476c4))
* BE - 文件上传下载功能 ([6512da1](https://gitee.com/IndulgeBack/react-questionnaire/commits/6512da196ba7e61f578f41f6ec095fa441b829f3))
* BE - 问卷列表支持模糊搜索 ([490b278](https://gitee.com/IndulgeBack/react-questionnaire/commits/490b278586d373a06d435c9381141a2f88332771))





# [1.2.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.1.0...v1.2.0) (2024-11-08)


### Features

* 登录Token持久化，请求携带token ([ee3ecaa](https://gitee.com/IndulgeBack/react-questionnaire/commits/ee3ecaa6fb9ed6343e535f8e0d8f8c35009edcbb))
* BE - 集成 JWT 校验 ([48ffe5f](https://gitee.com/IndulgeBack/react-questionnaire/commits/48ffe5fcd36fce13124e197ccdf7007ef19f1515))
* BE - 集成 JWT 校验 ([94190ee](https://gitee.com/IndulgeBack/react-questionnaire/commits/94190ee7ecaf153d06952b967d3567064031363a))
* BE - 集成 JWT 校验 ([ef88847](https://gitee.com/IndulgeBack/react-questionnaire/commits/ef8884766ab9734a83445a6d0797fbcfd714ebfa))





# [1.1.0](https://gitee.com/IndulgeBack/react-questionnaire/compare/v1.0.1...v1.1.0) (2024-11-01)


### Features

* 邮箱添加后端校验 ([bc453d0](https://gitee.com/IndulgeBack/react-questionnaire/commits/bc453d034824e3954105003a42f66cdd7f6324b9))
* BE - 更新拦截器配置 ([60deab6](https://gitee.com/IndulgeBack/react-questionnaire/commits/60deab6f87e7c7d0063f90ebeb6bc155d07adae4))
* BE - 更新验证码邮件为html格式 ([f71c339](https://gitee.com/IndulgeBack/react-questionnaire/commits/f71c339d422b493f2a55561ed9b776567e8447a2))
* BE - 集成mysql日志 ([ddc093a](https://gitee.com/IndulgeBack/react-questionnaire/commits/ddc093a4145bcd0e5ce505269b57c858646865b6))
* BE - 实现定时任务功能模块 ([20a1b5c](https://gitee.com/IndulgeBack/react-questionnaire/commits/20a1b5cd2af1728e59b1a927d4c7fb4ae3f2d8c6))
* BE - 系统身份认证转为邮箱认证 ([a38c058](https://gitee.com/IndulgeBack/react-questionnaire/commits/a38c058d6543dcd3c3a3a7b280dbbc5d1985b69f))
* FE - 封装 useRequestSuccessChecker hook 解决消息通知问题 ([3198462](https://gitee.com/IndulgeBack/react-questionnaire/commits/31984624e8e2c8af3562b318b311568d10d36e6a))
* FE - 注册验证邮箱功能 ([3aeeb9b](https://gitee.com/IndulgeBack/react-questionnaire/commits/3aeeb9b6021b2af19313a3a6ff4fc9986a8282c7))





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
* FE - 调整问卷列表前端样式 ([efc7d17](https://gitee.com/IndulgeBack/react-questionnaire/commits/efc7d172465c7aa4d282ed7a7b9c4d7a63cf5be3))





## [0.2.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v0.2.0...v0.2.1) (2024-10-10)

**Note:** Version bump only for package @questionnaire/be





# 0.2.0 (2024-10-10)


### Features

* 后端初始化构建 ([24a38f6](https://gitee.com/IndulgeBack/react-questionnaire/commits/24a38f6db9b8831e3fffc3ece1d4fe8f3098475e))
* BE - 新增问卷模块实体类 ([34b51bd](https://gitee.com/IndulgeBack/react-questionnaire/commits/34b51bdc3e12d4a308ce4a0998349416de1450c2))





## [0.1.1](https://gitee.com/IndulgeBack/react-questionnaire/compare/v0.0.1...v0.1.1) (2024-10-10)

**Note:** Version bump only for package @questionnaire/be





# 0.1.0 (2024-10-10)


### Features

* 后端初始化构建 ([24a38f6](https://gitee.com/IndulgeBack/react-questionnaire/commits/24a38f6db9b8831e3fffc3ece1d4fe8f3098475e))
* BE - 新增问卷模块实体类 ([34b51bd](https://gitee.com/IndulgeBack/react-questionnaire/commits/34b51bdc3e12d4a308ce4a0998349416de1450c2))
