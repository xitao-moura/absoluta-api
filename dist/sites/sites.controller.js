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
var SitesController_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesController = void 0;
const common_1 = require("@nestjs/common");
const create_sites_dto_1 = require("./dtos/create-sites.dto");
const update_sites_dto_1 = require("./dtos/update-sites.dto");
const sites_service_1 = require("./sites.service");
let SitesController = SitesController_1 = class SitesController {
    constructor(origensService) {
        this.origensService = origensService;
        this.logger = new common_1.Logger(SitesController_1.name);
    }
    async criarOrigem(createOrigemDto) {
        return await this.origensService.criarOrigem(createOrigemDto);
    }
    async consultarOrigem() {
        return await this.origensService.consultarTodosOrigem();
    }
    async consultarOrigemKey(_id) {
        return await this.origensService.consultarOrigemKey(_id);
    }
    async atualizarOrigem(updateOrigemDto, _id) {
        this.logger.log(`updateOrigemDto: ${JSON.stringify(updateOrigemDto)}`);
        await this.origensService.atualizarOrigem(_id, updateOrigemDto);
    }
    async deletarOrigem(_id) {
        this.origensService.deletarOrigem(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sites_dto_1.CreateSiteDto]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "criarOrigem", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "consultarOrigem", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "consultarOrigemKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_sites_dto_1.UpdateSiteDto, String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "atualizarOrigem", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SitesController.prototype, "deletarOrigem", null);
SitesController = SitesController_1 = __decorate([
    common_1.Controller('v1/sites'),
    __metadata("design:paramtypes", [typeof (_a = typeof sites_service_1.SitesService !== "undefined" && sites_service_1.SitesService) === "function" ? _a : Object])
], SitesController);
exports.SitesController = SitesController;
//# sourceMappingURL=sites.controller.js.map