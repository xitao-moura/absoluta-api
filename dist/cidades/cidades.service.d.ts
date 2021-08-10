import { CreateCidadeDto } from './dtos/create-cidades.dto';
import { UpdateCidadeDto } from './dtos/update-cidades.dto';
import { Cidade } from './interfaces/cidades.interface';
import { Model } from 'mongoose';
export declare class CidadesService {
    private readonly cidadesModel;
    constructor(cidadesModel: Model<Cidade>);
    private readonly logger;
    criarCidade(createCidadeDto: CreateCidadeDto): Promise<any>;
    atualizarCidade(_id: string, updateCidadeDto: UpdateCidadeDto): Promise<Cidade>;
    consultarTodosCidade(): Promise<Cidade[]>;
    consultarCidadeKey(_id: string): Promise<Cidade>;
    deletarCidade(_id: string): Promise<any>;
}
