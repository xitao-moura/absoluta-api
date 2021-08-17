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
exports.Users = void 0;
const status_entity_1 = require("../../status/interfaces/status.entity");
const tipos_entity_1 = require("../../tipos/interfaces/tipos.entity");
const typeorm_1 = require("typeorm");
let Users = class Users extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int"
    }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Users.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Users.prototype, "senha", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Users.prototype, "tipo_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Users.prototype, "status_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Users.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Users.prototype, "modified", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Users.prototype, "gestor", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipos_entity_1.Tipos),
    typeorm_1.JoinColumn({ name: 'tipo_id', referencedColumnName: 'id' }),
    __metadata("design:type", tipos_entity_1.Tipos)
], Users.prototype, "tipo", void 0);
__decorate([
    typeorm_1.ManyToOne(type => status_entity_1.Status),
    typeorm_1.JoinColumn({ name: 'status_id', referencedColumnName: 'id' }),
    __metadata("design:type", status_entity_1.Status)
], Users.prototype, "status", void 0);
Users = __decorate([
    typeorm_1.Entity('usuarios')
], Users);
exports.Users = Users;
//# sourceMappingURL=user.entity.js.map