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
var CampanhasService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampanhasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CampanhasService = CampanhasService_1 = class CampanhasService {
    constructor(campanhasModel) {
        this.campanhasModel = campanhasModel;
        this.logger = new common_1.Logger(CampanhasService_1.name);
    }
    async criarCampanha(createCampanhaDto) {
        console.log(createCampanhaDto);
        const campanhaCriado = new this.campanhasModel(createCampanhaDto);
        campanhaCriado.save((error, doc) => {
            console.log(error);
            console.log(doc);
        });
    }
    async atualizarCampanha(_id, updateCampanhaDto) {
        const campanhaCriado = await this.campanhasModel.findOne({ _id }).exec();
        if (!campanhaCriado) {
            throw new common_1.BadRequestException(`Campanha com o _id ${_id} não encontrado`);
        }
        return await this.campanhasModel.findOneAndUpdate({ _id: _id }, { $set: updateCampanhaDto }).exec();
    }
    async consultarTodosCampanha() {
        return await this.campanhasModel.find().populate('status').exec();
    }
    async consultarCampanhaKey(_id) {
        const campanhaCriado = await this.campanhasModel.findOne({ _id }).exec();
        if (!campanhaCriado) {
            throw new common_1.BadRequestException(`Campanha com o _id ${_id} não encontrado`);
        }
        return await this.campanhasModel.findOne({ _id }).populate('status').exec();
    }
    async deletarCampanha(_id) {
        const campanhaCriado = await this.campanhasModel.findOne({ _id }).exec();
        if (!campanhaCriado) {
            throw new common_1.BadRequestException(`Campanha com o _id ${_id} não encontrado`);
        }
        await this.campanhasModel.deleteOne({ _id }).exec();
    }
    async sendSms(_id) {
        return;
    }
};
CampanhasService = CampanhasService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Campanha')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CampanhasService);
exports.CampanhasService = CampanhasService;
//# sourceMappingURL=campanhas.service.js.map