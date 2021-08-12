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
const sites_controller_1 = require("./sites.controller");
const sites_service_1 = require("./sites.service");
const sites_schema_1 = require("./interfaces/sites.schema");
let OrigensModule = class OrigensModule {
};
OrigensModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Site', schema: sites_schema_1.SiteSchema }])
        ],
        exports: [sites_service_1.SitesService],
        controllers: [sites_controller_1.SitesController],
        providers: [sites_service_1.SitesService]
    })
], OrigensModule);
exports.OrigensModule = OrigensModule;
//# sourceMappingURL=sites.module.js.map