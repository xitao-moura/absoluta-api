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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicacoesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const indicacoes_entity_1 = require("./interfaces/indicacoes.entity");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let IndicacoesService = class IndicacoesService {
    constructor(indicacaoRepository) {
        this.indicacaoRepository = indicacaoRepository;
    }
    async getIndicacoes() {
        return await this.indicacaoRepository.find({});
    }
    async paginate(options) {
        console.log(options);
        const queryBuilder = this.indicacaoRepository.createQueryBuilder('i')
            .leftJoinAndSelect('i.status', 'status')
            .leftJoinAndSelect('i.tipo', 'tipo')
            .leftJoinAndSelect('i.origem', 'origem')
            .leftJoinAndSelect('i.profissao', 'profissao')
            .where('i.status_id <> 10');
        queryBuilder.orderBy('i.created', 'DESC');
        return nestjs_typeorm_paginate_1.paginate(queryBuilder, options);
    }
    async findOne(id) {
        let indicacao = await this.indicacaoRepository.createQueryBuilder('i')
            .leftJoinAndSelect('i.status', 'status')
            .leftJoinAndSelect('i.tipo', 'tipo')
            .leftJoinAndSelect('i.origem', 'origem')
            .leftJoinAndSelect('i.profissao', 'profissao')
            .where(`i.id = ${id}`)
            .getOne();
        console.log(indicacao);
        return indicacao;
    }
};
IndicacoesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(indicacoes_entity_1.Indicacao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IndicacoesService);
exports.IndicacoesService = IndicacoesService;
//# sourceMappingURL=indicacoes.service.js.map