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
exports.IndicacoesController = void 0;
const common_1 = require("@nestjs/common");
const parse_int_pipe_1 = require("@nestjs/common/pipes/parse-int.pipe");
const indicacoes_service_1 = require("./indicacoes.service");
let IndicacoesController = class IndicacoesController {
    constructor(indicacoesService) {
        this.indicacoesService = indicacoesService;
    }
    findAll(page = 1, limit = 10) {
        limit = limit > 100 ? 100 : limit;
        return this.indicacoesService.paginate({
            page,
            limit,
            route: '/',
        });
    }
    getIndicacao(id) {
        return this.indicacoesService.getIndicacao(id);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('page', new common_1.DefaultValuePipe(1), parse_int_pipe_1.ParseIntPipe)),
    __param(1, common_1.Query('limit', new common_1.DefaultValuePipe(10), parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], IndicacoesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IndicacoesController.prototype, "getIndicacao", null);
IndicacoesController = __decorate([
    common_1.Controller('v1/indicacoes'),
    __metadata("design:paramtypes", [indicacoes_service_1.IndicacoesService])
], IndicacoesController);
exports.IndicacoesController = IndicacoesController;
//# sourceMappingURL=indicacoes.controller.js.map