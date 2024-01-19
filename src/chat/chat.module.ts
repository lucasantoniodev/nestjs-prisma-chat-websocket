import { Module } from '@nestjs/common';
import { ChatGateway } from './websocket/chat.gateway';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [ChatController],
  providers: [PrismaService, ChatService, ChatGateway],
})
export class ChatModule {}
