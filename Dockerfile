FROM node:20.18-slim

COPY package.json package.json
COPY yarn.lock yarn.lock 

RUN yarn 

COPY . .



RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]

