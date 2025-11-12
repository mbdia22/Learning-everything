import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './modules/health/health.module';
import { LearningModule } from './modules/learning/learning.module';
import { PanelsModule } from './modules/panels/panels.module';
import { ProgressModule } from './modules/progress/progress.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    LearningModule,
    PanelsModule,
    ProgressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
