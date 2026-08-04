import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { WritingService, EvaluateWritingDto } from './writing.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('AI Writing Coach')
@Controller('api/v1/writing')
export class WritingController {
  constructor(private readonly writingService: WritingService) {}

  @Post('evaluate')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Evaluate essay/email composition for grammar, tone, and native flow' })
  @ApiResponse({ status: 200, description: 'Composition scores and native rewrites returned' })
  evaluate(@Body() dto: EvaluateWritingDto) {
    return this.writingService.evaluateWriting(dto);
  }
}
