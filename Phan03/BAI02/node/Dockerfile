# Sử dụng Node.js làm base image
FROM node:18

# Tạo thư mục app trong container
WORKDIR /app

# Copy file package.json và cài đặt dependencies
COPY package.json ./
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# Chạy ứng dụng Node.js
CMD ["node", "index.js"]