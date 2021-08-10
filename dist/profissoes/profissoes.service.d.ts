import { CreateProfissaoDto } from './dtos/create-profissoes.dto';
import { UpdateProfissaoDto } from './dtos/update-profissoes.dto';
import { Profissao } from './interfaces/profissoes.interface';
import { Model } from 'mongoose';
export declare class ProfissoesService {
    private readonly profissoesModel;
    constructor(profissoesModel: Model<Profissao>);
    private readonly logger;
    criarProfissao(createProfissaoDto: CreateProfissaoDto): Promise<any>;
    atualizarProfissao(_id: string, updateProfissaoDto: UpdateProfissaoDto): Promise<Profissao>;
    consultarTodosProfissao(): Promise<Profissao[]>;
    consultarProfissaoKey(_id: string): Promise<Profissao>;
    deletarProfissao(_id: string): Promise<any>;
}
