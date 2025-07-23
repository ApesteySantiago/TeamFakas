# Usamos una imagen base oficial de Node
FROM node:20

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos el package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto de los archivos de la app
COPY . .

# Build de la app Next.js
RUN npm run build

# Exponemos el puerto 3000
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]