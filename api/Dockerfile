FROM node:16-alpine

USER node

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node api/package-lock.json api/package.json ./api/

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "src/index.js"]

