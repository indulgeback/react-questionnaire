# 构建阶段
FROM node:22 as build-stage

# 设置工作目录
WORKDIR /app

# 配置 npm 使用国内镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制 monorepo 的根配置文件
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 复制客户端项目源码
COPY packages/questionnaire-client ./packages/questionnaire-client

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install -r --filter ./packages/questionnaire-client

# 构建 Next.js 应用
WORKDIR /app/packages/questionnaire-client
RUN pnpm build

# 生产阶段
FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 从构建阶段复制必要文件
COPY --from=build-stage /app/packages/questionnaire-client/package.json ./
COPY --from=build-stage /app/packages/questionnaire-client/.next ./.next
COPY --from=build-stage /app/packages/questionnaire-client/public ./public
COPY --from=build-stage /app/packages/questionnaire-client/next.config.js ./

# 安装生产依赖
RUN npm install --production

# 暴露端口
EXPOSE 8878

# 启动应用
CMD ["npm", "start"]
