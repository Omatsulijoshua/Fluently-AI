import { Controller, Get, Header } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TelemetryService } from './telemetry.service';

@ApiTags('Telemetry & Monitoring')
@Controller('api/v1/metrics')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}

  @Get('prometheus')
  @Header('Content-Type', 'text/plain; version=0.0.4')
  @ApiOperation({ summary: 'Prometheus metrics scrape endpoint for Grafana dashboard monitoring' })
  @ApiResponse({ status: 200, description: 'Prometheus formatted metrics returned' })
  getMetrics() {
    return this.telemetryService.getPrometheusMetrics();
  }
}
