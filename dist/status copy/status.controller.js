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
var StatusController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
let StatusController = StatusController_1 = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
        this.logger = new common_1.Logger(StatusController_1.name);
    }
    async consultarStatus() {
        return this.statusService.consultarTodosStatus();
    }
    async consultarStatusKey(_id) {
        return await this.statusService.consultarStatusKey(_id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "consultarStatus", null);
__decorate([
    common_1.Get('/:_id'),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "consultarStatusKey", null);
StatusController = StatusController_1 = __decorate([
    common_1.Controller('v1/status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
exports.StatusController = StatusController;
//# sourceMappingURL=status.controller.js.map