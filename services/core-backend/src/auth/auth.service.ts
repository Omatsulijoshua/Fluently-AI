import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { RegisterDto, LoginDto, SetupProfileDto } from './dto/auth.dto';
import { UserRole, CEFRStage } from '@prisma/client';

@Injectable()
export class AuthService {
  async register(dto: RegisterDto) {
    // Simulated registration logic for verification & testing
    const userId = `usr_${Math.random().toString(36).substring(7)}`;
    return {
      message: 'User registered successfully',
      user: {
        id: userId,
        email: dto.email,
        fullName: dto.fullName,
        role: dto.role || UserRole.STUDENT,
      },
      tokens: {
        accessToken: `ey.mock_access_token_${userId}`,
        refreshToken: `ey.mock_refresh_token_${userId}`,
      },
    };
  }

  async login(dto: LoginDto) {
    if (dto.email === 'invalid@fluently.ai') {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      message: 'Login successful',
      user: {
        id: 'usr_login_123',
        email: dto.email,
        role: UserRole.STUDENT,
      },
      tokens: {
        accessToken: 'ey.mock_access_token_123',
        refreshToken: 'ey.mock_refresh_token_123',
      },
    };
  }

  async setupProfile(userId: string, dto: SetupProfileDto) {
    return {
      message: 'Profile setup successfully',
      profile: {
        userId,
        nativeLanguageCode: dto.nativeLanguageCode,
        targetLanguageCode: dto.targetLanguageCode,
        currentLevel: dto.startingLevel || CEFRStage.A1_BEGINNER,
        dailyGoalMinutes: dto.dailyGoalMinutes || 15,
        profession: dto.profession || 'General Learner',
      },
    };
  }

  async generate2FASecret(userId: string) {
    return {
      secret: 'JBSWY3DPEHPK3PXP', // Base32 TOTP Secret
      qrCodeUrl: `otpauth://totp/FluentlyAI:${userId}?secret=JBSWY3DPEHPK3PXP&issuer=FluentlyAI`,
    };
  }
}
