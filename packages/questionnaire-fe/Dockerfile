# 第一阶段：构建前端应用
FROM node:22 as build-stage

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制 monorepo 的根配置文件
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./

# 复制前端项目源码
COPY packages/questionnaire-fe ./packages/questionnaire-fe

# 安装依赖（根目录和前端项目）
RUN pnpm install -r --filter ./packages/questionnaire-fe

# 进入前端项目目录并构建
WORKDIR /app/packages/questionnaire-fe
RUN pnpm build

# 第二阶段：生产环境
FROM nginx:1.27.3

# 设置时区（根据需要修改）
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 将构建好的前端文件复制到 Nginx 的默认发布目录
COPY --from=build-stage /app/packages/questionnaire-fe/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY packages/questionnaire-fe/nginx/nginx.conf /etc/nginx/nginx.conf

# 设置文件权限（确保 Nginx 可以访问静态文件）
RUN chmod -R 755 /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]