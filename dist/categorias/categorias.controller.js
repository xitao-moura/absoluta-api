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
var CategoriasController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasController = void 0;
const common_1 = require("@nestjs/common");
const create_categorias_dto_1 = require("./dtos/create-categorias.dto");
const update_categorias_dto_1 = require("./dtos/update-categorias.dto");
const categorias_service_1 = require("./categorias.service");
let CategoriasController = CategoriasController_1 = class CategoriasController {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
        this.logger = new common_1.Logger(CategoriasController_1.name);
    }
    async criarCategoria(createCategoriaDto) {
        return await this.categoriasService.criarCategoria(createCategoriaDto);
    }
    async consultarCategoria() {
        return await this.categoriasService.consultarTodosCategoria();
    }
    async consultarCategoriaKey(_id) {
        return await this.categoriasService.consultarCategoriaKey(_id);
    }
    async atualizarCategoria(updateCategoriaDto, _id) {
        this.logger.log(`updateCategoriaDto: ${JSON.stringify(updateCategoriaDto)}`);
        await this.categoriasService.atualizarCategoria(_id, updateCategoriaDto);
    }
    async deletarCategoria(_id) {
        this.categoriasService.deletarCategoria(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorias_dto_1.CreateCategoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "criarCategoria", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "consultarCategoria", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "consultarCategoriaKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_categorias_dto_1.UpdateCategoriaDto, String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "atualizarCategoria", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "deletarCategoria", null);
CategoriasController = CategoriasController_1 = __decorate([
    common_1.Controller('v1/categorias'),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasController);
exports.CategoriasController = CategoriasController;
//# sourceMappingURL=categorias.controller.js.map