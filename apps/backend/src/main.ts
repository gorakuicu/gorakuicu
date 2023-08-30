import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as cookieParser from 'cookie-parser';
import * as compression from '@fastify/compress';
import secureSession from '@fastify/secure-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  app.use(cookieParser());
  await app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.register(secureSession, {
    secret: 'averylogphrasebiggerthanthirtytwochars',
    salt: 'mq9hDxBVDbspDR6n',
  });
  await app.listen(5000);
}

bootstrap();
