FROM node:20.14.0-slim

WORKDIR /app

ADD app/package*.json app/yarn.lock /app/

RUN yarn cache clean && yarn install --network-timeout 600000 --frozen-lockfile

COPY app/ .

CMD ["yarn", "start:dev"]