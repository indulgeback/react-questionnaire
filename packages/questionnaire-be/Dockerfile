# 第一阶段：构建后端应用
FROM node:22 as build-stage

# 设置工作目录
WORKDIR /app

# 配置 npm 使用国内镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制 monorepo 的根配置文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 复制后端项目的依赖文件
COPY packages/questionnaire-be/package.json ./packages/questionnaire-be/package.json

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖（仅安装后端项目所需依赖）
RUN pnpm install -r --filter ./packages/questionnaire-be

# 复制后端项目源码
COPY packages/questionnaire-be ./packages/questionnaire-be

# 构建后端应用
WORKDIR /app/packages/questionnaire-be
RUN pnpm build

# 第二阶段：生产环境
FROM node:22

# 设置工作目录
WORKDIR /app

# 配置 npm 使用国内镜像源
RUN npm config set registry https://registry.npmmirror.com

# 从构建阶段复制构建好的文件
COPY --from=build-stage /app/packages/questionnaire-be/dist ./dist
COPY --from=build-stage /app/packages/questionnaire-be/package.json .

# 安装生产依赖
RUN npm install --production

# 暴露端口
EXPOSE 8879

# 启动应用
CMD ["node", "dist/main"]