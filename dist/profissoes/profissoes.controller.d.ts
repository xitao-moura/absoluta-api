import { CreateProfissaoDto } from './dtos/create-profissoes.dto';
import { UpdateProfissaoDto } from './dtos/update-profissoes.dto';
import { ProfissoesService } from './profissoes.service';
import { Profissao } from './interfaces/profissoes.interface';
export declare class ProfissoesController {
    private readonly profissoesService;
    private readonly logger;
    constructor(profissoesService: ProfissoesService);
    criarProfissao(createProfissaoDto: CreateProfissaoDto): Promise<Profissao>;
    consultarProfissao(): Promise<Profissao[]>;
    consultarProfissaoKey(_id: string): Promise<Profissao[] | Profissao>;
    atualizarProfissao(updateProfissaoDto: UpdateProfissaoDto, _id: string): Promise<void>;
    deletarProfissao(_id: string): Promise<void>;
}
