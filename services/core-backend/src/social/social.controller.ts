import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MatchingService, MatchQueryDto } from './matching.service';
import { SocialService } from './social.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Social & Language Exchange')
@Controller('api/v1/social')
export class SocialController {
  constructor(
    private readonly matchingService: MatchingService,
    private readonly socialService: SocialService,
  ) {}

  @Post('match')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Find complementary native speaker partners for language exchange' })
  findMatches(@Body() dto: MatchQueryDto) {
    return this.matchingService.findNativeMatches(dto);
  }

  @Get('friends')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get list of connected language exchange friends' })
  getFriends(@Req() req: any) {
    return this.socialService.getFriendsList(req.user.id);
  }

  @Get('study-rooms')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get live peer study rooms and language exchange channels' })
  getStudyRooms() {
    return this.socialService.getActiveStudyRooms();
  }
}
