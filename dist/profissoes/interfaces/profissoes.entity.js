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
exports.Profissoes = void 0;
const typeorm_1 = require("typeorm");
const indicacoes_entity_1 = require("../../indicacoes/interfaces/indicacoes.entity");
let Profissoes = class Profissoes extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int"
    }),
    __metadata("design:type", Number)
], Profissoes.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Profissoes.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Profissoes.prototype, "status_id", void 0);
__decorate([
    typeorm_1.OneToMany(type => indicacoes_entity_1.Indicacao, indicacao => indicacao.profissao),
    __metadata("design:type", Array)
], Profissoes.prototype, "indicacao", void 0);
Profissoes = __decorate([
    typeorm_1.Entity('profissoes')
], Profissoes);
exports.Profissoes = Profissoes;
//# sourceMappingURL=profissoes.entity.js.map