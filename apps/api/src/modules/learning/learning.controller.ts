import { Controller, Get } from '@nestjs/common';
import { LearningService } from './learning.service';

@Controller('learning')
export class LearningController {
  constructor(private readonly learningService: LearningService) {}

  @Get('modules')
  getTrackModules() {
    return this.learningService.getTrackSummary();
  }
}
