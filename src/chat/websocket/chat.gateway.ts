import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from '../chat.service';
import { MessageRequestModelDto } from '../models/request/message.request.model';

@WebSocketGateway(3333, { cors: true })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  async handleMessage(
    client: Socket,
    payload: MessageRequestModelDto,
  ): Promise<void> {
    const response = await this.chatService.create(payload);
    this.server.emit('msgToClient', response, client.id);
  }

  handleDisconnect(client: Socket) {
    this.logger.log('Client disconnected: ' + client.id);
  }
  handleConnection(client: Socket) {
    this.logger.log('Client connected: ' + client.id);
  }
  afterInit(server: Server) {
    this.logger.log('Server has started.');
  }
}
