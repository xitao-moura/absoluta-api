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
var ProfissoesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissoesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProfissoesService = ProfissoesService_1 = class ProfissoesService {
    constructor(profissoesModel) {
        this.profissoesModel = profissoesModel;
        this.logger = new common_1.Logger(ProfissoesService_1.name);
    }
    async criarProfissao(createProfissaoDto) {
        const origemCriado = new this.profissoesModel(createProfissaoDto);
        origemCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarProfissao(_id, updateProfissaoDto) {
        const origemCriado = await this.profissoesModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Profissao com o _id ${_id} não encontrado`);
        }
        return await this.profissoesModel.findOneAndUpdate({ _id: _id }, { $set: updateProfissaoDto }).exec();
    }
    async consultarTodosProfissao() {
        return await this.profissoesModel.find().exec();
    }
    async consultarProfissaoKey(_id) {
        const origemCriado = await this.profissoesModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Profissao com o _id ${_id} não encontrado`);
        }
        return await this.profissoesModel.findOne({ _id }).exec();
    }
    async deletarProfissao(_id) {
        const origemCriado = await this.profissoesModel.findOne({ _id }).exec();
        if (!origemCriado) {
            throw new common_1.BadRequestException(`Profissao com o _id ${_id} não encontrado`);
        }
        await this.profissoesModel.deleteOne({ _id }).exec();
    }
};
ProfissoesService = ProfissoesService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Profissao')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfissoesService);
exports.ProfissoesService = ProfissoesService;
//# sourceMappingURL=profissoes.service.js.map