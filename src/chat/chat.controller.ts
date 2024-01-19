import { Controller, Delete, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async findAll() {
    return this.chatService.findAll();
  }

  @Get('/count')
  async countMessages() {
    return this.chatService.countMessages();
  }

  @Delete('/clearAll')
  async deleteAll() {
    return this.chatService.deleteAll();
  }
}
