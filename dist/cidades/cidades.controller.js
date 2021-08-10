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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CidadesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadesController = void 0;
const common_1 = require("@nestjs/common");
const create_cidades_dto_1 = require("./dtos/create-cidades.dto");
const update_cidades_dto_1 = require("./dtos/update-cidades.dto");
const cidades_service_1 = require("./cidades.service");
let CidadesController = CidadesController_1 = class CidadesController {
    constructor(cidadesService) {
        this.cidadesService = cidadesService;
        this.logger = new common_1.Logger(CidadesController_1.name);
    }
    async criarCidade(createCidadeDto) {
        return await this.cidadesService.criarCidade(createCidadeDto);
    }
    async consultarCidade() {
        return await this.cidadesService.consultarTodosCidade();
    }
    async consultarCidadeKey(_id) {
        return await this.cidadesService.consultarCidadeKey(_id);
    }
    async atualizarCidade(updateCidadeDto, _id) {
        this.logger.log(`updateCidadeDto: ${JSON.stringify(updateCidadeDto)}`);
        await this.cidadesService.atualizarCidade(_id, updateCidadeDto);
    }
    async deletarCidade(_id) {
        this.cidadesService.deletarCidade(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cidades_dto_1.CreateCidadeDto]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "criarCidade", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "consultarCidade", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "consultarCidadeKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_cidades_dto_1.UpdateCidadeDto, String]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "atualizarCidade", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CidadesController.prototype, "deletarCidade", null);
CidadesController = CidadesController_1 = __decorate([
    common_1.Controller('v1/cidades'),
    __metadata("design:paramtypes", [cidades_service_1.CidadesService])
], CidadesController);
exports.CidadesController = CidadesController;
//# sourceMappingURL=cidades.controller.js.map