FROM node:10-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm install -g serve
WORKDIR /app
CMD ["serve", "-p", "80", "-s", "build"]
EXPOSE 80