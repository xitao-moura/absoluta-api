import { Repository } from 'typeorm';
import { Indicacao } from './interfaces/indicacoes.entity';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class IndicacoesService {
    private indicacaoRepository;
    constructor(indicacaoRepository: Repository<Indicacao>);
    getIndicacoes(): Promise<any>;
    paginate(options: IPaginationOptions): Promise<Pagination<Indicacao>>;
    getIndicacao(id: any): Promise<any>;
}
