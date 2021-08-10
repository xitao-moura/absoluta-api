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
var FornecedoresController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedoresController = void 0;
const common_1 = require("@nestjs/common");
const create_fornecedores_dto_1 = require("./dtos/create-fornecedores.dto");
const update_fornecedores_dto_1 = require("./dtos/update-fornecedores.dto");
const fornecedores_service_1 = require("./fornecedores.service");
let FornecedoresController = FornecedoresController_1 = class FornecedoresController {
    constructor(fornecedoresService) {
        this.fornecedoresService = fornecedoresService;
        this.logger = new common_1.Logger(FornecedoresController_1.name);
    }
    async criarFornecedor(createFornecedorDto) {
        return await this.fornecedoresService.criarFornecedor(createFornecedorDto);
    }
    async consultarFornecedor() {
        return await this.fornecedoresService.consultarTodosFornecedor();
    }
    async consultarFornecedorKey(_id) {
        return await this.fornecedoresService.consultarFornecedorKey(_id);
    }
    async atualizarFornecedor(updateFornecedorDto, _id) {
        this.logger.log(`updateFornecedorDto: ${JSON.stringify(updateFornecedorDto)}`);
        await this.fornecedoresService.atualizarFornecedor(_id, updateFornecedorDto);
    }
    async deletarFornecedor(_id) {
        this.fornecedoresService.deletarFornecedor(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fornecedores_dto_1.CreateFornecedorDto]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "criarFornecedor", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "consultarFornecedor", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "consultarFornecedorKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_fornecedores_dto_1.UpdateFornecedorDto, String]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "atualizarFornecedor", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FornecedoresController.prototype, "deletarFornecedor", null);
FornecedoresController = FornecedoresController_1 = __decorate([
    common_1.Controller('v1/fornecedores'),
    __metadata("design:paramtypes", [fornecedores_service_1.FornecedoresService])
], FornecedoresController);
exports.FornecedoresController = FornecedoresController;
//# sourceMappingURL=fornecedores.controller.js.map