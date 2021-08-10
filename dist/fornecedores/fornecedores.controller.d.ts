import { CreateFornecedorDto } from './dtos/create-fornecedores.dto';
import { UpdateFornecedorDto } from './dtos/update-fornecedores.dto';
import { FornecedoresService } from './fornecedores.service';
import { Fornecedor } from './interfaces/fornecedores.interface';
export declare class FornecedoresController {
    private readonly fornecedoresService;
    private readonly logger;
    constructor(fornecedoresService: FornecedoresService);
    criarFornecedor(createFornecedorDto: CreateFornecedorDto): Promise<Fornecedor>;
    consultarFornecedor(): Promise<Fornecedor[]>;
    consultarFornecedorKey(_id: string): Promise<Fornecedor[] | Fornecedor>;
    atualizarFornecedor(updateFornecedorDto: UpdateFornecedorDto, _id: string): Promise<void>;
    deletarFornecedor(_id: string): Promise<void>;
}
