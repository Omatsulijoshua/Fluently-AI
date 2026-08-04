import { Module } from '@nestjs/common';
import { SocialController } from './social.controller';
import { MatchingService } from './matching.service';
import { SocialService } from './social.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [SocialController],
  providers: [MatchingService, SocialService],
  exports: [MatchingService, SocialService],
})
export class SocialModule {}
