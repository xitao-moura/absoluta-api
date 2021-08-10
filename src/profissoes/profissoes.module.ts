import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfissoesController } from './profissoes.controller';
import { ProfissoesService } from './profissoes.service';
import { ProfissaoSchema } from './interfaces/profissoes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Profissao', schema: ProfissaoSchema}])
  ],
  exports: [ProfissoesService],
  controllers: [ProfissoesController],
  providers: [ProfissoesService]
})
export class ProfissoesModule {}
