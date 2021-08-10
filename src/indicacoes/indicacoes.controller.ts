import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { Indicacao } from './interfaces/indicacoes.entity';
  import { IndicacoesService } from './indicacoes.service';

@Controller('v1/indicacoes')
export class IndicacoesController {
  constructor(private indicacoesService: IndicacoesService) {}

  @Get()
  findAll() {
    return this.indicacoesService.getIndicacoes();
  }
}

