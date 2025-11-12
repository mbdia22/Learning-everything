import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

type PanelPersona = {
  role: string;
  focus: string;
  followUps: string[];
};

type PanelSchedule = {
  id: string;
  title: string;
  mode: 'Rapid Fire' | 'Case Study' | 'Deep Dive';
  scheduledFor: string;
  durationMinutes: number;
  personas: PanelPersona[];
  focusAreas: string[];
  preparation: string[];
};

type QuickPractice = {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'drill' | 'worksheet';
};

@Injectable()
export class PanelsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUpcomingPanel(): Promise<PanelSchedule> {
    const snapshot = await this.prisma.panelSnapshot.findFirst({
      orderBy: { updatedAt: 'desc' },
    });

    if (!snapshot) {
      throw new NotFoundException('Panel snapshot not found');
    }

    return snapshot.panel as PanelSchedule;
  }

  async getQuickPractice(): Promise<QuickPractice[]> {
    const snapshot = await this.prisma.panelSnapshot.findFirst({
      orderBy: { updatedAt: 'desc' },
    });

    if (!snapshot) {
      throw new NotFoundException('Panel snapshot not found');
    }

    return snapshot.quickPractice as QuickPractice[];
  }
}
