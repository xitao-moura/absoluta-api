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
var CampanhasController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampanhasController = void 0;
const common_1 = require("@nestjs/common");
const create_campanhas_dto_1 = require("./dtos/create-campanhas.dto");
const update_campanhas_dto_1 = require("./dtos/update-campanhas.dto");
const campanhas_service_1 = require("./campanhas.service");
let CampanhasController = CampanhasController_1 = class CampanhasController {
    constructor(campanhasService) {
        this.campanhasService = campanhasService;
        this.logger = new common_1.Logger(CampanhasController_1.name);
    }
    async criarCampanha(createCampanhaDto) {
        return await this.campanhasService.criarCampanha(createCampanhaDto);
    }
    async consultarCampanha() {
        return await this.campanhasService.consultarTodosCampanha();
    }
    async consultarCampanhaKey(_id) {
        return await this.campanhasService.consultarCampanhaKey(_id);
    }
    async atualizarCampanha(updateCampanhaDto, _id) {
        this.logger.log(`updateCampanhaDto: ${JSON.stringify(updateCampanhaDto)}`);
        await this.campanhasService.atualizarCampanha(_id, updateCampanhaDto);
    }
    async deletarCampanha(_id) {
        this.campanhasService.deletarCampanha(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campanhas_dto_1.CreateCampanhaDto]),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "criarCampanha", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "consultarCampanha", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "consultarCampanhaKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_campanhas_dto_1.UpdateCampanhaDto, String]),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "atualizarCampanha", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CampanhasController.prototype, "deletarCampanha", null);
CampanhasController = CampanhasController_1 = __decorate([
    common_1.Controller('v1/campanhas'),
    __metadata("design:paramtypes", [campanhas_service_1.CampanhasService])
], CampanhasController);
exports.CampanhasController = CampanhasController;
//# sourceMappingURL=campanha.controller.js.map