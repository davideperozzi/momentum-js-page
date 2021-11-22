FROM node:11.1.0 as builder

WORKDIR /app
ADD . /app
RUN  npm install

FROM nginx:1.20-alpine

COPY --from=builder /app /usr/share/nginx/html
