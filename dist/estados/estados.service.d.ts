import { CreateEstadoDto } from './dtos/create-estados.dto';
import { UpdateEstadoDto } from './dtos/update-estados.dto';
import { Estado } from './interfaces/estados.interface';
import { Model } from 'mongoose';
export declare class EstadosService {
    private readonly estadosModel;
    constructor(estadosModel: Model<Estado>);
    private readonly logger;
    criarEstado(createEstadoDto: CreateEstadoDto): Promise<any>;
    atualizarEstado(_id: string, updateEstadoDto: UpdateEstadoDto): Promise<Estado>;
    consultarTodosEstado(): Promise<Estado[]>;
    consultarEstadoKey(_id: string): Promise<Estado>;
    deletarEstado(_id: string): Promise<any>;
}
