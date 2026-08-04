import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { PronunciationService, AnalyzePronunciationDto } from './pronunciation.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Pronunciation & Acoustic Analysis')
@Controller('api/v1/pronunciation')
export class PronunciationController {
  constructor(private readonly pronunciationService: PronunciationService) {}

  @Post('analyze')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Analyze learner spoken audio for IPA accuracy & pitch intonation' })
  @ApiResponse({ status: 200, description: 'Phoneme breakdown & acoustic scores computed' })
  analyze(@Body() dto: AnalyzePronunciationDto) {
    return this.pronunciationService.analyzePronunciation(dto);
  }
}
