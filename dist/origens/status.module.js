"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const status_controller_1 = require("./status.controller");
const status_service_1 = require("./status.service");
const status_schema_1 = require("./interfaces/status.schema");
const typeorm_1 = require("@nestjs/typeorm");
const status_entity_1 = require("./interfaces/status.entity");
let StatusModule = class StatusModule {
};
StatusModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Status', schema: status_schema_1.StatusSchema }]),
            typeorm_1.TypeOrmModule.forFeature([status_entity_1.Status])
        ],
        exports: [status_service_1.StatusService],
        controllers: [status_controller_1.StatusController],
        providers: [status_service_1.StatusService]
    })
], StatusModule);
exports.StatusModule = StatusModule;
//# sourceMappingURL=status.module.js.map