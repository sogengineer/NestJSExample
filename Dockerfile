FROM node:20.14.0-alpine3.20

WORKDIR /app

COPY app/package*.json app/yarn.lock ./
RUN yarn install network-timeout 600000 --frozen-lockfile

COPY app/ .

CMD ["yarn", "start:dev"]