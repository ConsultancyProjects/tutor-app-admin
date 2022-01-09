FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
EXPOSE 5000
CMD node_modules/.bin/ng serve --port 5000 --host 0.0.0.0