import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PottiesController } from './controllers/potties/potties.controller';
import { PottiesService } from './services/potties/potties.service';
import { Potty } from './potty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Potty])],
  providers: [PottiesService],
  controllers: [PottiesController],
})
export class PottiesModule {}
