import { Controller, Get } from '@nestjs/common';
import { PottiesService } from 'src/potties/services/potties/potties.service';

@Controller('potties')
export class PottiesController {
  constructor(private readonly pottiesService: PottiesService) {
    // @Get("potties")
  }
}
