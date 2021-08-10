import { CreateCidadeDto } from './dtos/create-cidades.dto';
import { UpdateCidadeDto } from './dtos/update-cidades.dto';
import { CidadesService } from './cidades.service';
import { Cidade } from './interfaces/cidades.interface';
export declare class CidadesController {
    private readonly cidadesService;
    private readonly logger;
    constructor(cidadesService: CidadesService);
    criarCidade(createCidadeDto: CreateCidadeDto): Promise<Cidade>;
    consultarCidade(): Promise<Cidade[]>;
    consultarCidadeKey(_id: string): Promise<Cidade[] | Cidade>;
    atualizarCidade(updateCidadeDto: UpdateCidadeDto, _id: string): Promise<void>;
    deletarCidade(_id: string): Promise<void>;
}
