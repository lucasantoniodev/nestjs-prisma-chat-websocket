import { Prisma } from '@prisma/client';

export class BookModel implements Prisma.BookCreateInput {
  id: number;
  title: string;
  description?: string;
  age?: number;
  authors?: Prisma.AuthorCreateNestedManyWithoutBooksInput;
}
