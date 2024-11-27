import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest.js API with PostgreSQL, swagger, docker')
  .setVersion('1.0.0')
  .addTag('redgreenmadfox')
  .build();
