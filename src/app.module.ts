import { Module } from '@nestjs/common';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { DaatabaseModule } from './daatabase/daatabase.module';
import { BooksModule } from './books/books.module';


@Module({
  imports: [DaatabaseModule, BooksModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
