FROM node:15-alpine

WORKDIR /usr/src/app

RUN apk update --no-cache && apk add --no-cache wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
RUN apk add --no-cache make gcc g++ python && \
  npm install

RUN npm rebuild bcrypt --build-from-source
#RUN npm run build

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/main"]