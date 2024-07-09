"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_books_dto_1 = require("./create-books.dto");
class UpdateBookDto extends (0, mapped_types_1.PartialType)(create_books_dto_1.CreateBooksDto) {
}
exports.UpdateBookDto = UpdateBookDto;
//# sourceMappingURL=update-books.dto.js.map