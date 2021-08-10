import { Module } from '@nestjs/common';
import { IndicacoesService } from './indicacoes.service';
import { IndicacoesController } from './indicacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Indicacao } from './interfaces/indicacoes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Indicacao])],
  providers: [IndicacoesService],
  controllers: [IndicacoesController],
})
export class IndicacoesModule {}