# 使用官方 Node.js 22 版本作为基础镜像
FROM node:22

# 使用淘宝镜像源加速 npm 安装
RUN npm config set registry https://registry.npmmirror.com

# 安装 pnpm
RUN npm install -g pnpm

# 安装 typescript
RUN npm i -g typescript

# 设置工作目录为 /app
WORKDIR /app

# 将本地构建的后端应用复制到容器中
COPY packages/questionnaire-be/dist ./dist

# 将 shared 包复制到容器中
COPY packages/shared/dist ./shared

# 安装生产依赖
COPY packages/questionnaire-be/package.json .
COPY pnpm-lock.yaml .
RUN pnpm install --prod

# 暴露端口 8879
EXPOSE 8879

# 启动后端应用
CMD ["node", "dist/main"]