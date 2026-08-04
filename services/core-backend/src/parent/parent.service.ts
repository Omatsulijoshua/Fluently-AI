import { Injectable } from '@nestjs/common';

export interface SetScreenTimeDto {
  parentId: string;
  childId: string;
  dailyMinutesCap: number;
  coppaStrictFilters: boolean;
}

@Injectable()
export class ParentService {
  async getLinkedChildren(parentId: string) {
    return {
      parentId,
      children: [
        {
          childId: 'chd_101',
          name: 'Leo Miller',
          age: 10,
          targetLanguage: 'es-ES',
          level: 'A2',
          dailyMinutesCap: 30,
          todayMinutesUsed: 22,
          streakDays: 14,
          coppaStrictFilters: true,
        },
      ],
    };
  }

  async updateScreenTime(dto: SetScreenTimeDto) {
    return {
      parentId: dto.parentId,
      childId: dto.childId,
      dailyMinutesCap: dto.dailyMinutesCap,
      coppaStrictFilters: dto.coppaStrictFilters,
      updatedAt: new Date().toISOString(),
    };
  }
}
