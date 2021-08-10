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
var ProfissoesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissoesController = void 0;
const common_1 = require("@nestjs/common");
const create_profissoes_dto_1 = require("./dtos/create-profissoes.dto");
const update_profissoes_dto_1 = require("./dtos/update-profissoes.dto");
const profissoes_service_1 = require("./profissoes.service");
let ProfissoesController = ProfissoesController_1 = class ProfissoesController {
    constructor(profissoesService) {
        this.profissoesService = profissoesService;
        this.logger = new common_1.Logger(ProfissoesController_1.name);
    }
    async criarProfissao(createProfissaoDto) {
        return await this.profissoesService.criarProfissao(createProfissaoDto);
    }
    async consultarProfissao() {
        return await this.profissoesService.consultarTodosProfissao();
    }
    async consultarProfissaoKey(_id) {
        return await this.profissoesService.consultarProfissaoKey(_id);
    }
    async atualizarProfissao(updateProfissaoDto, _id) {
        this.logger.log(`updateProfissaoDto: ${JSON.stringify(updateProfissaoDto)}`);
        await this.profissoesService.atualizarProfissao(_id, updateProfissaoDto);
    }
    async deletarProfissao(_id) {
        this.profissoesService.deletarProfissao(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profissoes_dto_1.CreateProfissaoDto]),
    __metadata("design:returntype", Promise)
], ProfissoesController.prototype, "criarProfissao", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfissoesController.prototype, "consultarProfissao", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfissoesController.prototype, "consultarProfissaoKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_profissoes_dto_1.UpdateProfissaoDto, String]),
    __metadata("design:returntype", Promise)
], ProfissoesController.prototype, "atualizarProfissao", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfissoesController.prototype, "deletarProfissao", null);
ProfissoesController = ProfissoesController_1 = __decorate([
    common_1.Controller('v1/profissoes'),
    __metadata("design:paramtypes", [profissoes_service_1.ProfissoesService])
], ProfissoesController);
exports.ProfissoesController = ProfissoesController;
//# sourceMappingURL=profissoes.controller.js.map