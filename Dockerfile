FROM node:12

WORKDIR /src

ADD yarn.lock ./
ADD . /src

ENV NODE_ENV=development

RUN yarn

EXPOSE 9999
