import { Prisma } from '@prisma/client';
import { DaatabaseService } from 'src/daatabase/daatabase.service';
export declare class BooksService {
    private readonly databaseService;
    constructor(databaseService: DaatabaseService);
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
    findOne(id: number): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateBookDto: Prisma.BooksUpdateInput): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        author: string;
        title: string;
        publicationYear: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
