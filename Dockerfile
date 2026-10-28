# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# EmailJS keys are read at build time by Vite; Supabase keys come from .env
ARG VITE_YOUR_SERVICE_ID
ARG VITE_YOUR_TEMPLATE_ID
ARG VITE_YOUR_PUBLIC_KEY
ENV VITE_YOUR_SERVICE_ID=$VITE_YOUR_SERVICE_ID \
    VITE_YOUR_TEMPLATE_ID=$VITE_YOUR_TEMPLATE_ID \
    VITE_YOUR_PUBLIC_KEY=$VITE_YOUR_PUBLIC_KEY

RUN npm run build

# Serve stage
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
