# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /auide/backend
COPY . .
RUN npm install --development
CMD ["node", "backend/server.js"]
EXPOSE 5001