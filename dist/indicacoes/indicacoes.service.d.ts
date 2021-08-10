import { Repository } from 'typeorm';
import { Indicacao } from './interfaces/indicacoes.entity';
export declare class IndicacoesService {
    private indicacaoRepository;
    constructor(indicacaoRepository: Repository<Indicacao>);
    getIndicacoes(): Promise<Indicacao[]>;
}
