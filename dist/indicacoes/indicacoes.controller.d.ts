import { IndicacoesService } from './indicacoes.service';
export declare class IndicacoesController {
    private indicacoesService;
    constructor(indicacoesService: IndicacoesService);
    findAll(): Promise<any>;
}
