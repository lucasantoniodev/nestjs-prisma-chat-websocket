import { BookResponseDto } from 'src/book/models/response/book.response.model';

export interface AuthorResponseDto {
  id: number;
  name: string;
  email: string;
  age: number;
  books?: BookResponseDto[];
}
