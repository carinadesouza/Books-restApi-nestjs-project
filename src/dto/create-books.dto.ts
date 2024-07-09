import { IsString,IsNotEmpty, IsNumber } from "class-validator";

export class CreateBooksDto{
    @IsString()
    @IsNotEmpty()
    author:string;
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsNumber()
    @IsNotEmpty()
    publicationYear:number;

}