# 使用官方 Node.js 22 版本作为基础镜像
FROM node:22 AS build

# 使用淘宝镜像源加速 npm 安装
RUN npm config set registry https://registry.npmmirror.com

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录为 /app
WORKDIR /app

# 将前端源代码复制到工作目录
COPY packages/questionnaire-fe/ .

# 将 pnpm-lock.yaml 复制到工作目录
COPY pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install && pnpm list --depth=0

# 将 shared 包复制到工作目录
COPY packages/shared ./shared

# 构建前端应用
RUN pnpm run build

# 使用 Nginx 作为生产环境的服务
FROM nginx:1.27.3
# 将上一步构建的结果从构建阶段复制到 Nginx 的默认发布目录
COPY --from=build /app/dist /usr/share/nginx/html
# 复制自定义的 Nginx 配置文件
COPY packages/questionnaire-fe/nginx/nginx.conf /etc/nginx/nginx.conf
