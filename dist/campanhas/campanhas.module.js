"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampanhasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const campanha_controller_1 = require("./campanha.controller");
const campanhas_service_1 = require("./campanhas.service");
const campanhas_schema_1 = require("./interfaces/campanhas.schema");
let CampanhasModule = class CampanhasModule {
};
CampanhasModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Campanha', schema: campanhas_schema_1.CampanhaSchema }])
        ],
        exports: [campanhas_service_1.CampanhasService],
        controllers: [campanha_controller_1.CampanhasController],
        providers: [campanhas_service_1.CampanhasService]
    })
], CampanhasModule);
exports.CampanhasModule = CampanhasModule;
//# sourceMappingURL=campanhas.module.js.map