import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MemoryService } from './memory.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('AI Memory & Dynamic Curriculum')
@Controller('api/v1')
export class MemoryController {
  constructor(private readonly memoryService: MemoryService) {}

  @Get('memory/query')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Semantic search over learner episodic memory graph (pgvector)' })
  queryMemory(@Req() req: any, @Query('q') query: string) {
    return this.memoryService.querySemanticMemory(req.user.id, query || 'pronunciation mistakes');
  }

  @Get('curriculum/daily')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Generate dynamic daily micro-lessons tailored to learner weaknesses' })
  getDailyCurriculum(@Req() req: any) {
    return this.memoryService.getDailyCurriculum(req.user.id);
  }
}
