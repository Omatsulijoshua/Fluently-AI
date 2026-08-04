import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { SchoolService, AllocateSeatsDto } from './school.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('School Management Portal')
@Controller('api/v1/school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get('institutions/:schoolId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get district institution details, active seats, and compliance status' })
  getInstitution(@Param('schoolId') schoolId: string) {
    return this.schoolService.getInstitutionDetails(schoolId);
  }

  @Post('seats')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Allocate additional student and teacher license seats to school district' })
  allocateSeats(@Body() dto: AllocateSeatsDto) {
    return this.schoolService.allocateSeats(dto);
  }
}
