import { Injectable } from '@nestjs/common';

export interface AnalyzePronunciationDto {
  userId: string;
  targetPhrase: string;
  expectedPhonemes: string[];
  userPhonemes: string[];
}

@Injectable()
export class PronunciationService {
  async analyzePronunciation(dto: AnalyzePronunciationDto) {
    const phonemeScores = dto.expectedPhonemes.map((ph) => {
      const isMatched = dto.userPhonemes.includes(ph);
      return {
        phoneme: ph,
        score: isMatched ? 96.0 : 48.0,
        status: isMatched ? 'correct' : 'mispronounced',
        mouthPlacementHint: `Place tongue tip against upper alveolar ridge for /${ph}/`,
      };
    });

    const totalScore = phonemeScores.reduce((acc, curr) => acc + curr.score, 0) / (phonemeScores.length || 1);

    return {
      userId: dto.userId,
      targetPhrase: dto.targetPhrase,
      overallAccuracyScore: Math.round(totalScore * 10) / 10,
      pitchContour: 'dynamic_native',
      phonemeBreakdown: phonemeScores,
      timestamp: new Date().toISOString(),
    };
  }
}
