import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fs from 'fs';
import path from 'path';

export default async function sedokuRoute(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/sedoku', async (request, reply) => {
    const htmlPath = path.join(__dirname, '..', '..', 'public', 'sedoku', 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf-8');
    
    reply.type('text/html').send(html);
  });
}
