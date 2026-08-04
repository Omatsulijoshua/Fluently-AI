import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Check API gateway and service health status' })
  @ApiResponse({ status: 200, description: 'Service is healthy and ready' })
  checkHealth() {
    return {
      status: 'ok',
      service: 'fluently-core-backend',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
    };
  }
}
