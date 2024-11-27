# 使用官方 Node.js 22 版本作为基础镜像
FROM node:22 as build

# 设置 npm 镜像源为淘宝镜像
RUN npm config set registry https://registry.npmmirror.com

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录为 /app
WORKDIR /app

# 将 package.json 和 pnpm-lock.yaml 复制到工作目录
COPY packages/questionnaire-fe/package*.json ./
COPY pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile && pnpm list --depth=0

# 将 shared 包复制到工作目录
COPY packages/shared ./shared

# 将后端源代码复制到工作目录
COPY packages/questionnaire-be/ .

# 暴露端口 8879
EXPOSE 8879

RUN pnpm run build

# 启动后端应用
CMD ["node", "dist/main"]