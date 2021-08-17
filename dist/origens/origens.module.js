"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrigensModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const origens_controller_1 = require("./origens.controller");
const origens_service_1 = require("./origens.service");
const origens_schema_1 = require("./interfaces/origens.schema");
const typeorm_1 = require("@nestjs/typeorm");
const origens_entity_1 = require("./interfaces/origens.entity");
let OrigensModule = class OrigensModule {
};
OrigensModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Origens', schema: origens_schema_1.OrigensSchema }]),
            typeorm_1.TypeOrmModule.forFeature([origens_entity_1.Origens])
        ],
        exports: [origens_service_1.OrigensService],
        controllers: [origens_controller_1.OrigensController],
        providers: [origens_service_1.OrigensService]
    })
], OrigensModule);
exports.OrigensModule = OrigensModule;
//# sourceMappingURL=origens.module.js.map