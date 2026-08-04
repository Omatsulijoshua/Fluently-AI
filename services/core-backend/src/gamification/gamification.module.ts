import { Module } from '@nestjs/common';
import { GamificationController } from './gamification.controller';
import { GamificationService } from './gamification.service';
import { LeaderboardService } from './leaderboard.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [GamificationController],
  providers: [GamificationService, LeaderboardService],
  exports: [GamificationService, LeaderboardService],
})
export class GamificationModule {}
