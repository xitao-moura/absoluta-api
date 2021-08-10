"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfissoesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profissoes_controller_1 = require("./profissoes.controller");
const profissoes_service_1 = require("./profissoes.service");
const profissoes_schema_1 = require("./interfaces/profissoes.schema");
let ProfissoesModule = class ProfissoesModule {
};
ProfissoesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Profissao', schema: profissoes_schema_1.ProfissaoSchema }])
        ],
        exports: [profissoes_service_1.ProfissoesService],
        controllers: [profissoes_controller_1.ProfissoesController],
        providers: [profissoes_service_1.ProfissoesService]
    })
], ProfissoesModule);
exports.ProfissoesModule = ProfissoesModule;
//# sourceMappingURL=profissoes.module.js.map