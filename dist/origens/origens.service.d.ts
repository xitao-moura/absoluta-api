import { CreateOrigemDto } from './dtos/create-origens.dto';
import { UpdateOrigemDto } from './dtos/update-origens.dto';
import { Origem } from './interfaces/origens.interface';
import { Model } from 'mongoose';
export declare class OrigensService {
    private readonly origensModel;
    constructor(origensModel: Model<Origem>);
    private readonly logger;
    criarOrigem(createOrigemDto: CreateOrigemDto): Promise<any>;
    atualizarOrigem(_id: string, updateOrigemDto: UpdateOrigemDto): Promise<Origem>;
    consultarTodosOrigem(): Promise<Origem[]>;
    consultarOrigemKey(_id: string): Promise<Origem>;
    deletarOrigem(_id: string): Promise<any>;
}
