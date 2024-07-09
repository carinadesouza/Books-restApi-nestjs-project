"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const books_controller_1 = require("./books.controller");
const books_service_1 = require("./books.service");
describe('BooksController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [books_controller_1.BooksController],
            providers: [books_service_1.BooksService],
        }).compile();
        controller = module.get(books_controller_1.BooksController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=books.controller.spec.js.map