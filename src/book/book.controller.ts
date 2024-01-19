import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { BookModel } from './models/book.model';
import { BookService } from './book.service';
import { Request, Response } from 'express';
import { BookRequestDto } from './models/request/book.request.model';
import { BookResponseDto } from './models/response/book.response.model';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller('api/v1/books/')
export class BookCrontroller {
  constructor(private readonly bookService: BookService) {}

  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @Get()
  async getAll(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    return response.status(200).json({
      status: 'OK',
      message: 'Sucessfully fetch data!',
      result: await this.bookService.getAllBook(),
    });
  }

  @SkipThrottle({ default: false })
  @Post()
  async create(@Body() data: BookRequestDto): Promise<BookResponseDto> {
    return this.bookService.create(data);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<BookResponseDto> {
    return this.bookService.getBookById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<BookResponseDto> {
    return this.bookService.deleteBook(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: BookModel,
  ): Promise<BookResponseDto> {
    return this.bookService.updateBook(id, data);
  }
}
