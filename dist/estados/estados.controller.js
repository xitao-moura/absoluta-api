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
var EstadosController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadosController = void 0;
const common_1 = require("@nestjs/common");
const create_estados_dto_1 = require("./dtos/create-estados.dto");
const update_estados_dto_1 = require("./dtos/update-estados.dto");
const estados_service_1 = require("./estados.service");
let EstadosController = EstadosController_1 = class EstadosController {
    constructor(estadosService) {
        this.estadosService = estadosService;
        this.logger = new common_1.Logger(EstadosController_1.name);
    }
    async criarEstado(createEstadoDto) {
        return await this.estadosService.criarEstado(createEstadoDto);
    }
    async consultarEstado() {
        return await this.estadosService.consultarTodosEstado();
    }
    async consultarEstadoKey(_id) {
        return await this.estadosService.consultarEstadoKey(_id);
    }
    async atualizarEstado(updateEstadoDto, _id) {
        this.logger.log(`updateEstadoDto: ${JSON.stringify(updateEstadoDto)}`);
        await this.estadosService.atualizarEstado(_id, updateEstadoDto);
    }
    async deletarEstado(_id) {
        this.estadosService.deletarEstado(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estados_dto_1.CreateEstadoDto]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "criarEstado", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "consultarEstado", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "consultarEstadoKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_estados_dto_1.UpdateEstadoDto, String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "atualizarEstado", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EstadosController.prototype, "deletarEstado", null);
EstadosController = EstadosController_1 = __decorate([
    common_1.Controller('v1/estados'),
    __metadata("design:paramtypes", [estados_service_1.EstadosService])
], EstadosController);
exports.EstadosController = EstadosController;
//# sourceMappingURL=estados.controller.js.map