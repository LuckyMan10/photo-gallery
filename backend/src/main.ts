import { NestFactory } from '@nestjs/core';
import { RootModule } from 'src/modules/root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(3000);
}
bootstrap();
