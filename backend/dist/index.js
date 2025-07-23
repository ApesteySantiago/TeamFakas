"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fastify = (0, fastify_1.default)();
const PORT = process.env.PORT || 4000;
console.log('PORT value:', PORT);
fastify.get('/', async () => {
    return { message: 'Backend Fastify corriendo ✅' };
});
fastify.listen({ port: Number(PORT), host: 'localhost' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor corriendo en ${address}`);
});
