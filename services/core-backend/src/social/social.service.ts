import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialService {
  async getFriendsList(userId: string) {
    return {
      userId,
      friends: [
        { id: 'frn_01', name: 'Sofia Rodriguez', nativeLang: 'es-ES', targetLang: 'en-US', isOnline: true },
        { id: 'frn_02', name: 'Kenji Sato', nativeLang: 'ja-JP', targetLang: 'en-US', isOnline: false },
      ],
    };
  }

  async getActiveStudyRooms() {
    return {
      rooms: [
        {
          id: 'room_101',
          title: 'Spanish B1 Conversational Coffee Club',
          targetLanguage: 'es-ES',
          participantCount: 4,
          maxParticipants: 8,
          hostName: 'Sophia (AI Tutor)',
        },
        {
          id: 'room_102',
          title: 'French Business Vocabulary Exchange',
          targetLanguage: 'fr-FR',
          participantCount: 3,
          maxParticipants: 6,
          hostName: 'Jean-Luc',
        },
      ],
    };
  }
}
