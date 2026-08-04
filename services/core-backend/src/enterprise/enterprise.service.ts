import { Injectable } from '@nestjs/common';

export interface CreateCustomTrackDto {
  companyId: string;
  trackName: string;
  targetLanguage: string;
  terms: string[];
}

@Injectable()
export class EnterpriseService {
  async getCompanyOverview(companyId: string) {
    return {
      companyId,
      name: 'Acme Global Corp',
      domain: 'acmeglobal.com',
      ssoEnabled: true,
      ssoProvider: 'Okta SAML 2.0',
      totalLicenses: 500,
      activeEmployees: 485,
      activeCustomTracks: [
        { id: 'trk_01', name: 'Business English Negotiations', termsCount: 140 },
        { id: 'trk_02', name: 'Medical Spanish Terminology', termsCount: 95 },
        { id: 'trk_03', name: 'Aviation French Commands', termsCount: 80 },
      ],
    };
  }

  async createCustomVocabTrack(dto: CreateCustomTrackDto) {
    return {
      trackId: `trk_${Math.random().toString(36).substring(7)}`,
      companyId: dto.companyId,
      trackName: dto.trackName,
      targetLanguage: dto.targetLanguage,
      termsCount: dto.terms.length,
      createdAt: new Date().toISOString(),
    };
  }
}
