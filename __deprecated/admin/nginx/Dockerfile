FROM nginx:1.25.0-alpine3.17-slim

COPY ./config /etc/nginx/config
COPY ./config/html/error.html /var/www/default/error.html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf.template /etc/nginx/templates/

EXPOSE 80
