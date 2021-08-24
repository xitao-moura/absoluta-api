import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Indicacao } from './interfaces/indicacoes.entity';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { debug } from 'console';

@Injectable()
export class IndicacoesService {
  constructor(
      @InjectRepository(Indicacao) 
      private indicacaoRepository: Repository<Indicacao>,
    ) {}

  async getIndicacoes(): Promise<any> {
    return await this.indicacaoRepository.find({
      //relations: ['status', 'tipo', 'origem', 'profissao'],
      //take: 1000
    })
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Indicacao>> {
    console.log(options)
    const queryBuilder = this.indicacaoRepository.createQueryBuilder('i')
    .leftJoinAndSelect('i.status', 'status')
    .leftJoinAndSelect('i.tipo', 'tipo')
    .leftJoinAndSelect('i.origem', 'origem')
    .leftJoinAndSelect('i.profissao', 'profissao')
    .where('i.status_id <> 10')
    queryBuilder.orderBy('i.created', 'DESC')

    return paginate<Indicacao>(queryBuilder, options);
  }

  async findOne(id: string) {
    let indicacao = await this.indicacaoRepository.createQueryBuilder('i')
    .leftJoinAndSelect('i.status', 'status')
    .leftJoinAndSelect('i.tipo', 'tipo')
    .leftJoinAndSelect('i.origem', 'origem')
    .leftJoinAndSelect('i.profissao', 'profissao')
    .where(`i.id = ${id}`)
    .getOne();
    console.log(indicacao)
    return indicacao
  }
}