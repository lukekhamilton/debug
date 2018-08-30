# See multistage builds https://docs.docker.com/engine/userguide/eng-image/multistage-build/
FROM node:8.11.2 as nodebase

RUN mkdir -p /app
RUN chown node:node /app
ARG SERVICES
# ENV SKIP_COMMIT_HOOK=1

# RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.3.2

WORKDIR /app
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
# COPY schema.yaml /app/schema.yaml

RUN chown -R node:node /app/*

USER node

# RUN yarn install

COPY . /app

# RUN mkdir -p build
# RUN chown -R node:node build
# RUN yarn build

WORKDIR /app

EXPOSE 5001
CMD node /app/app.js
