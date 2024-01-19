import { AuthorResponseDto } from 'src/author/models/response/author.response.model';

export interface BookResponseDto {
  id: number;
  title: string;
  description: string;
  age: number;
  authors?: AuthorResponseDto[];
}
