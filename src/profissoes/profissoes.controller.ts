import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateProfissaoDto } from './dtos/create-profissoes.dto';
import { UpdateProfissaoDto } from './dtos/update-profissoes.dto'
import { ProfissoesService } from './profissoes.service';
import { Profissao } from './interfaces/profissoes.interface';

@Controller('v1/profissoes')
export class ProfissoesController {

    private readonly logger = new Logger(ProfissoesController.name);

    constructor(private readonly profissoesService: ProfissoesService) {}

    @Post()
    async criarProfissao(
        @Body() createProfissaoDto: CreateProfissaoDto
    ): Promise<Profissao>{
        return await this.profissoesService.criarProfissao(createProfissaoDto)
    }

    @Get()
    async consultarProfissao(): Promise<Profissao[]> {
        return await this.profissoesService.consultarTodosProfissao();
    }

    @Get('/:_id')
    async consultarProfissaoKey(@Param('_id') _id: string): Promise<Profissao[] | Profissao> {
        return await this.profissoesService.consultarProfissaoKey(_id);
    }

    @Put('/:_id')
    async atualizarProfissao(
        @Body() updateProfissaoDto: UpdateProfissaoDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateProfissaoDto: ${JSON.stringify(updateProfissaoDto)}`);
        await this.profissoesService.atualizarProfissao(_id,updateProfissaoDto)
    }

    @Delete('/:_id')
    async deletarProfissao(
        @Param('_id') _id: string): Promise<void>{
        this.profissoesService.deletarProfissao(_id)
    }

}