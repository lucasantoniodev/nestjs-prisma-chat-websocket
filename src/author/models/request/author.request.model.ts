import { BookRequestDto } from 'src/book/models/request/book.request.model';

export interface AuthorRequestDto {
  name: string;
  email: string;
  age: number;
  books?: BookRequestDto[];
}
