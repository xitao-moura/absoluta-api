import { CreateEstadoDto } from './dtos/create-estados.dto';
import { UpdateEstadoDto } from './dtos/update-estados.dto';
import { EstadosService } from './estados.service';
import { Estado } from './interfaces/estados.interface';
export declare class EstadosController {
    private readonly estadosService;
    private readonly logger;
    constructor(estadosService: EstadosService);
    criarEstado(createEstadoDto: CreateEstadoDto): Promise<Estado>;
    consultarEstado(): Promise<Estado[]>;
    consultarEstadoKey(_id: string): Promise<Estado[] | Estado>;
    atualizarEstado(updateEstadoDto: UpdateEstadoDto, _id: string): Promise<void>;
    deletarEstado(_id: string): Promise<void>;
}
