FROM node:18

ARG WORK_DIR=/tmp

RUN mkdir -p $WORK_DIR

WORKDIR $WORK_DIR

COPY package.json .

RUN ["yarn", "install", "--silent"]

COPY . .

CMD ["npm", "start"]
