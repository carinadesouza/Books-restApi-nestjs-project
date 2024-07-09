import { Book } from './BooksData';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';
export declare class BooksService {
    getAllBooks(): Book[];
    findById(bookId: number): Book | undefined;
    create(book: CreateBooksDto): Book;
    update(bookID: number, updatedBookFields: UpdateBookDto): Book | undefined;
    delete(bookID: number): Book[];
}
