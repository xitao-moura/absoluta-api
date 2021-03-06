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
exports.Indicacao = void 0;
const typeorm_1 = require("typeorm");
const status_entity_1 = require("../../status/interfaces/status.entity");
const tipos_entity_1 = require("../../tipos/interfaces/tipos.entity");
const origens_entity_1 = require("../../origens/interfaces/origens.entity");
const profissoes_entity_1 = require("../../profissoes/interfaces/profissoes.entity");
const encaminhamentos_entity_1 = require("../../encaminhamentos/interfaces/encaminhamentos.entity");
let Indicacao = class Indicacao extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "status_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "tipo_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "indicacao_tipo_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "site_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "profissao_id", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "editar", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "qualidade", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "segmento", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "ddd_telefone2", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "telefone2", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "ddd_telefone3", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "telefone3", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone4", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone5", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone6", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone7", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone8", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone9", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "telefone10", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email2", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email3", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email4", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email5", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email6", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email7", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "email8", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "ddd_telefone", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "ddd_celular", void 0);
__decorate([
    typeorm_1.Column({
        type: "bit"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "celular", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "tel_original", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "cel_original", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "operadora_cel", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "idade", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Indicacao.prototype, "data_nascimento", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Indicacao.prototype, "data_nascimento2", void 0);
__decorate([
    typeorm_1.Column({
        type: "double",
        precision: 10,
        scale: 2,
        default: 0
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "valor_minimo", void 0);
__decorate([
    typeorm_1.Column({
        type: "double",
        precision: 10,
        scale: 2,
        default: 0
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "valor_maximo", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "acomodacao", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "outra_profissao", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "por_telefone", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "message", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "msg_contato", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_1", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_2", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_3", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_4", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_5", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_6", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_7", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_8", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_9", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_10", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_11", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "dependente_12", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "edicao", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "origem_original", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "base_original", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 255
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "status_original", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "id_importacao", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Indicacao.prototype, "mensagem", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "copy", void 0);
__decorate([
    typeorm_1.Column({
        type: "int"
    }),
    __metadata("design:type", Number)
], Indicacao.prototype, "atualizado", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Indicacao.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", Date)
], Indicacao.prototype, "modified", void 0);
__decorate([
    typeorm_1.ManyToOne(type => status_entity_1.Status),
    typeorm_1.JoinColumn({ name: 'status_id', referencedColumnName: 'id' }),
    __metadata("design:type", status_entity_1.Status)
], Indicacao.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipos_entity_1.Tipos),
    typeorm_1.JoinColumn({ name: 'tipo_id', referencedColumnName: 'id' }),
    __metadata("design:type", tipos_entity_1.Tipos)
], Indicacao.prototype, "tipo", void 0);
__decorate([
    typeorm_1.ManyToOne(type => origens_entity_1.Origens),
    typeorm_1.JoinColumn({ name: 'site_id', referencedColumnName: 'id' }),
    __metadata("design:type", origens_entity_1.Origens)
], Indicacao.prototype, "origem", void 0);
__decorate([
    typeorm_1.ManyToOne(type => profissoes_entity_1.Profissoes),
    typeorm_1.JoinColumn({ name: 'profissao_id', referencedColumnName: 'id' }),
    __metadata("design:type", profissoes_entity_1.Profissoes)
], Indicacao.prototype, "profissao", void 0);
Indicacao = __decorate([
    typeorm_1.Entity('indicacoes')
], Indicacao);
exports.Indicacao = Indicacao;
//# sourceMappingURL=indicacoes.entity.js.map