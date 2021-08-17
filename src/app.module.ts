import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './common/environment';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module'
import { ProfissoesModule } from './profissoes/profissoes.module';
import { CategoriasModule } from './categorias/categorias.module'
import { CidadesModule } from './cidades/cidades.module'
import { EstadosModule } from './estados/estados.module'
import { OrigensModule } from './origens/origens.module'
import { StatusModule } from './status/status.module'
import { TiposModule } from './tipos/tipos.module'
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module'
import { CampanhasModule } from './campanhas/campanhas.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndicacoesModule } from './indicacoes/indicacoes.module'

@Module({
  imports: [
    MongooseModule.forRoot(`${environment.db.url}/absoluta-api`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '107.180.68.112',
      port: 3306,
      username: 'absoluta_crm',
      password: 'AbsGnis@2015',
      database: 'absoluta_sistema_absoluta',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false
    }),
    UsersModule,
    ProfissoesModule,
    CategoriasModule,
    CidadesModule,
    EstadosModule,
    OrigensModule,
    StatusModule,
    TiposModule,
    FornecedoresModule,
    ProdutosModule,
    ClientesModule,
    AuthModule,
    CampanhasModule,
    IndicacoesModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
