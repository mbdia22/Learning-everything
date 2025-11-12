import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

type ProgressOverview = {
  track: string;
  level: string;
  xp: number;
  weeklyChange: number;
  completedPanels: number;
  streakDays: number;
  upcomingGoals: string[];
};

type DifficultyMix = {
  beginner: number;
  intermediate: number;
  senior: number;
};

type MetricSparkline = {
  label: string;
  values: number[];
};

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  async getOverview(): Promise<{
    overview: ProgressOverview;
    difficultyMix: DifficultyMix;
    metricSparklines: MetricSparkline[];
  }> {
    const snapshot = await this.prisma.progressSnapshot.findFirst({
      orderBy: { updatedAt: 'desc' },
    });

    if (!snapshot) {
      throw new NotFoundException('Progress snapshot not found');
    }

    return {
      overview: {
        track: snapshot.track,
        level: snapshot.level,
        xp: snapshot.xp,
        weeklyChange: snapshot.weeklyChange,
        completedPanels: snapshot.completedPanels,
        streakDays: snapshot.streakDays,
        upcomingGoals: snapshot.upcomingGoals,
      },
      difficultyMix: snapshot.difficultyMix as DifficultyMix,
      metricSparklines: snapshot.metricSparklines as MetricSparkline[],
    };
  }
}
