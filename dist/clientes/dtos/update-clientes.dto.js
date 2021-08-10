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
exports.UpdateClienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateClienteDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "nome", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "sexo", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateClienteDto.prototype, "tipo_pessoa", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "tipo_cliente", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "master_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateClienteDto.prototype, "rg", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateClienteDto.prototype, "cpf", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateClienteDto.prototype, "cnpj", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], UpdateClienteDto.prototype, "inscricao", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], UpdateClienteDto.prototype, "data_nascimento", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UpdateClienteDto.prototype, "profissao", void 0);
exports.UpdateClienteDto = UpdateClienteDto;
//# sourceMappingURL=update-clientes.dto.js.map