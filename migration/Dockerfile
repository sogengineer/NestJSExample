FROM node:20.14.0-slim

WORKDIR /app

ADD src/package*.json /app/

RUN yarn cache clean && yarn install --network-timeout 600000 --frozen-lockfile
COPY src/ .

CMD ["yarn", "migration"]