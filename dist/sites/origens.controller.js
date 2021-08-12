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
var OrigensController_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrigensController = void 0;
const common_1 = require("@nestjs/common");
const create_sites_dto_1 = require("./dtos/create-sites.dto");
const update_sites_dto_1 = require("./dtos/update-sites.dto");
const origens_service_1 = require("./origens.service");
let OrigensController = OrigensController_1 = class OrigensController {
    constructor(origensService) {
        this.origensService = origensService;
        this.logger = new common_1.Logger(OrigensController_1.name);
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
    __metadata("design:paramtypes", [typeof (_a = typeof create_sites_dto_1.CreateOrigemDto !== "undefined" && create_sites_dto_1.CreateOrigemDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], OrigensController.prototype, "criarOrigem", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrigensController.prototype, "consultarOrigem", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrigensController.prototype, "consultarOrigemKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_sites_dto_1.UpdateOrigemDto !== "undefined" && update_sites_dto_1.UpdateOrigemDto) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], OrigensController.prototype, "atualizarOrigem", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrigensController.prototype, "deletarOrigem", null);
OrigensController = OrigensController_1 = __decorate([
    common_1.Controller('v1/origens'),
    __metadata("design:paramtypes", [typeof (_c = typeof origens_service_1.OrigensService !== "undefined" && origens_service_1.OrigensService) === "function" ? _c : Object])
], OrigensController);
exports.OrigensController = OrigensController;
//# sourceMappingURL=origens.controller.js.map