import { CreateFornecedorDto } from './dtos/create-fornecedores.dto';
import { UpdateFornecedorDto } from './dtos/update-fornecedores.dto';
import { Fornecedor } from './interfaces/fornecedores.interface';
import { Model } from 'mongoose';
export declare class FornecedoresService {
    private readonly fornecedoresModel;
    constructor(fornecedoresModel: Model<Fornecedor>);
    private readonly logger;
    criarFornecedor(createFornecedorDto: CreateFornecedorDto): Promise<any>;
    atualizarFornecedor(_id: string, updateFornecedorDto: UpdateFornecedorDto): Promise<Fornecedor>;
    consultarTodosFornecedor(): Promise<Fornecedor[]>;
    consultarFornecedorKey(_id: string): Promise<Fornecedor>;
    deletarFornecedor(_id: string): Promise<any>;
}
