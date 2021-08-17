import { Origens } from './interfaces/origens.entity';
import { Repository } from 'typeorm';
export declare class OrigensService {
    private indicacaoRepository;
    constructor(indicacaoRepository: Repository<Origens>);
    private readonly logger;
    consultarTodosStatus(): Promise<Origens[]>;
    consultarStatusKey(_id: string): Promise<Origens>;
}
