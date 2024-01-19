import { Book, Prisma } from '@prisma/client';

export class AuthorModel implements Prisma.AuthorCreateInput {
  name: string;
  email?: string;
  age?: number;
  books?: Prisma.BookCreateNestedManyWithoutAuthorsInput;
}
