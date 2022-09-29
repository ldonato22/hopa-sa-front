FROM node:16.17.0 AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

# Stage 1, based on NGINX to provide a configuration to be used with react-routerFROM nginx:alpine
FROM nginx:alpine
COPY --from=build /build/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8091
CMD ["nginx", "-g", "daemon off;"]