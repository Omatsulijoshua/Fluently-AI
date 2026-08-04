import { Module } from '@nestjs/common';
import { ConversationGateway } from './conversation.gateway';
import { ConversationService } from './conversation.service';

@Module({
  providers: [ConversationGateway, ConversationService],
  exports: [ConversationService],
})
export class ConversationModule {}
