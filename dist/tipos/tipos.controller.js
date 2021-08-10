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
var TiposController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposController = void 0;
const common_1 = require("@nestjs/common");
const create_tipos_dto_1 = require("./dtos/create-tipos.dto");
const update_tipos_dto_1 = require("./dtos/update-tipos.dto");
const tipos_service_1 = require("./tipos.service");
let TiposController = TiposController_1 = class TiposController {
    constructor(tiposService) {
        this.tiposService = tiposService;
        this.logger = new common_1.Logger(TiposController_1.name);
    }
    async criarTipo(createTipoDto) {
        return await this.tiposService.criarTipo(createTipoDto);
    }
    async consultarTipo() {
        return await this.tiposService.consultarTodosTipo();
    }
    async consultarTipoKey(_id) {
        return await this.tiposService.consultarTipoKey(_id);
    }
    async atualizarTipo(updateTipoDto, _id) {
        this.logger.log(`updateTipoDto: ${JSON.stringify(updateTipoDto)}`);
        await this.tiposService.atualizarTipo(_id, updateTipoDto);
    }
    async deletarTipo(_id) {
        this.tiposService.deletarTipo(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipos_dto_1.CreateTipoDto]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "criarTipo", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "consultarTipo", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "consultarTipoKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tipos_dto_1.UpdateTipoDto, String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "atualizarTipo", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TiposController.prototype, "deletarTipo", null);
TiposController = TiposController_1 = __decorate([
    common_1.Controller('v1/tipos'),
    __metadata("design:paramtypes", [tipos_service_1.TiposService])
], TiposController);
exports.TiposController = TiposController;
//# sourceMappingURL=tipos.controller.js.map