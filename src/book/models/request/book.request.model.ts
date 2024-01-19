import { AuthorRequestDto } from 'src/author/models/request/author.request.model';

export interface BookRequestDto {
  title: string;
  description: string;
  age: number;
  authors: AuthorRequestDto[];
}
