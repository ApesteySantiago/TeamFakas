# Imagen base
FROM node:20

# Directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instalar dependencias
RUN npm install

# Compilar TypeScript
RUN npm run build

# Exponer puerto
EXPOSE 4000

# Comando de inicio
CMD ["npm", "start"]
