FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install express

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
