"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const estados_controller_1 = require("./estados.controller");
const estados_service_1 = require("./estados.service");
const estados_schema_1 = require("./interfaces/estados.schema");
let EstadosModule = class EstadosModule {
};
EstadosModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Estado', schema: estados_schema_1.EstadoSchema }])
        ],
        exports: [estados_service_1.EstadosService],
        controllers: [estados_controller_1.EstadosController],
        providers: [estados_service_1.EstadosService]
    })
], EstadosModule);
exports.EstadosModule = EstadosModule;
//# sourceMappingURL=estados.module.js.map