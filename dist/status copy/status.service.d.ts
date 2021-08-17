import { Status } from './interfaces/status.entity';
import { Repository } from 'typeorm';
export declare class StatusService {
    private indicacaoRepository;
    constructor(indicacaoRepository: Repository<Status>);
    private readonly logger;
    consultarTodosStatus(): Promise<Status[]>;
    consultarStatusKey(_id: string): Promise<Status>;
}
