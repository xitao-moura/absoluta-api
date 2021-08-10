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
var ClientesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const create_clientes_dto_1 = require("./dtos/create-clientes.dto");
const update_clientes_dto_1 = require("./dtos/update-clientes.dto");
const clientes_service_1 = require("./clientes.service");
let ClientesController = ClientesController_1 = class ClientesController {
    constructor(clientesService) {
        this.clientesService = clientesService;
        this.logger = new common_1.Logger(ClientesController_1.name);
    }
    async criarCliente(createClienteDto) {
        return await this.clientesService.criarCliente(createClienteDto);
    }
    async consultarCliente() {
        return await this.clientesService.consultarTodosCliente();
    }
    async consultarClienteKey(_id) {
        return await this.clientesService.consultarClienteKey(_id);
    }
    async atualizarCliente(updateClienteDto, _id) {
        this.logger.log(`updateClienteDto: ${JSON.stringify(updateClienteDto)}`);
        await this.clientesService.atualizarCliente(_id, updateClienteDto);
    }
    async deletarCliente(_id) {
        this.clientesService.deletarCliente(_id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clientes_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "criarCliente", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "consultarCliente", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "consultarClienteKey", null);
__decorate([
    common_1.Put('/:_id'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_clientes_dto_1.UpdateClienteDto, String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "atualizarCliente", null);
__decorate([
    common_1.Delete('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "deletarCliente", null);
ClientesController = ClientesController_1 = __decorate([
    common_1.Controller('v1/clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map