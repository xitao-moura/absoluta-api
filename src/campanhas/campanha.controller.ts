import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateCampanhaDto } from './dtos/create-campanhas.dto';
import { UpdateCampanhaDto } from './dtos/update-campanhas.dto'
import { CampanhasService } from './campanhas.service';
import { Campanha } from './interfaces/campanhas.interface';

@Controller('v1/campanhas')
export class CampanhasController {

    private readonly logger = new Logger(CampanhasController.name);

    constructor(private readonly campanhasService: CampanhasService) {}

    @Post()
    async criarCampanha(
        @Body() createCampanhaDto: CreateCampanhaDto
    ): Promise<Campanha>{
        return await this.campanhasService.criarCampanha(createCampanhaDto)
    }

    @Get()
    async consultarCampanha(): Promise<Campanha[]> {
        return await this.campanhasService.consultarTodosCampanha();
    }

    @Get('/:_id')
    async consultarCampanhaKey(@Param('_id') _id: string): Promise<Campanha[] | Campanha> {
        return await this.campanhasService.consultarCampanhaKey(_id);
    }

    @Put('/:_id')
    async atualizarCampanha(
        @Body() updateCampanhaDto: UpdateCampanhaDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateCampanhaDto: ${JSON.stringify(updateCampanhaDto)}`);
        await this.campanhasService.atualizarCampanha(_id,updateCampanhaDto)
    }

    @Delete('/:_id')
    async deletarCampanha(
        @Param('_id') _id: string): Promise<void>{
        this.campanhasService.deletarCampanha(_id)
    }

}