import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateCidadeDto } from './dtos/create-cidades.dto';
import { UpdateCidadeDto } from './dtos/update-cidades.dto'
import { CidadesService } from './cidades.service';
import { Cidade } from './interfaces/cidades.interface';

@Controller('v1/cidades')
export class CidadesController {

    private readonly logger = new Logger(CidadesController.name);

    constructor(private readonly cidadesService: CidadesService) {}

    @Post()
    async criarCidade(
        @Body() createCidadeDto: CreateCidadeDto
    ): Promise<Cidade>{
        return await this.cidadesService.criarCidade(createCidadeDto)
    }

    @Get()
    async consultarCidade(): Promise<Cidade[]> {
        return await this.cidadesService.consultarTodosCidade();
    }

    @Get('/:_id')
    async consultarCidadeKey(@Param('_id') _id: string): Promise<Cidade[] | Cidade> {
        return await this.cidadesService.consultarCidadeKey(_id);
    }

    @Put('/:_id')
    async atualizarCidade(
        @Body() updateCidadeDto: UpdateCidadeDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateCidadeDto: ${JSON.stringify(updateCidadeDto)}`);
        await this.cidadesService.atualizarCidade(_id,updateCidadeDto)
    }

    @Delete('/:_id')
    async deletarCidade(
        @Param('_id') _id: string): Promise<void>{
        this.cidadesService.deletarCidade(_id)
    }

}