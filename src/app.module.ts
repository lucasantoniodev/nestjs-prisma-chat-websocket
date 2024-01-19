import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    AuthorModule,
    BookModule,
    ChatModule,
    ThrottlerModule.forRoot([
      {
        ttl: 20000,
        limit: 200,
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
