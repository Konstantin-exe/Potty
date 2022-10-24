import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PottyDto } from 'src/potties/potty.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PottiesService {
  constructor(
    @InjectRepository(PottyDto) private pottiesRepository: Repository<PottyDto>,
  ) {}
}
