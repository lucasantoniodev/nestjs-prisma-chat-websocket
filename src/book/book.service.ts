import { PrismaService } from 'src/common/prisma.service';
import { BookModel } from './models/book.model';
import { Injectable } from '@nestjs/common';
import { BookRequestDto } from './models/request/book.request.model';
import { BookResponseDto } from './models/response/book.response.model';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBook(): Promise<BookResponseDto[]> {
    return this.prisma.book.findMany({ include: { authors: true } });
  }

  async getBookById(id: number): Promise<BookResponseDto | null> {
    return this.prisma.book.findUnique({
      where: {
        id: Number(id),
      },
      include: { authors: true },
    });
  }

  async create(data: BookRequestDto): Promise<BookResponseDto> {
    return this.prisma.book.create({
      data: {
        title: data.title,
        age: data.age,
        description: data.description,
      },
      include: { authors: true },
    });
  }

  async updateBook(id: number, data: BookModel): Promise<BookResponseDto> {
    return this.prisma.book.update({
      where: { id: Number(id) },
      data: {
        title: data.title,
        description: data.description,
        authors: data.authors,
      },
      include: { authors: true },
    });
  }

  async deleteBook(id: number): Promise<BookResponseDto> {
    return this.prisma.book.delete({
      where: { id: Number(id) },
      include: { authors: true },
    });
  }
}
