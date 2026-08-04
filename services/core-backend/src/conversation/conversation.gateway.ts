import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { ConversationService } from './conversation.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'conversation',
})
export class ConversationGateway {
  @WebSocketServer()
  server: any;

  constructor(private readonly conversationService: ConversationService) {}

  @SubscribeMessage('start_session')
  async handleStartSession(@MessageBody() data: any, @ConnectedSocket() client: any) {
    const session = await this.conversationService.startSession(data);
    client.emit('session_started', session);
  }

  @SubscribeMessage('audio_chunk')
  async handleAudioChunk(@MessageBody() data: { sessionId: string; audioChunk: string }, @ConnectedSocket() client: any) {
    const response = await this.conversationService.processUserAudioChunk(data.sessionId, data.audioChunk);
    client.emit('ai_response', response);
  }
}
