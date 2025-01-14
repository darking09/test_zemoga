FROM node:14.19.1-buster-slim as zemoga_test

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "dev"]

FROM zemoga_test as production

ENV NODE_PATH=./build

RUN yarn build