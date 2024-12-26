FROM node:22

RUN npm config set registry https://registry.npmmirror.com

WORKDIR /app

COPY /packages/questionnaire-be/dist ./dist
COPY /packages/questionnaire-be/package.json .

RUN npm install --production

EXPOSE 8879

CMD ["node", "dist/main"]