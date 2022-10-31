import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Potty } from 'src/potties/potty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PottiesService {
  constructor(
    @InjectRepository(Potty) private pottyRepository: Repository<Potty>,
  ) {}
}
