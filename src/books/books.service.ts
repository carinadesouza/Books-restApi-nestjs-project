import { Injectable } from '@nestjs/common';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { Prisma } from '@prisma/client';
import { DaatabaseService } from 'src/daatabase/daatabase.service';
@Injectable()
export class BooksService {
  constructor(private readonly databaseService:DaatabaseService){}
 async create(createBookDto: Prisma.BooksCreateInput) {
    return this.databaseService.books.create({
data:createBookDto
    })
  }

  async findAll() {
    return  this.databaseService.books.findMany() }

  async findOne(id: number) {
    return  this.databaseService.books.findUnique({
      where:{
        id,
      }
  })
  }

  async update(id: number, updateBookDto: Prisma.BooksUpdateInput) {
    return  this.databaseService.books.update({
      where:{
        id,
      },
      data:updateBookDto,
    })
  }

  async remove(id: number) {
    return  this.databaseService.books.delete({
      where:{
        id,
      }
  })
  }
}
