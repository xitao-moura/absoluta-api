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
exports.Status = void 0;
const typeorm_1 = require("typeorm");
let Status = class Status extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int"
    }),
    __metadata("design:type", Number)
], Status.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Status.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Status.prototype, "grupo", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Status.prototype, "cor", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Status.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Status.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Status.prototype, "modified", void 0);
Status = __decorate([
    typeorm_1.Entity('status')
], Status);
exports.Status = Status;
//# sourceMappingURL=status.entity.js.map