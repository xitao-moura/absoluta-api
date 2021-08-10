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
var ProdutosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProdutosService = ProdutosService_1 = class ProdutosService {
    constructor(produtosModel) {
        this.produtosModel = produtosModel;
        this.logger = new common_1.Logger(ProdutosService_1.name);
    }
    async criarProduto(createProdutoDto) {
        const produtoCriado = new this.produtosModel(createProdutoDto);
        produtoCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarProduto(_id, updateProdutoDto) {
        const produtoCriado = await this.produtosModel.findOne({ _id }).exec();
        if (!produtoCriado) {
            throw new common_1.BadRequestException(`Produto com o _id ${_id} não encontrado`);
        }
        return await this.produtosModel.findOneAndUpdate({ _id: _id }, { $set: updateProdutoDto }).exec();
    }
    async consultarTodosProduto() {
        return await this.produtosModel.find().exec();
    }
    async consultarProdutoKey(_id) {
        const produtoCriado = await this.produtosModel.findOne({ _id }).exec();
        if (!produtoCriado) {
            throw new common_1.BadRequestException(`Produto com o _id ${_id} não encontrado`);
        }
        return await this.produtosModel.findOne({ _id }).exec();
    }
    async deletarProduto(_id) {
        const produtoCriado = await this.produtosModel.findOne({ _id }).exec();
        if (!produtoCriado) {
            throw new common_1.BadRequestException(`Produto com o _id ${_id} não encontrado`);
        }
        await this.produtosModel.deleteOne({ _id }).exec();
    }
};
ProdutosService = ProdutosService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Produto')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=produtos.service.js.map