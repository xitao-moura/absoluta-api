import { CreateTipoDto } from './dtos/create-tipos.dto';
import { UpdateTipoDto } from './dtos/update-tipos.dto';
import { Tipo } from './interfaces/tipos.interface';
import { Model } from 'mongoose';
export declare class TiposService {
    private readonly tiposModel;
    constructor(tiposModel: Model<Tipo>);
    private readonly logger;
    criarTipo(createTipoDto: CreateTipoDto): Promise<any>;
    atualizarTipo(_id: string, updateTipoDto: UpdateTipoDto): Promise<Tipo>;
    consultarTodosTipo(): Promise<Tipo[]>;
    consultarTipoKey(_id: string): Promise<Tipo>;
    deletarTipo(_id: string): Promise<any>;
}
