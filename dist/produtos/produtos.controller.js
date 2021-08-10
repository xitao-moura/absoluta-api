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
var ProdutosController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const create_produtos_dto_1 = require("./dtos/create-produtos.dto");
const update_produtos_dto_1 = require("./dtos/update-produtos.dto");
const produtos_service_1 = require("./produtos.service");
let ProdutosController = ProdutosController_1 = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
        this.logger = new common_1.Logger(ProdutosController_1.name);
    }
    async criarProduto(createProdutoDto) {
        return await this.produtosService.criarProduto(createProdutoDto);
    }
    async consultarProduto() {
        return await this.produtosService.consultarTodosProduto();
    }
    async consultarProdutoKey(_id) {
        return await this.produtosService.consultarProdutoKey(_id);
    }
    async atualizarProduto(updateProdutoDto, _id) {
        this.logger.log(`updateProdutoDto: ${JSON.stringify(updateProdutoDto)}`);
        await this.produtosService.atualizarProduto(_id, updateProdutoDto);
    }
    async deletarProduto(_id) {
        this.produtosService.deletarProduto(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produtos_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "criarProduto", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "consultarProduto", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "consultarProdutoKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_produtos_dto_1.UpdateProdutoDto, String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "atualizarProduto", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "deletarProduto", null);
ProdutosController = ProdutosController_1 = __decorate([
    common_1.Controller('v1/produtos'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map