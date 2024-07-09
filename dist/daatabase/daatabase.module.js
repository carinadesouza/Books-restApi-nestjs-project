"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const daatabase_service_1 = require("./daatabase.service");
let DaatabaseModule = class DaatabaseModule {
};
exports.DaatabaseModule = DaatabaseModule;
exports.DaatabaseModule = DaatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [daatabase_service_1.DaatabaseService],
        exports: [daatabase_service_1.DaatabaseService],
    })
], DaatabaseModule);
//# sourceMappingURL=daatabase.module.js.map