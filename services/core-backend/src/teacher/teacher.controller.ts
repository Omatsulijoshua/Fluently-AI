import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TeacherService, CreateClassroomDto, CreateAssignmentDto } from './teacher.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Teacher Portal & Classroom Suite')
@Controller('api/v1/teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('classrooms')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new educator classroom with join code' })
  createClassroom(@Body() dto: CreateClassroomDto) {
    return this.teacherService.createClassroom(dto);
  }

  @Post('assignments')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Generate AI homework assignment with evaluation rubric' })
  generateAssignment(@Body() dto: CreateAssignmentDto) {
    return this.teacherService.generateAiAssignment(dto);
  }

  @Get('submission/evaluate/:submissionId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get automated AI evaluation report for student submission' })
  evaluateSubmission(@Param('submissionId') submissionId: string) {
    return this.teacherService.evaluateStudentSubmission(submissionId);
  }
}
