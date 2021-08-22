FROM node:14

WORKDIR /www/task/

RUN COPY package.json yarn.lock .
RUN npm install
RUN COPY . .

CMD index.handler

