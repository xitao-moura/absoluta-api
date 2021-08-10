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
var EstadosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EstadosService = EstadosService_1 = class EstadosService {
    constructor(estadosModel) {
        this.estadosModel = estadosModel;
        this.logger = new common_1.Logger(EstadosService_1.name);
    }
    async criarEstado(createEstadoDto) {
        const estadoCriado = new this.estadosModel(createEstadoDto);
        estadoCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarEstado(_id, updateEstadoDto) {
        const estadoCriado = await this.estadosModel.findOne({ _id }).exec();
        if (!estadoCriado) {
            throw new common_1.BadRequestException(`Estado com o _id ${_id} não encontrado`);
        }
        return await this.estadosModel.findOneAndUpdate({ _id: _id }, { $set: updateEstadoDto }).exec();
    }
    async consultarTodosEstado() {
        return await this.estadosModel.find().exec();
    }
    async consultarEstadoKey(_id) {
        const estadoCriado = await this.estadosModel.findOne({ _id }).exec();
        if (!estadoCriado) {
            throw new common_1.BadRequestException(`Estado com o _id ${_id} não encontrado`);
        }
        return await this.estadosModel.findOne({ _id }).exec();
    }
    async deletarEstado(_id) {
        const estadoCriado = await this.estadosModel.findOne({ _id }).exec();
        if (!estadoCriado) {
            throw new common_1.BadRequestException(`Estado com o _id ${_id} não encontrado`);
        }
        await this.estadosModel.deleteOne({ _id }).exec();
    }
};
EstadosService = EstadosService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Estado')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EstadosService);
exports.EstadosService = EstadosService;
//# sourceMappingURL=estados.service.js.map