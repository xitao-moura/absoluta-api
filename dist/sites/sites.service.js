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
var SitesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SitesService = SitesService_1 = class SitesService {
    constructor(origensModel) {
        this.origensModel = origensModel;
        this.logger = new common_1.Logger(SitesService_1.name);
    }
    async criarOrigem(createOrigemDto) {
        const origemCriado = new this.origensModel(createOrigemDto);
        origemCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarOrigem(_id, updateOrigemDto) {
        const origemCriado = await this.origensModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Origem com o _id ${_id} não encontrado`);
        }
        return await this.origensModel.findOneAndUpdate({ _id: _id }, { $set: updateOrigemDto }).exec();
    }
    async consultarTodosOrigem() {
        return await this.origensModel.find().exec();
    }
    async consultarOrigemKey(_id) {
        const origemCriado = await this.origensModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Origem com o _id ${_id} não encontrado`);
        }
        return await this.origensModel.findOne({ _id }).exec();
    }
    async deletarOrigem(_id) {
        const origemCriado = await this.origensModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Origem com o _id ${_id} não encontrado`);
        }
        await this.origensModel.deleteOne({ _id }).exec();
    }
};
SitesService = SitesService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Site')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SitesService);
exports.SitesService = SitesService;
//# sourceMappingURL=sites.service.js.map