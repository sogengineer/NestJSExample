FROM node:20.14.0-slim

WORKDIR /app

COPY src/package*.json .

RUN yarn cache clean && yarn install --network-timeout 600000 --frozen-lockfile
COPY src/ .
