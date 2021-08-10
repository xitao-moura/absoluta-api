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
exports.CreateCampanhaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const status_interface_1 = require("../../status/interfaces/status.interface");
class CreateCampanhaDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "nome", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "mensagem", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCampanhaDto.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateCampanhaDto.prototype, "data_inicio", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateCampanhaDto.prototype, "data_final", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateCampanhaDto.prototype, "horarios", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CreateCampanhaDto.prototype, "indicacoes", void 0);
exports.CreateCampanhaDto = CreateCampanhaDto;
//# sourceMappingURL=create-campanhas.dto.js.map