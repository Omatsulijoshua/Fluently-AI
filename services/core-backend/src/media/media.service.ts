import { Injectable } from '@nestjs/common';

export interface ImportMediaDto {
  userId: string;
  sourceType: 'PDF' | 'URL' | 'YOUTUBE' | 'TEXT';
  contentPayload: string;
}

@Injectable()
export class MediaService {
  async importMedia(dto: ImportMediaDto) {
    return {
      mediaId: `med_${Math.random().toString(36).substring(7)}`,
      userId: dto.userId,
      sourceType: dto.sourceType,
      title: 'Imported Article - Science & Medicine',
      overallCefrLevel: 'B2',
      sentenceCount: 14,
      extractedVocabulary: [
        { term: 'penicilina', meaning: 'penicillin', cefr: 'B2' },
        { term: 'incansablemente', meaning: 'tirelessly', cefr: 'C1' },
      ],
      createdAt: new Date().toISOString(),
    };
  }

  async createShadowingSession(mediaId: string) {
    return {
      mediaId,
      audioUrl: 'http://localhost:8000/api/v1/audio/shadowing_sample.mp3',
      tempo: 1.0,
      segments: [
        { startMs: 0, endMs: 2400, text: 'El descubrimiento de la penicilina' },
        { startMs: 2400, endMs: 4800, text: 'cambió el rumbo de la medicina moderna.' },
      ],
    };
  }
}
