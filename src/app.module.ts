import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PottiesModule } from './potties/potties.module';
import { Potty } from './potties/potty.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'user',
      password: 'secret',
      database: 'potty',
      entities: [Potty],
      synchronize: true,
    }),
    PottiesModule,
  ],
})
export class AppModule {}
