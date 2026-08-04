import { Injectable } from '@nestjs/common';

export interface EvaluateWritingDto {
  userId: string;
  text: string;
  context: 'BUSINESS_EMAIL' | 'ACADEMIC_ESSAY' | 'CREATIVE_STORY' | 'DAILY_JOURNAL';
  targetLanguage: string;
}

@Injectable()
export class WritingService {
  async evaluateWriting(dto: EvaluateWritingDto) {
    const wordCount = dto.text.split(/\s+/).length;
    return {
      userId: dto.userId,
      context: dto.context,
      wordCount,
      grammarScore: 92.0,
      styleScore: 88.5,
      coherenceScore: 90.0,
      overallBand: 'B2 - Upper Intermediate',
      nativeRewrite: `Estimado equipo, les presento la propuesta revisada. (${dto.text})`,
      corrections: [
        {
          original: 'quiero decir que',
          suggestion: 'quisiera destacar que',
          explanation: 'Elevates tone for business context.',
        },
      ],
      timestamp: new Date().toISOString(),
    };
  }
}
