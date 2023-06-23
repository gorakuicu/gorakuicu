import { NestFactory } from '@nestjs/core';
import dns from 'dns';

import { AppModule } from './app.module';

if (process.env.NODE_ENV === 'development') {
  dns.setDefaultResultOrder('ipv4first');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(7777);
}
bootstrap();
