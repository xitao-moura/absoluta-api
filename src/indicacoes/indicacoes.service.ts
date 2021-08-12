import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Indicacao } from './interfaces/indicacoes.entity';

@Injectable()
export class IndicacoesService {
  constructor(
      @InjectRepository(Indicacao) private indicacaoRepository: Repository<Indicacao>,
    ) {}

  async getIndicacoes(): Promise<any> {
    return await this.indicacaoRepository.find({
      relations: ['status', 'tipo'],
      take: 1000
    })
  }
}