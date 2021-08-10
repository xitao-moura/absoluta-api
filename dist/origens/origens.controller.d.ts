import { CreateOrigemDto } from './dtos/create-origens.dto';
import { UpdateOrigemDto } from './dtos/update-origens.dto';
import { OrigensService } from './origens.service';
import { Origem } from './interfaces/origens.interface';
export declare class OrigensController {
    private readonly origensService;
    private readonly logger;
    constructor(origensService: OrigensService);
    criarOrigem(createOrigemDto: CreateOrigemDto): Promise<Origem>;
    consultarOrigem(): Promise<Origem[]>;
    consultarOrigemKey(_id: string): Promise<Origem[] | Origem>;
    atualizarOrigem(updateOrigemDto: UpdateOrigemDto, _id: string): Promise<void>;
    deletarOrigem(_id: string): Promise<void>;
}
