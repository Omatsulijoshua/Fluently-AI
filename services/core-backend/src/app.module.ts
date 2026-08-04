import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { ConversationModule } from './conversation/conversation.module';
import { PronunciationModule } from './pronunciation/pronunciation.module';
import { GrammarModule } from './grammar/grammar.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { MediaModule } from './media/media.module';
import { WritingModule } from './writing/writing.module';
import { MemoryModule } from './memory/memory.module';
import { GamificationModule } from './gamification/gamification.module';
import { SocialModule } from './social/social.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentModule } from './parent/parent.module';
import { SchoolModule } from './school/school.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { AdminModule } from './admin/admin.module';
import { PaymentsModule } from './payments/payments.module';
import { TelemetryModule } from './telemetry/telemetry.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env', '.env'],
    }),
    HealthModule,
    AuthModule,
    ConversationModule,
    PronunciationModule,
    GrammarModule,
    VocabularyModule,
    MediaModule,
    WritingModule,
    MemoryModule,
    GamificationModule,
    SocialModule,
    TeacherModule,
    ParentModule,
    SchoolModule,
    EnterpriseModule,
    AdminModule,
    PaymentsModule,
    TelemetryModule,
  ],
})
export class AppModule {}
