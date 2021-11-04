FROM node:14.4

ENV VIRTUAL_HOST=api.fequinstore.com
ENV LETSENCRYPT_HOST=api.fequinstore.com
ENV LETSENCRYPT_EMAIL=rubengarcia182@gmail.com
ENV NODE_ENV=production

ENV PM2_PUBLIC_KEY w2yza5gzxuvgueb
ENV PM2_SECRET_KEY hl0o4ysz1zp9fre

COPY package*.json ./
RUN npm install
RUN npm install --global pm2
COPY ./ ./
EXPOSE 3002

CMD ["NODE_ENV=production","pm2-runtime", "start", "ecosystem.config.js"]