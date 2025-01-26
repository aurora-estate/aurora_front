# FROM node:20.18-slim

# WORKDIR /app

# COPY package.json /app/
# COPY yarn.lock /app/

# ADD . /app

# RUN yarn 

# RUN yarn build

# ENV HOST 0.0.0.0
# EXPOSE 3001



# ENTRYPOINT ["node", ".output/server/index.mjs"]

# ///

FROM  node:20.18-slim as builder

# create work directory in app folder
WORKDIR /app

# install required packages for node image

# copy over package.json files
COPY package.json /app/
COPY yarn.lock /app/

# install all depencies
RUN yarn 

# copy over all files to the work directory
ADD . /app

# build the project
RUN yarn build

# start final image
FROM node:20.18-slim


WORKDIR /app

# copy over build files from builder step
COPY --from=builder /app/.output  app/.output
COPY --from=builder /app/.nuxt  app/.nuxt

# expose the host and port 3000 to the server
ENV HOST 0.0.0.0
EXPOSE 3001

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]