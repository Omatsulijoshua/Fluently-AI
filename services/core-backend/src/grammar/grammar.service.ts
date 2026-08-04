import { Injectable } from '@nestjs/common';

export interface AnalyzeGrammarDto {
  userId: string;
  phrase: string;
  targetLanguage: string;
}

@Injectable()
export class GrammarService {
  async analyzeGrammar(dto: AnalyzeGrammarDto) {
    const hasError = dto.phrase.toLowerCase().includes('fui a el') || dto.phrase.toLowerCase().includes('he go');
    const corrected = dto.phrase.replace(/fui a el/gi, 'fui al').replace(/he go/gi, 'he goes');

    return {
      userId: dto.userId,
      originalPhrase: dto.phrase,
      hasError,
      correctedPhrase: hasError ? corrected : dto.phrase,
      ruleApplied: hasError ? 'Preposition + Article Contraction Rule' : 'Syntax Correct',
      explanation: 'In Spanish, "a + el" contracts into "al".',
      variations: {
        formal: `Estimado señor, ${corrected}`,
        informal: `Oye, ${corrected}`,
        native: `De una: ${corrected}`,
        business: `En atención a lo expuesto, ${corrected}`,
      },
    };
  }

  async generateQuiz(rule: string, targetLanguage: string) {
    return {
      rule,
      targetLanguage,
      question: 'Complete the sentence with correct grammar:',
      options: ['Ayer fui ___ mercado', 'al', 'a el', 'en el'],
      correctIndex: 1,
      explanation: 'Preposition "a" and article "el" combine into "al".',
    };
  }
}
