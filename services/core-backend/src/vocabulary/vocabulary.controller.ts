import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VocabularyService, ReviewLogDto } from './vocabulary.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Vocabulary Engine & SRS')
@Controller('api/v1/vocabulary')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get('review-queue')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get due Spaced Repetition (SRS) vocabulary review cards' })
  @ApiResponse({ status: 200, description: 'List of due vocabulary cards with retrievability scores' })
  getReviewQueue(@Req() req: any) {
    return this.vocabularyService.getReviewQueue(req.user.id);
  }

  @Post('review-log')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Record vocabulary review recall attempt and update HLR half-life' })
  recordReviewLog(@Body() dto: ReviewLogDto) {
    return this.vocabularyService.recordReviewLog(dto);
  }
}
