import { CreateSiteDto } from './dtos/create-sites.dto';
import { UpdateSiteDto } from './dtos/update-sites.dto';
import { SitesService } from './sites.service';
import { Site } from './interfaces/sites.interface';
export declare class SitesController {
    private readonly origensService;
    private readonly logger;
    constructor(origensService: SitesService);
    criarOrigem(createOrigemDto: CreateSiteDto): Promise<Site>;
    consultarOrigem(): Promise<Site[]>;
    consultarOrigemKey(_id: string): Promise<Site[] | Site>;
    atualizarOrigem(updateOrigemDto: UpdateSiteDto, _id: string): Promise<void>;
    deletarOrigem(_id: string): Promise<void>;
}
