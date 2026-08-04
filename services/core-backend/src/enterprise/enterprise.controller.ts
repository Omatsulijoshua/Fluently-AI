import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { EnterpriseService, CreateCustomTrackDto } from './enterprise.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Enterprise Platform & B2B Suite')
@Controller('api/v1/enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Get('organizations/:companyId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ENTERPRISE_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get enterprise corporate overview, SSO status, and employee counts' })
  getOrganization(@Param('companyId') companyId: string) {
    return this.enterpriseService.getCompanyOverview(companyId);
  }

  @Post('vocab-tracks')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ENTERPRISE_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create custom industry vocabulary track for corporate employees' })
  createVocabTrack(@Body() dto: CreateCustomTrackDto) {
    return this.enterpriseService.createCustomVocabTrack(dto);
  }
}
