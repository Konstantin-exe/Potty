import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PottiesController } from '../potties/controllers/potties/potties.controller';
import { PottiesService } from '../potties/services/potties/potties.service';
import { PottyDto } from './potty.dto';

@Module({
  imports: [TypeOrmModule.forFeature([PottyDto])],
  providers: [PottiesService],
  controllers: [PottiesController],
})
export class PottiesModule {}
