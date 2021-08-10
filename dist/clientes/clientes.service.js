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
var ClientesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ClientesService = ClientesService_1 = class ClientesService {
    constructor(clientesModel) {
        this.clientesModel = clientesModel;
        this.logger = new common_1.Logger(ClientesService_1.name);
    }
    async criarCliente(createClienteDto) {
        const clienteCriado = new this.clientesModel(createClienteDto);
        clienteCriado.save((error, doc) => {
            console.log(doc);
        });
    }
    async atualizarCliente(_id, updateClienteDto) {
        const clienteCriado = await this.clientesModel.findOne({ _id }).exec();
        if (!clienteCriado) {
            throw new common_1.BadRequestException(`Cliente com o _id ${_id} não encontrado`);
        }
        return await this.clientesModel.findOneAndUpdate({ _id: _id }, { $set: updateClienteDto }).exec();
    }
    async consultarTodosCliente() {
        return await this.clientesModel.find().exec();
    }
    async consultarClienteKey(_id) {
        const clienteCriado = await this.clientesModel.findOne({ _id }).exec();
        if (!clienteCriado) {
            throw new common_1.BadRequestException(`Cliente com o _id ${_id} não encontrado`);
        }
        return await this.clientesModel.findOne({ _id }).exec();
    }
    async deletarCliente(_id) {
        const clienteCriado = await this.clientesModel.findOne({ _id }).exec();
        if (!clienteCriado) {
            throw new common_1.BadRequestException(`Cliente com o _id ${_id} não encontrado`);
        }
        await this.clientesModel.deleteOne({ _id }).exec();
    }
};
ClientesService = ClientesService_1 = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Cliente')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map