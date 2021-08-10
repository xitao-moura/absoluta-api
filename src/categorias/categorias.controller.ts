import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateCategoriaDto } from './dtos/create-categorias.dto';
import { UpdateCategoriaDto } from './dtos/update-categorias.dto'
import { CategoriasService } from './categorias.service';
import { Categoria } from './interfaces/categorias.interface';

@Controller('v1/categorias')
export class CategoriasController {

    private readonly logger = new Logger(CategoriasController.name);

    constructor(private readonly categoriasService: CategoriasService) {}

    @Post()
    async criarCategoria(
        @Body() createCategoriaDto: CreateCategoriaDto
    ): Promise<Categoria>{
        return await this.categoriasService.criarCategoria(createCategoriaDto)
    }

    @Get()
    async consultarCategoria(): Promise<Categoria[]> {
        return await this.categoriasService.consultarTodosCategoria();
    }

    @Get('/:_id')
    async consultarCategoriaKey(@Param('_id') _id: string): Promise<Categoria[] | Categoria> {
        return await this.categoriasService.consultarCategoriaKey(_id);
    }

    @Put('/:_id')
    async atualizarCategoria(
        @Body() updateCategoriaDto: UpdateCategoriaDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateCategoriaDto: ${JSON.stringify(updateCategoriaDto)}`);
        await this.categoriasService.atualizarCategoria(_id,updateCategoriaDto)
    }

    @Delete('/:_id')
    async deletarCategoria(
        @Param('_id') _id: string): Promise<void>{
        this.categoriasService.deletarCategoria(_id)
    }

}