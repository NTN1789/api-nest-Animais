import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animais/animais.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animais/models/entity/animal.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => AnimalModule),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Animal],
      synchronize: process.env.ENV === 'development',
    })


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
