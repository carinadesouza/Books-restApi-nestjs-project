"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const daatabase_service_1 = require("../daatabase/daatabase.service");
let BooksService = class BooksService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createBookDto) {
        return this.databaseService.books.create({
            data: createBookDto
        });
    }
    async findAll() {
        return this.databaseService.books.findMany();
    }
    async findOne(id) {
        return this.databaseService.books.findUnique({
            where: {
                id,
            }
        });
    }
    async update(id, updateBookDto) {
        return this.databaseService.books.update({
            where: {
                id,
            },
            data: updateBookDto,
        });
    }
    async remove(id) {
        return this.databaseService.books.delete({
            where: {
                id,
            }
        });
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [daatabase_service_1.DaatabaseService])
], BooksService);
//# sourceMappingURL=books.service.js.map