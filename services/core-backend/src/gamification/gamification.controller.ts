import { Controller, Post, Body, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { GamificationService, ClaimXpDto } from './gamification.service';
import { LeaderboardService } from './leaderboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Gamification Engine & Leaderboards')
@Controller('api/v1/gamification')
export class GamificationController {
  constructor(
    private readonly gamificationService: GamificationService,
    private readonly leaderboardService: LeaderboardService,
  ) {}

  @Post('claim-xp')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Claim activity XP with streak multipliers and accuracy bonuses' })
  claimXp(@Body() dto: ClaimXpDto) {
    return this.gamificationService.claimXp(dto);
  }

  @Get('badges')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user earned achievement badges and trophies' })
  getBadges(@Req() req: any) {
    return this.gamificationService.getUserBadges(req.user.id);
  }

  @Get('leaderboard')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get weekly division leaderboard rankings' })
  getLeaderboard(@Query('division') division: string) {
    return this.leaderboardService.getWeeklyLeaderboard(division || 'Diamond');
  }
}
