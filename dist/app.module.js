"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const auth_module_1 = require("./auth/auth.module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const environment_1 = require("./common/environment");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./users/users.module");
const profissoes_module_1 = require("./profissoes/profissoes.module");
const categorias_module_1 = require("./categorias/categorias.module");
const cidades_module_1 = require("./cidades/cidades.module");
const estados_module_1 = require("./estados/estados.module");
const origens_module_1 = require("./origens/origens.module");
const status_module_1 = require("./status/status.module");
const tipos_module_1 = require("./tipos/tipos.module");
const fornecedores_module_1 = require("./fornecedores/fornecedores.module");
const produtos_module_1 = require("./produtos/produtos.module");
const clientes_module_1 = require("./clientes/clientes.module");
const campanhas_module_1 = require("./campanhas/campanhas.module");
const typeorm_1 = require("@nestjs/typeorm");
const indicacoes_module_1 = require("./indicacoes/indicacoes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(`${environment_1.environment.db.url}/absoluta-api`, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '107.180.68.112',
                port: 3306,
                username: 'absoluta_crm',
                password: 'AbsGnis@2015',
                database: 'absoluta_sistema_absoluta',
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: false
            }),
            users_module_1.UsersModule,
            profissoes_module_1.ProfissoesModule,
            categorias_module_1.CategoriasModule,
            cidades_module_1.CidadesModule,
            estados_module_1.EstadosModule,
            origens_module_1.OrigensModule,
            status_module_1.StatusModule,
            tipos_module_1.TiposModule,
            fornecedores_module_1.FornecedoresModule,
            produtos_module_1.ProdutosModule,
            clientes_module_1.ClientesModule,
            auth_module_1.AuthModule,
            campanhas_module_1.CampanhasModule,
            indicacoes_module_1.IndicacoesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map