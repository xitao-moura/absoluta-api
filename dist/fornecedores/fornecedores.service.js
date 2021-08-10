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
var FornecedoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FornecedoresService = FornecedoresService_1 = class FornecedoresService {
    constructor(fornecedoresModel) {
        this.fornecedoresModel = fornecedoresModel;
        this.logger = new common_1.Logger(FornecedoresService_1.name);
    }
    async criarFornecedor(createFornecedorDto) {
        const fornecedorCriado = new this.fornecedoresModel(createFornecedorDto);
        fornecedorCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarFornecedor(_id, updateFornecedorDto) {
        const fornecedorCriado = await this.fornecedoresModel.findOne({ _id }).exec();
        if (!fornecedorCriado) {
            throw new common_1.BadRequestException(`Fornecedor com o _id ${_id} não encontrado`);
        }
        return await this.fornecedoresModel.findOneAndUpdate({ _id: _id }, { $set: updateFornecedorDto }).exec();
    }
    async consultarTodosFornecedor() {
        return await this.fornecedoresModel.find().exec();
    }
    async consultarFornecedorKey(_id) {
        const fornecedorCriado = await this.fornecedoresModel.findOne({ _id }).exec();
        if (!fornecedorCriado) {
            throw new common_1.BadRequestException(`Fornecedor com o _id ${_id} não encontrado`);
        }
        return await this.fornecedoresModel.findOne({ _id }).exec();
    }
    async deletarFornecedor(_id) {
        const fornecedorCriado = await this.fornecedoresModel.findOne({ _id }).exec();
        if (!fornecedorCriado) {
            throw new common_1.BadRequestException(`Fornecedor com o _id ${_id} não encontrado`);
        }
        await this.fornecedoresModel.deleteOne({ _id }).exec();
    }
};
FornecedoresService = FornecedoresService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Fornecedor')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FornecedoresService);
exports.FornecedoresService = FornecedoresService;
//# sourceMappingURL=fornecedores.service.js.map