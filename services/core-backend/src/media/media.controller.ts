import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MediaService, ImportMediaDto } from './media.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Smart Reading & Listening Engines')
@Controller('api/v1/media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('import')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Import media (PDF, Web, YouTube) for auto CEFR parsing and vocabulary extraction' })
  importMedia(@Body() dto: ImportMediaDto) {
    return this.mediaService.importMedia(dto);
  }

  @Get('shadowing/:mediaId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get audio shadowing timestamp segments for listening practice' })
  getShadowingSession(@Param('mediaId') mediaId: string) {
    return this.mediaService.createShadowingSession(mediaId);
  }
}
