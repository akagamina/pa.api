FROM node:12.13.0
LABEL MAINTAINER Omer Dogan
WORKDIR /home/node/pa.api
COPY . /home/node/pa.api
RUN npm install
CMD npm run start