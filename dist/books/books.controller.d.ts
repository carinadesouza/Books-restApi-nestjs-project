import { BooksService } from './books.service';
import { Prisma } from '@prisma/client';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: Prisma.BooksCreateInput): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateBookDto: Prisma.BooksUpdateInput): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
