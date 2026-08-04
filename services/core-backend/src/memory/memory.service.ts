import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryService {
  async querySemanticMemory(userId: string, query: string) {
    return {
      userId,
      query,
      results: [
        {
          category: 'PRONUNCIATION',
          context: 'User struggled with /r/ trill sound in "desarrollar"',
          similarity: 0.94,
          recordedDaysAgo: 3,
        },
        {
          category: 'GRAMMAR',
          context: 'User used "fui a el" instead of contracted "fui al"',
          similarity: 0.89,
          recordedDaysAgo: 7,
        },
      ],
    };
  }

  async getDailyCurriculum(userId: string) {
    return {
      userId,
      date: new Date().toISOString().split('T')[0],
      cefrLevel: 'B1',
      totalEstimatedMinutes: 22,
      microLessons: [
        {
          id: 'les_01',
          title: 'Acoustic Drill: Mastering /r/ trill',
          type: 'PRONUNCIATION',
          estimatedMinutes: 5,
        },
        {
          id: 'les_02',
          title: 'Grammar Reinforcement: Prepositional Contractions (a + el)',
          type: 'GRAMMAR',
          estimatedMinutes: 7,
        },
        {
          id: 'les_03',
          title: 'AI Dialogue: Renting an Apartment in Barcelona',
          type: 'CONVERSATION',
          estimatedMinutes: 10,
        },
      ],
    };
  }
}
