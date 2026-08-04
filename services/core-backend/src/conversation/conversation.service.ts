import { Injectable } from '@nestjs/common';

export interface StartSessionDto {
  userId: string;
  personaId: string;
  targetLanguage: string;
  cefrLevel: string;
  topic: string;
}

@Injectable()
export class ConversationService {
  private activeSessions = new Map<string, any>();

  async startSession(dto: StartSessionDto) {
    const sessionId = `sess_${Math.random().toString(36).substring(7)}`;
    const sessionData = {
      sessionId,
      ...dto,
      startedAt: new Date().toISOString(),
      messages: [],
    };

    this.activeSessions.set(sessionId, sessionData);
    return sessionData;
  }

  async processUserAudioChunk(sessionId: string, audioChunkBase64: string) {
    const session = this.activeSessions.get(sessionId);
    if (!session) return { status: 'error', message: 'Session not found' };

    // Simulated STT + AI LLM dialogue generation turn
    const aiResponseText = '¡Perfecto! Te he entendido claramente.';
    const audioResponseUrl = `http://localhost:8000/api/v1/audio/tts_${Date.now()}.mp3`;

    return {
      status: 'success',
      sessionId,
      aiText: aiResponseText,
      audioUrl: audioResponseUrl,
      latencyMs: 210,
    };
  }
}
