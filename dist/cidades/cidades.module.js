"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cidades_controller_1 = require("./cidades.controller");
const cidades_service_1 = require("./cidades.service");
const cidades_schema_1 = require("./interfaces/cidades.schema");
let CidadesModule = class CidadesModule {
};
CidadesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Cidade', schema: cidades_schema_1.CidadeSchema }])
        ],
        exports: [cidades_service_1.CidadesService],
        controllers: [cidades_controller_1.CidadesController],
        providers: [cidades_service_1.CidadesService]
    })
], CidadesModule);
exports.CidadesModule = CidadesModule;
//# sourceMappingURL=cidades.module.js.map