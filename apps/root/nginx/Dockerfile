FROM nginx:1.19.9-alpine

COPY ./config /etc/nginx/config
COPY ./config/html/error.html /var/www/default/error.html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf.template /etc/nginx/templates/

EXPOSE 80
