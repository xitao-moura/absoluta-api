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
exports.Encaminhamento = void 0;
const tipos_entity_1 = require("../../tipos/interfaces/tipos.entity");
const user_entity_1 = require("../../users/interfaces/user.entity");
const typeorm_1 = require("typeorm");
let Encaminhamento = class Encaminhamento extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int"
    }),
    __metadata("design:type", Number)
], Encaminhamento.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Encaminhamento.prototype, "retorno", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Encaminhamento.prototype, "tipo_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Encaminhamento.prototype, "usuario_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Encaminhamento.prototype, "indicacao_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Encaminhamento.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Encaminhamento.prototype, "modified", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipos_entity_1.Tipos),
    typeorm_1.JoinColumn({ name: 'tipo_id', referencedColumnName: 'id' }),
    __metadata("design:type", tipos_entity_1.Tipos)
], Encaminhamento.prototype, "tipo", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.Users),
    typeorm_1.JoinColumn({ name: 'usuario_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.Users)
], Encaminhamento.prototype, "user", void 0);
Encaminhamento = __decorate([
    typeorm_1.Entity('encaminhamentos')
], Encaminhamento);
exports.Encaminhamento = Encaminhamento;
//# sourceMappingURL=encaminhamentos.entity.js.map