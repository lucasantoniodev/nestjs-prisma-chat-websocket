import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { MessageRequestModelDto } from './models/request/message.request.model';
import { MessageResponseModelDto } from './models/response/message.response.model';

@Injectable()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: MessageRequestModelDto): Promise<MessageResponseModelDto> {
    return this.prismaService.message.create({ data });
  }

  async findAll(): Promise<MessageResponseModelDto[]> {
    return this.prismaService.message.findMany();
  }

  async countMessages(): Promise<number> {
    return this.prismaService.message.count();
  }

  async deleteAll(): Promise<{ count: number }> {
    return this.prismaService.message.deleteMany();
  }
}
