import Fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';
import sedokuRoute from './routes/sedoku';

const fastify = Fastify({
  logger: true
});

// Register static file serving
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
});

// Register sedoku route
fastify.register(sedokuRoute);

// Start server
const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3001');
    console.log('Sudoku game available at http://localhost:3001/sedoku');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
