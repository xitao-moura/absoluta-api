import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateFornecedorDto } from './dtos/create-fornecedores.dto';
import { UpdateFornecedorDto } from './dtos/update-fornecedores.dto'
import { FornecedoresService } from './fornecedores.service';
import { Fornecedor } from './interfaces/fornecedores.interface';

@Controller('v1/fornecedores')
export class FornecedoresController {

    private readonly logger = new Logger(FornecedoresController.name);

    constructor(private readonly fornecedoresService: FornecedoresService) {}

    @Post()
    async criarFornecedor(
        @Body() createFornecedorDto: CreateFornecedorDto
    ): Promise<Fornecedor>{
        return await this.fornecedoresService.criarFornecedor(createFornecedorDto)
    }

    @Get()
    async consultarFornecedor(): Promise<Fornecedor[]> {
        return await this.fornecedoresService.consultarTodosFornecedor();
    }

    @Get('/:_id')
    async consultarFornecedorKey(@Param('_id') _id: string): Promise<Fornecedor[] | Fornecedor> {
        return await this.fornecedoresService.consultarFornecedorKey(_id);
    }

    @Put('/:_id')
    async atualizarFornecedor(
        @Body() updateFornecedorDto: UpdateFornecedorDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateFornecedorDto: ${JSON.stringify(updateFornecedorDto)}`);
        await this.fornecedoresService.atualizarFornecedor(_id,updateFornecedorDto)
    }

    @Delete('/:_id')
    async deletarFornecedor(
        @Param('_id') _id: string): Promise<void>{
        this.fornecedoresService.deletarFornecedor(_id)
    }

}