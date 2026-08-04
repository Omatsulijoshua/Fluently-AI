import { Injectable } from '@nestjs/common';

export interface ReviewLogDto {
  userId: string;
  wordId: string;
  recalled: boolean;
  responseTimeMs: number;
}

@Injectable()
export class VocabularyService {
  async getReviewQueue(userId: string) {
    return {
      userId,
      dueCount: 3,
      cards: [
        {
          id: 'wrd_101',
          term: 'madrugada',
          ipa: '/ma.ðɾuˈɣa.ða/',
          meaning: 'early morning / dawn hours',
          example: 'Me levanté de madrugada para ver el amanecer.',
          collocations: ['de madrugada', 'en la madrugada'],
          cefrLevel: 'B1',
          halfLifeDays: 1.5,
          retrievability: 0.42,
          memoryTrick: 'Think of "mad" rush before dawn!',
        },
        {
          id: 'wrd_102',
          term: 'desarrollar',
          ipa: '/de.sa.roˈʝaɾ/',
          meaning: 'to develop / to evolve',
          example: 'Estamos desarrollando un nuevo software.',
          collocations: ['desarrollar un proyecto', 'desarrollar software'],
          cefrLevel: 'B1',
          halfLifeDays: 3.2,
          retrievability: 0.58,
          memoryTrick: 'Roll the "rr" as you roll out new code!',
        },
      ],
    };
  }

  async recordReviewLog(dto: ReviewLogDto) {
    const newHalfLife = dto.recalled ? 3.3 : 0.6;
    return {
      userId: dto.userId,
      wordId: dto.wordId,
      recalled: dto.recalled,
      newHalfLifeDays: newHalfLife,
      nextReviewDate: new Date(Date.now() + newHalfLife * 86400 * 1000).toISOString(),
    };
  }
}
