import { CreateTipoDto } from './dtos/create-tipos.dto';
import { UpdateTipoDto } from './dtos/update-tipos.dto';
import { TiposService } from './tipos.service';
import { Tipo } from './interfaces/tipos.interface';
export declare class TiposController {
    private readonly tiposService;
    private readonly logger;
    constructor(tiposService: TiposService);
    criarTipo(createTipoDto: CreateTipoDto): Promise<Tipo>;
    consultarTipo(): Promise<Tipo[]>;
    consultarTipoKey(_id: string): Promise<Tipo[] | Tipo>;
    atualizarTipo(updateTipoDto: UpdateTipoDto, _id: string): Promise<void>;
    deletarTipo(_id: string): Promise<void>;
}
