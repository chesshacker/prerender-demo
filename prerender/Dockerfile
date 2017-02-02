FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY service.js .
EXPOSE 3000
CMD npm start
