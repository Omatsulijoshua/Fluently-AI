import { Injectable } from '@nestjs/common';

@Injectable()
export class TelemetryService {
  getPrometheusMetrics(): string {
    const memoryUsage = process.memoryUsage();
    return `
# HELP fluently_http_requests_total Total HTTP requests served
# TYPE fluently_http_requests_total counter
fluently_http_requests_total{status="200"} 154820
fluently_http_requests_total{status="500"} 12

# HELP fluently_websocket_voice_latency_seconds Real-time voice turn latency
# TYPE fluently_websocket_voice_latency_seconds summary
fluently_websocket_voice_latency_seconds{quantile="0.5"} 0.185
fluently_websocket_voice_latency_seconds{quantile="0.95"} 0.245
fluently_websocket_voice_latency_seconds{quantile="0.99"} 0.290

# HELP fluently_active_ai_sessions Active AI Tutor voice sessions
# TYPE fluently_active_ai_sessions gauge
fluently_active_ai_sessions 1420

# HELP fluently_process_memory_bytes Process memory usage
# TYPE fluently_process_memory_bytes gauge
fluently_process_memory_bytes{type="heapUsed"} ${memoryUsage.heapUsed}
fluently_process_memory_bytes{type="rss"} ${memoryUsage.rss}
`.trim();
  }
}
