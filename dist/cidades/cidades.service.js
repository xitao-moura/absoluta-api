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
var CidadesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CidadesService = CidadesService_1 = class CidadesService {
    constructor(cidadesModel) {
        this.cidadesModel = cidadesModel;
        this.logger = new common_1.Logger(CidadesService_1.name);
    }
    async criarCidade(createCidadeDto) {
        const cidadeCriado = new this.cidadesModel(createCidadeDto);
        cidadeCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarCidade(_id, updateCidadeDto) {
        const cidadeCriado = await this.cidadesModel.findOne({ _id }).exec();
        if (!cidadeCriado) {
            throw new common_1.BadRequestException(`Cidade com o _id ${_id} não encontrado`);
        }
        return await this.cidadesModel.findOneAndUpdate({ _id: _id }, { $set: updateCidadeDto }).exec();
    }
    async consultarTodosCidade() {
        return await this.cidadesModel.find().exec();
    }
    async consultarCidadeKey(_id) {
        const cidadeCriado = await this.cidadesModel.findOne({ _id }).exec();
        if (!cidadeCriado) {
            throw new common_1.BadRequestException(`Cidade com o _id ${_id} não encontrado`);
        }
        return await this.cidadesModel.findOne({ _id }).exec();
    }
    async deletarCidade(_id) {
        const cidadeCriado = await this.cidadesModel.findOne({ _id }).exec();
        if (!cidadeCriado) {
            throw new common_1.BadRequestException(`Cidade com o _id ${_id} não encontrado`);
        }
        await this.cidadesModel.deleteOne({ _id }).exec();
    }
};
CidadesService = CidadesService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Cidade')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CidadesService);
exports.CidadesService = CidadesService;
//# sourceMappingURL=cidades.service.js.map