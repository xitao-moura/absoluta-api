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
var TiposService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TiposService = TiposService_1 = class TiposService {
    constructor(tiposModel) {
        this.tiposModel = tiposModel;
        this.logger = new common_1.Logger(TiposService_1.name);
    }
    async criarTipo(createTipoDto) {
        const tipoCriado = new this.tiposModel(createTipoDto);
        tipoCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarTipo(_id, updateTipoDto) {
        const tipoCriado = await this.tiposModel.findOne({ _id }).exec();
        if (!tipoCriado) {
            throw new common_1.BadRequestException(`Tipo com o _id ${_id} não encontrado`);
        }
        return await this.tiposModel.findOneAndUpdate({ _id: _id }, { $set: updateTipoDto }).exec();
    }
    async consultarTodosTipo() {
        return await this.tiposModel.find().exec();
    }
    async consultarTipoKey(_id) {
        const tipoCriado = await this.tiposModel.findOne({ _id }).exec();
        if (!tipoCriado) {
            throw new common_1.BadRequestException(`Tipo com o _id ${_id} não encontrado`);
        }
        return await this.tiposModel.findOne({ _id }).exec();
    }
    async deletarTipo(_id) {
        const tipoCriado = await this.tiposModel.findOne({ _id }).exec();
        if (!tipoCriado) {
            throw new common_1.BadRequestException(`Tipo com o _id ${_id} não encontrado`);
        }
        await this.tiposModel.deleteOne({ _id }).exec();
    }
};
TiposService = TiposService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Tipo')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TiposService);
exports.TiposService = TiposService;
//# sourceMappingURL=tipos.service.js.map