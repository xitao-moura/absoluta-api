import { CreateSiteDto } from './dtos/create-sites.dto';
import { UpdateSiteDto } from './dtos/update-sites.dto';
import { Site } from './interfaces/sites.interface';
import { Model } from 'mongoose';
export declare class SitesService {
    private readonly origensModel;
    constructor(origensModel: Model<Site>);
    private readonly logger;
    criarOrigem(createOrigemDto: CreateSiteDto): Promise<any>;
    atualizarOrigem(_id: string, updateOrigemDto: UpdateSiteDto): Promise<Site>;
    consultarTodosOrigem(): Promise<Site[]>;
    consultarOrigemKey(_id: string): Promise<Site>;
    deletarOrigem(_id: string): Promise<any>;
}
