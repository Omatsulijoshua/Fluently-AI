import { Controller, Post, Body, Query, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { GrammarService, AnalyzeGrammarDto } from './grammar.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Grammar Coach Engine')
@Controller('api/v1/grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Post('analyze')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Analyze phrase for grammar errors & generate register variations' })
  @ApiResponse({ status: 200, description: 'Grammar analysis & register variants generated' })
  analyze(@Body() dto: AnalyzeGrammarDto) {
    return this.grammarService.analyzeGrammar(dto);
  }

  @Get('quiz')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Generate targeted micro-quiz for grammar rule reinforcement' })
  generateQuiz(@Query('rule') rule: string, @Query('targetLanguage') targetLanguage: string) {
    return this.grammarService.generateQuiz(rule || 'Contraction Rule', targetLanguage || 'Spanish');
  }
}
