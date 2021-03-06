FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

COPY . /app

EXPOSE ${PORT}

CMD ["npm", "run", "serve:ssr"]
