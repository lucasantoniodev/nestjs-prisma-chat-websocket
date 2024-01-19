import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { AuthorResponseDto } from './models/response/author.response.model';
import { AuthorRequestDto } from './models/request/author.request.model';
import { setTimeout } from 'timers/promises';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: AuthorRequestDto): Promise<AuthorResponseDto> {
    await setTimeout(1000, '');
    return this.prisma.author.create({
      data: {
        name: data.name,
        email: data.email,
        age: Number(data.age),
      },
      include: { books: true },
    });
  }

  async getAll(includeBooks: Boolean): Promise<AuthorResponseDto[]> {
    const includeOption = includeBooks ? { books: true } : {};
    return this.prisma.author.findMany({
      include: includeOption,
    });
  }

  async getById(id: number): Promise<AuthorResponseDto> {
    return this.prisma.author.findUnique({
      where: { id },
      include: { books: true },
    });
  }

  async delete(id: number) {
    return this.prisma.author.delete({
      where: { id },
      include: { books: true },
    });
  }
}
