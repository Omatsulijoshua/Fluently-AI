import { Injectable } from '@nestjs/common';

export interface ClaimXpDto {
  userId: string;
  baseAmount: number;
  activityType: 'PRONUNCIATION_DRILL' | 'CONVERSATION' | 'GRAMMAR_QUIZ' | 'READING_LESSON';
  accuracyScore?: number;
}

@Injectable()
export class GamificationService {
  async claimXp(dto: ClaimXpDto) {
    const accuracyBonus = dto.accuracyScore && dto.accuracyScore >= 90 ? 1.5 : 1.0;
    const streakMultiplier = 1.25; // 14-day streak bonus multiplier
    const finalXp = Math.round(dto.baseAmount * accuracyBonus * streakMultiplier);

    const coinsEarned = Math.floor(finalXp / 10);

    return {
      userId: dto.userId,
      baseXp: dto.baseAmount,
      accuracyBonus,
      streakMultiplier,
      claimedXp: finalXp,
      coinsEarned,
      newTotalXp: 2450 + finalXp,
      currentStreakDays: 14,
    };
  }

  async getUserBadges(userId: string) {
    return {
      userId,
      badges: [
        { id: 'bdg_01', title: 'Acoustic Master', description: 'Achieved >95% IPA accuracy on 50 phonemes', icon: '🗣️', earnedAt: '2026-08-01' },
        { id: 'bdg_02', title: 'Polyglot Pioneer', description: 'Completed dialogues in 3 different languages', icon: '🌐', earnedAt: '2026-07-20' },
        { id: 'bdg_03', title: 'Streak Titan', description: 'Maintained a 14-day consecutive streak', icon: '🔥', earnedAt: '2026-08-04' },
      ],
    };
  }
}
