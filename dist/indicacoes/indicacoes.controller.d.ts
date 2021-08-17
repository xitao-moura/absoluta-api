import { Indicacao } from './interfaces/indicacoes.entity';
import { IndicacoesService } from './indicacoes.service';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class IndicacoesController {
    private indicacoesService;
    constructor(indicacoesService: IndicacoesService);
    findAll(page?: number, limit?: number): Promise<Pagination<Indicacao, import("nestjs-typeorm-paginate").IPaginationMeta>>;
}
