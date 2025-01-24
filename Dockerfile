FROM node:20.18-slim

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

ADD . /app

RUN yarn 

RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3001

ENTRYPOINT ["node", ".output/server/index.mjs"]