# Stage 1
FROM node:latest as builder

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/Report-Manager /usr/share/nginx/html
EXPOSE 80
