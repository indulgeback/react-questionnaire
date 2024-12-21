# 使用 Nginx 作为生产环境的服务
FROM nginx:1.27.3

# 将本地构建的前端应用复制到 Nginx 的默认发布目录
COPY packages/questionnaire-fe/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件
COPY packages/questionnaire-fe/nginx/nginx.conf /etc/nginx/nginx.conf
