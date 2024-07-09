import { Injectable } from '@nestjs/common';
import {Book ,books} from './BooksData';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
 
    const  book= books.find((book) => book.id === bookId);
    if(!book) throw new NotFoundException( 'user not found');
    return book;
  }

  create(book: CreateBooksDto): Book {
    const newID = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newID,
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };

    books.push(newBook);

    return newBook;
  }

  update(bookID: number, updatedBookFields: UpdateBookDto): Book | undefined {
    const currentBook = books.find((book) => book.id === bookID);
    const updatedBook = {
      id: bookID,
      title: updatedBookFields.title ?? currentBook.title,
      author: updatedBookFields.author ?? currentBook.author,
      publicationYear:
        updatedBookFields.publicationYear ?? currentBook.publicationYear,
    };

    books[bookID - 1] = updatedBook;

    return updatedBook;
  }

  delete(bookID: number): Book[] {
    // books = books.filter((book) => book.id !== bookID);
    books.splice(bookID - 1, 1);
    return books;
  }
  }

