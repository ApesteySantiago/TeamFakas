import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify();

const PORT = process.env.PORT || 4000;

fastify.get('/', async () => {
  return { message: 'Backend Fastify corriendo ✅' };
});

fastify.listen({ port: Number(PORT), host:'localhost'}, (err, address) => {
  if (err) { 
    console.error(err);
    process.exit(1);
   }
   console.log(`Servidor corriendo en ${address}`);
});