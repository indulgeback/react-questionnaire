# 使用官方 Node.js 22 版本作为基础镜像
FROM node:22 AS build

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录为 /app
WORKDIR /app

# 将整个项目复制到容器内
COPY . .

# 安装依赖
RUN pnpm install

# 暴露端口 8879
EXPOSE 8879

# 构建后端应用
RUN pnpm --filter @questionnaire/be run build

# 启动后端应用
CMD ["node", "packages/questionnaire-be/dist/main"]