FROM nginx

WORKDIR /dist

COPY ./dist .

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY /dist/product-manager /usr/share/nginx/html