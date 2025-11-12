import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServiceSummary() {
    return {
      name: 'Aurora Markets Interview Studio API',
      version: '0.1.0',
      docs: '/api/v1',
      message:
        'Explore /api/v1/learning/modules, /api/v1/panels/upcoming, /api/v1/progress/overview, /api/v1/health',
    };
  }
}
