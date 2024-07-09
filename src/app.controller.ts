import { Body, Controller, Delete, Get, Param, Post, Put,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './BooksData';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}


  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }
  

  @Get('getById/:id')
  getBookById(@Param('id', ParseIntPipe ) id: number): Book | undefined {
    const bookID = id;
    return this.booksService.findById(bookID);
  }

  @Post()
  addBook(@Body(ValidationPipe) book: CreateBooksDto): Book | undefined {
    const bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;

    return this.booksService.create(bookData);
  }

  @Put(':id')
  updateBook(
    @Param('id',ParseIntPipe) id: number,
    @Body(ValidationPipe) book: UpdateBookDto,
  ): Book | undefined {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  deleteBook(@Param('id',ParseIntPipe) id: number): Book[] {
    return this.booksService.delete(id);
  }
  }


