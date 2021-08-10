import { CreateProdutoDto } from './dtos/create-produtos.dto';
import { UpdateProdutoDto } from './dtos/update-produtos.dto';
import { Produto } from './interfaces/produtos.interface';
import { Model } from 'mongoose';
export declare class ProdutosService {
    private readonly produtosModel;
    constructor(produtosModel: Model<Produto>);
    private readonly logger;
    criarProduto(createProdutoDto: CreateProdutoDto): Promise<any>;
    atualizarProduto(_id: string, updateProdutoDto: UpdateProdutoDto): Promise<Produto>;
    consultarTodosProduto(): Promise<Produto[]>;
    consultarProdutoKey(_id: string): Promise<Produto>;
    deletarProduto(_id: string): Promise<any>;
}
