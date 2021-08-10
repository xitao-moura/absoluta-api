import { CreateCategoriaDto } from './dtos/create-categorias.dto';
import { UpdateCategoriaDto } from './dtos/update-categorias.dto';
import { Categoria } from './interfaces/categorias.interface';
import { Model } from 'mongoose';
export declare class CategoriasService {
    private readonly categoriasModel;
    constructor(categoriasModel: Model<Categoria>);
    private readonly logger;
    criarCategoria(createCategoriaDto: CreateCategoriaDto): Promise<any>;
    atualizarCategoria(_id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria>;
    consultarTodosCategoria(): Promise<Categoria[]>;
    consultarCategoriaKey(_id: string): Promise<Categoria>;
    deletarCategoria(_id: string): Promise<any>;
}
