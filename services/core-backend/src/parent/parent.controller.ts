import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ParentService, SetScreenTimeDto } from './parent.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@ApiTags('Parent Portal & Kid Safety Controls')
@Controller('api/v1/parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Get('children')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PARENT, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get list of linked child profiles, daily time usage, and safety settings' })
  getChildren(@Req() req: any) {
    return this.parentService.getLinkedChildren(req.user.id);
  }

  @Post('screen-time')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.PARENT, UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Configure daily learning time cap and COPPA strict safety filters' })
  setScreenTime(@Body() dto: SetScreenTimeDto) {
    return this.parentService.updateScreenTime(dto);
  }
}
