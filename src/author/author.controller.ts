import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooleanQueryPipeCustom } from 'src/common/pipes/boolean-query.pipe';
import { AuthorService } from './author.service';
import { AuthorRequestDto } from './models/request/author.request.model';
import { AuthorResponseDto } from './models/response/author.response.model';

@Controller('api/v1/authors/')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() data: AuthorRequestDto): Promise<AuthorResponseDto> {
    return this.authorService.create(data);
  }

  @Get()
  async getAll(
    @Query('includeBooks', BooleanQueryPipeCustom) includeBooks: boolean,
  ): Promise<AuthorResponseDto[]> {
    return this.authorService.getAll(includeBooks);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<AuthorResponseDto> {
    return this.authorService.getById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number): Promise<AuthorResponseDto> {
    return this.authorService.delete(id);
  }
}
