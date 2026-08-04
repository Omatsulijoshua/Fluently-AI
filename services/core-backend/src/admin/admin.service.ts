import { Injectable } from '@nestjs/common';

export interface UpdateLlmConfigDto {
  activeProvider: 'openai' | 'anthropic' | 'gemini' | 'deepseek';
  temperature: number;
}

@Injectable()
export class AdminService {
  private currentLlmConfig = {
    activeProvider: 'openai',
    temperature: 0.7,
  };

  private featureFlags = {
    ipa3dAnimation: true,
    realtimeWebsocketsVoice: true,
    emergencyRateLimiter: false,
  };

  async getLlmConfig() {
    return this.currentLlmConfig;
  }

  async updateLlmConfig(dto: UpdateLlmConfigDto) {
    this.currentLlmConfig = {
      activeProvider: dto.activeProvider,
      temperature: dto.temperature,
    };
    return {
      status: 'updated',
      config: this.currentLlmConfig,
      timestamp: new Date().toISOString(),
    };
  }

  async getFeatureFlags() {
    return this.featureFlags;
  }

  async getSystemAuditLogs() {
    return {
      logs: [
        { id: 'log_01', timestamp: '2026-08-04T22:30:00Z', action: 'LLM_PROVIDER_SWITCH', actor: 'superadmin@fluently.ai', details: 'Switched default router to Google Gemini 1.5' },
        { id: 'log_02', timestamp: '2026-08-04T21:15:00Z', action: 'RBAC_SECURITY_EVENT', actor: 'system_guard', details: 'Blocked unauthorized access attempt to /api/v1/admin/sys-config' },
      ],
    };
  }
}
