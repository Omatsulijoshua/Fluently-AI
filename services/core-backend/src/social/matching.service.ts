import { Injectable } from '@nestjs/common';

export interface MatchQueryDto {
  userId: string;
  nativeLanguageCode: string;
  targetLanguageCode: string;
  currentCefrLevel: string;
}

@Injectable()
export class MatchingService {
  async findNativeMatches(dto: MatchQueryDto) {
    return {
      userId: dto.userId,
      queryPair: `${dto.nativeLanguageCode} <-> ${dto.targetLanguageCode}`,
      matches: [
        {
          partnerId: 'partner_881',
          name: 'Mateo Alonso',
          avatarUrl: 'https://i.pravatar.cc/150?u=mateo',
          nativeLanguage: dto.targetLanguageCode,
          targetLanguage: dto.nativeLanguageCode,
          cefrLevel: 'B2',
          matchScore: 98.4,
          compatibilityFactors: ['Shared Interest: Technology', 'Complementary Dialects'],
        },
        {
          partnerId: 'partner_882',
          name: 'Lucía Fernández',
          avatarUrl: 'https://i.pravatar.cc/150?u=lucia',
          nativeLanguage: dto.targetLanguageCode,
          targetLanguage: dto.nativeLanguageCode,
          cefrLevel: 'B1',
          matchScore: 94.1,
          compatibilityFactors: ['Shared Interest: Travel & Literature'],
        },
      ],
    };
  }
}
