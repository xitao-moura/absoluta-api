import {
    Query,
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { Indicacao } from './interfaces/indicacoes.entity';
  import { IndicacoesService } from './indicacoes.service';
  import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('v1/indicacoes')
export class IndicacoesController {
  constructor(private indicacoesService: IndicacoesService) {}

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.indicacoesService.paginate({
      page,
      limit,
      route: '/',
    });
  }

  @Get(':id')
  getIndicacao(@Param('id') id){
    return  this.indicacoesService.getIndicacao(id)
  }
}

