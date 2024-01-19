import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/common/prisma.service';
import { ChatService } from '../chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatModule } from '../chat.module';

describe('ChatGateway', () => {
  let gateway: ChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ChatModule],
      providers: [ChatGateway],
    }).compile();

    gateway = module.get<ChatGateway>(ChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
