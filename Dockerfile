FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install | export DOCKER_BUILDKIT=0 | export COMPOSE_DOCKER_CLI_BUILD=0
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]