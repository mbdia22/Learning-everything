import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

type LearningModuleSummary = {
  id: string;
  title: string;
  description: string;
  lessonsCompleted: number;
  lessonsTotal: number;
  tags: string[];
};

type LearningLevelSummary = {
  id: string;
  title: string;
  status: 'locked' | 'in-progress' | 'completed' | 'queued';
  modules: LearningModuleSummary[];
};

type LearningTrackSummary = {
  track: string;
  focus: string[];
  level: 'Beginner' | 'Intermediate' | 'Senior';
  currentLevel: LearningLevelSummary;
  upcomingLevel: LearningLevelSummary;
  referenceNotes: string[];
};

@Injectable()
export class LearningService {
  constructor(private readonly prisma: PrismaService) {}

  async getTrackSummary(): Promise<LearningTrackSummary> {
    const snapshot = await this.prisma.trackSnapshot.findFirst({
      orderBy: { updatedAt: 'desc' },
    });

    if (!snapshot) {
      throw new NotFoundException('Learning track snapshot not found');
    }

    return {
      track: snapshot.track,
      focus: snapshot.focus,
      level: snapshot.level as LearningTrackSummary['level'],
      currentLevel: snapshot.currentLevel as LearningLevelSummary,
      upcomingLevel: snapshot.upcomingLevel as LearningLevelSummary,
      referenceNotes: snapshot.referenceNotes,
    };
  }
}
