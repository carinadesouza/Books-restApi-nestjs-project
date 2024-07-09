"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const BooksData_1 = require("./BooksData");
const common_2 = require("@nestjs/common");
let BooksService = class BooksService {
    getAllBooks() {
        return BooksData_1.books;
    }
    findById(bookId) {
        const book = BooksData_1.books.find((book) => book.id === bookId);
        if (!book)
            throw new common_2.NotFoundException('user not found');
        return book;
    }
    create(book) {
        const newID = BooksData_1.books[BooksData_1.books.length - 1].id + 1;
        const newBook = {
            id: newID,
            author: book.author ?? '',
            title: book.title ?? '',
            publicationYear: book.publicationYear ?? 0,
        };
        BooksData_1.books.push(newBook);
        return newBook;
    }
    update(bookID, updatedBookFields) {
        const currentBook = BooksData_1.books.find((book) => book.id === bookID);
        const updatedBook = {
            id: bookID,
            title: updatedBookFields.title ?? currentBook.title,
            author: updatedBookFields.author ?? currentBook.author,
            publicationYear: updatedBookFields.publicationYear ?? currentBook.publicationYear,
        };
        BooksData_1.books[bookID - 1] = updatedBook;
        return updatedBook;
    }
    delete(bookID) {
        BooksData_1.books.splice(bookID - 1, 1);
        return BooksData_1.books;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=app.service.js.map