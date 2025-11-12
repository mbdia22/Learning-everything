import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.trackSnapshot.deleteMany();
  await prisma.panelSnapshot.deleteMany();
  await prisma.progressSnapshot.deleteMany();

  await prisma.trackSnapshot.create({
    data: {
      track: 'Markets Treasurer',
      focus: [
        'Liquidity management',
        'Balance sheet optimization',
        'Regulatory capital',
        'Derivative hedging',
      ],
      level: 'Intermediate',
      currentLevel: {
        id: 'L2',
        title: 'Level 2 – Applied',
        status: 'in-progress',
        modules: [
          {
            id: 'L2.1',
            title: 'Derivatives in Treasury Context',
            description:
              'Apply swaps, options, and cross-currency structures to funding and balance sheet steering.',
            lessonsCompleted: 2,
            lessonsTotal: 5,
            tags: ['Swap valuation', 'Cross-currency', 'Hedge design'],
          },
          {
            id: 'L2.2',
            title: 'Balance Sheet Strategies',
            description:
              'Construct FTP curves, term out funding, and evaluate stress scenarios.',
            lessonsCompleted: 0,
            lessonsTotal: 4,
            tags: ['FTP', 'Stress testing', 'Capital forecasting'],
          },
          {
            id: 'L2.3',
            title: 'Risk Measurement & Reporting',
            description:
              'Compare EaR vs EVE, measure liquidity risk, and build reporting packs.',
            lessonsCompleted: 0,
            lessonsTotal: 3,
            tags: ['VaR', 'Liquidity metrics', 'Reg reporting'],
          },
          {
            id: 'L2.4',
            title: 'Intraday Liquidity Operations',
            description:
              'Design playbooks for payment gridlock, collateral mobility, and central bank utilization.',
            lessonsCompleted: 0,
            lessonsTotal: 4,
            tags: ['Intraday', 'Collateral', 'Payment systems'],
          },
          {
            id: 'L2.5',
            title: 'Regulatory Reporting Practicum',
            description:
              'Rebuild key liquidity templates (LCR, NSFR, ALMM) and reconcile against treasury MIS feeds.',
            lessonsCompleted: 0,
            lessonsTotal: 4,
            tags: ['Reporting', 'Data quality', 'Controls'],
          },
        ],
      },
      upcomingLevel: {
        id: 'L3',
        title: 'Level 3 – Strategic',
        status: 'queued',
        modules: [
          {
            id: 'L3.1',
            title: 'Advanced Structuring',
            description:
              'Use callable swaps, Bermudan options, and macro overlays for treasury optionality.',
            lessonsCompleted: 0,
            lessonsTotal: 5,
            tags: ['Optionality', 'Macro hedging'],
          },
          {
            id: 'L3.2',
            title: 'Regulatory & Governance',
            description:
              'Optimize capital stack, navigate TLAC/MREL, and defend model assumptions.',
            lessonsCompleted: 0,
            lessonsTotal: 4,
            tags: ['TLAC', 'Model risk', 'Governance'],
          },
          {
            id: 'L3.3',
            title: 'Scenario Leadership',
            description:
              'Lead crisis response, articulate macro views, and brief ALCO/board stakeholders.',
            lessonsCompleted: 0,
            lessonsTotal: 3,
            tags: ['Scenario planning', 'Communication'],
          },
          {
            id: 'L3.4',
            title: 'Capital Actions War-Gaming',
            description:
              'Run coordinated capital/liquidity playbooks across rating agencies, supervisors, and investor relations.',
            lessonsCompleted: 0,
            lessonsTotal: 4,
            tags: ['Capital planning', 'Ratings', 'Investor relations'],
          },
          {
            id: 'L3.5',
            title: 'Board Storytelling & Coaching',
            description:
              'Craft narratives, visualizations, and challenge sessions for ALCO and board strategy offsites.',
            lessonsCompleted: 0,
            lessonsTotal: 3,
            tags: ['Executive communication', 'Storytelling', 'Workshops'],
          },
        ],
      },
      referenceNotes: [
        'Review Markets Treasury Deep Dive notes for liquidity instruments and macro drivers.',
        'Practice LCR recalculations using challenge packs.',
        'Refresh governance flow: ALCO, Treasury Risk Committee, FTP Committee.',
      ],
    },
  });

  await prisma.panelSnapshot.create({
    data: {
      panel: {
        id: 'panel-2025-11-14',
        title: 'Markets Treasurer · Liquidity Crunch Case',
        mode: 'Case Study',
        scheduledFor: '2025-11-14T16:00:00.000Z',
        durationMinutes: 45,
        personas: [
          {
            role: 'Head of Treasury Trading',
            focus: 'Hedging tactics, execution detail, P&L guardrails',
            followUps: [
              'Walk me through DV01 impact if we extend the hedge by 2y.',
              'How would you handle collateral calls in the first 24 hours?',
            ],
          },
          {
            role: 'Liquidity Risk Lead',
            focus: 'LCR/NSFR outcomes, stress assumptions, governance escalation',
            followUps: [
              'Which early warning indicators trigger the contingency funding plan?',
              'Quantify HQLA buffer after the proposed actions.',
            ],
          },
          {
            role: 'Regulatory Affairs',
            focus: 'Documentation, reporting cadence, policy alignment',
            followUps: [
              'Which committees must sign off before execution?',
              'What supervisory questions are you expecting post-intervention?',
            ],
          },
        ],
        focusAreas: [
          'Funding squeeze playbook',
          'Governance escalation timeline',
          'DV01 and liquidity buffer recalcs',
        ],
        preparation: [
          'Review Markets Treasury Deep Dive governance section.',
          'Complete FTP recalibration worksheet.',
          'Skim latest BIS funding stress review.',
        ],
      },
      quickPractice: [
        {
          id: 'qp-lcr-drill',
          title: 'Liquidity Coverage Ratio drill',
          durationMinutes: 7,
          type: 'drill',
        },
        {
          id: 'qp-ftp-worksheet',
          title: 'FTP recalibration worksheet',
          durationMinutes: 12,
          type: 'worksheet',
        },
      ],
    },
  });

  await prisma.progressSnapshot.create({
    data: {
      track: 'Markets Treasurer',
      level: 'Level 2 · Applied',
      xp: 1860,
      weeklyChange: 12,
      completedPanels: 4,
      streakDays: 5,
      upcomingGoals: [
        'Finish Balance Sheet Strategies module',
        'Run crisis escalation dry-run with mentor',
        'Publish updated strategic funding memo',
      ],
      difficultyMix: {
        beginner: 24,
        intermediate: 52,
        senior: 24,
      },
      metricSparklines: [
        { label: 'Confidence', values: [6.2, 6.5, 6.9, 7.1, 7.5, 7.8] },
        { label: 'Accuracy', values: [58, 61, 63, 67, 70, 72] },
        { label: 'Depth', values: [54, 56, 60, 64, 66, 70] },
      ],
    },
  });
}

main()
  .then(() => {
    console.log('🌱 Database seeded');
    return prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
