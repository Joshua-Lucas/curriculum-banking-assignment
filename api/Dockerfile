FROM node:16-bullseye

USER node

RUN mkdir /home/node/db

RUN mkdir /home/node/src

WORKDIR /home/node/src

COPY --chown=node:node ./package-lock.json ./package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "src/bin/www.mjs"]

