import { Module } from '@nestjs/common';
import { BookCrontroller } from './book.controller';
import { BookService } from './book.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [BookCrontroller],
  providers: [BookService, PrismaService],
})
export class BookModule {}
