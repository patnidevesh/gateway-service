FROM node:18

EXPOSE 3001

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

CMD [ "node", "index.js"]