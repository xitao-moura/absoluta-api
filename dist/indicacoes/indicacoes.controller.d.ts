import { Indicacao } from './interfaces/indicacoes.entity';
import { IndicacoesService } from './indicacoes.service';
export declare class IndicacoesController {
    private indicacoesService;
    constructor(indicacoesService: IndicacoesService);
    findAll(): Promise<Indicacao[]>;
}
