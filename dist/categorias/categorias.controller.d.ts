import { CreateCategoriaDto } from './dtos/create-categorias.dto';
import { UpdateCategoriaDto } from './dtos/update-categorias.dto';
import { CategoriasService } from './categorias.service';
import { Categoria } from './interfaces/categorias.interface';
export declare class CategoriasController {
    private readonly categoriasService;
    private readonly logger;
    constructor(categoriasService: CategoriasService);
    criarCategoria(createCategoriaDto: CreateCategoriaDto): Promise<Categoria>;
    consultarCategoria(): Promise<Categoria[]>;
    consultarCategoriaKey(_id: string): Promise<Categoria[] | Categoria>;
    atualizarCategoria(updateCategoriaDto: UpdateCategoriaDto, _id: string): Promise<void>;
    deletarCategoria(_id: string): Promise<void>;
}
