import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateProdutoDto } from './dtos/create-produtos.dto';
import { UpdateProdutoDto } from './dtos/update-produtos.dto'
import { ProdutosService } from './produtos.service';
import { Produto } from './interfaces/produtos.interface';

@Controller('v1/produtos')
export class ProdutosController {

    private readonly logger = new Logger(ProdutosController.name);

    constructor(private readonly produtosService: ProdutosService) {}

    @Post()
    async criarProduto(
        @Body() createProdutoDto: CreateProdutoDto
    ): Promise<Produto>{
        return await this.produtosService.criarProduto(createProdutoDto)
    }

    @Get()
    async consultarProduto(): Promise<Produto[]> {
        return await this.produtosService.consultarTodosProduto();
    }

    @Get('/:_id')
    async consultarProdutoKey(@Param('_id') _id: string): Promise<Produto[] | Produto> {
        return await this.produtosService.consultarProdutoKey(_id);
    }

    @Put('/:_id')
    async atualizarProduto(
        @Body() updateProdutoDto: UpdateProdutoDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateProdutoDto: ${JSON.stringify(updateProdutoDto)}`);
        await this.produtosService.atualizarProduto(_id,updateProdutoDto)
    }

    @Delete('/:_id')
    async deletarProduto(
        @Param('_id') _id: string): Promise<void>{
        this.produtosService.deletarProduto(_id)
    }

}