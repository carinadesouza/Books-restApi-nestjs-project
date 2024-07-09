import { BooksService } from './app.service';
import { Book } from './BooksData';
import { CreateBooksDto } from './dto/create-books.dto';
import { UpdateBookDto } from './dto/update-books.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Book[];
    getBookById(id: number): Book | undefined;
    addBook(book: CreateBooksDto): Book | undefined;
    updateBook(id: number, book: UpdateBookDto): Book | undefined;
    deleteBook(id: number): Book[];
}
