import { CreateCampanhaDto } from './dtos/create-campanhas.dto';
import { UpdateCampanhaDto } from './dtos/update-campanhas.dto';
import { Campanha } from './interfaces/campanhas.interface';
import { Model } from 'mongoose';
export declare class CampanhasService {
    private readonly campanhasModel;
    constructor(campanhasModel: Model<Campanha>);
    private readonly logger;
    criarCampanha(createCampanhaDto: CreateCampanhaDto): Promise<any>;
    atualizarCampanha(_id: string, updateCampanhaDto: UpdateCampanhaDto): Promise<Campanha>;
    consultarTodosCampanha(): Promise<Campanha[]>;
    consultarCampanhaKey(_id: string): Promise<Campanha>;
    deletarCampanha(_id: string): Promise<any>;
    sendSms(_id: string): Promise<Campanha>;
}
