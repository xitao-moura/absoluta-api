import { CreateProdutoDto } from './dtos/create-produtos.dto';
import { UpdateProdutoDto } from './dtos/update-produtos.dto';
import { ProdutosService } from './produtos.service';
import { Produto } from './interfaces/produtos.interface';
export declare class ProdutosController {
    private readonly produtosService;
    private readonly logger;
    constructor(produtosService: ProdutosService);
    criarProduto(createProdutoDto: CreateProdutoDto): Promise<Produto>;
    consultarProduto(): Promise<Produto[]>;
    consultarProdutoKey(_id: string): Promise<Produto[] | Produto>;
    atualizarProduto(updateProdutoDto: UpdateProdutoDto, _id: string): Promise<void>;
    deletarProduto(_id: string): Promise<void>;
}
