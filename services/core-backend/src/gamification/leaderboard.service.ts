import { Injectable } from '@nestjs/common';

@Injectable()
export class LeaderboardService {
  async getWeeklyLeaderboard(division: string = 'Diamond') {
    return {
      division,
      seasonEndsInDays: 3,
      rankings: [
        { rank: 1, userId: 'usr_01', name: 'Sofia Rodriguez', xp: 4850, avatarUrl: 'https://i.pravatar.cc/150?u=1' },
        { rank: 2, userId: 'usr_02', name: 'Alex Johnson (You)', xp: 2450, avatarUrl: 'https://i.pravatar.cc/150?u=2' },
        { rank: 3, userId: 'usr_03', name: 'Kenji Sato', xp: 2310, avatarUrl: 'https://i.pravatar.cc/150?u=3' },
        { rank: 4, userId: 'usr_04', name: 'Amara Diallo', xp: 1980, avatarUrl: 'https://i.pravatar.cc/150?u=4' },
        { rank: 5, userId: 'usr_05', name: 'Lukas Weber', xp: 1750, avatarUrl: 'https://i.pravatar.cc/150?u=5' },
      ],
    };
  }
}
