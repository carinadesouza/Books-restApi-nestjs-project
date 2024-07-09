import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DaatabaseModule } from 'src/daatabase/daatabase.module';

@Module({
  imports:[DaatabaseModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
