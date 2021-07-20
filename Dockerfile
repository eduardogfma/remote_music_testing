# Dockerfile example for local development
# Author: Eduardo A.
# Date: 17/10/2020

FROM node:12-slim

# ARG 
# Contrary to ENV, which defines a variable to be passed at run-time, 
# the ARG instruction defines a variable to be passed at build-time.
# https://docs.docker.com/engine/reference/builder/#arg 
#
# This way, when build the image from this file, the default environment
# is 'production'. However, if an image is build using docker-compose
# with a different argument, the NODE_ENVIRONMENT will be overriden.
ARG NODE_ENV=production

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app

ENV PATH /node/node_modules/.bin/:$PATH

COPY . .

CMD ["node", "/node/app/server/index.js"]