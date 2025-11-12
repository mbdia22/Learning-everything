import { Controller, Get } from '@nestjs/common';
import { PanelsService } from './panels.service';

@Controller('panels')
export class PanelsController {
  constructor(private readonly panelsService: PanelsService) {}

  @Get('upcoming')
  async getUpcomingPanel() {
    const [panel, quickPractice] = await Promise.all([
      this.panelsService.getUpcomingPanel(),
      this.panelsService.getQuickPractice(),
    ]);

    return { panel, quickPractice };
  }
}
