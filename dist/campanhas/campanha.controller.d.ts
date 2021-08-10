import { CreateCampanhaDto } from './dtos/create-campanhas.dto';
import { UpdateCampanhaDto } from './dtos/update-campanhas.dto';
import { CampanhasService } from './campanhas.service';
import { Campanha } from './interfaces/campanhas.interface';
export declare class CampanhasController {
    private readonly campanhasService;
    private readonly logger;
    constructor(campanhasService: CampanhasService);
    criarCampanha(createCampanhaDto: CreateCampanhaDto): Promise<Campanha>;
    consultarCampanha(): Promise<Campanha[]>;
    consultarCampanhaKey(_id: string): Promise<Campanha[] | Campanha>;
    atualizarCampanha(updateCampanhaDto: UpdateCampanhaDto, _id: string): Promise<void>;
    deletarCampanha(_id: string): Promise<void>;
}
