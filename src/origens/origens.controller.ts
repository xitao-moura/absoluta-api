import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateOrigemDto } from './dtos/create-origens.dto';
import { UpdateOrigemDto } from './dtos/update-origens.dto'
import { OrigensService } from './origens.service';
import { Origem } from './interfaces/origens.interface';

@Controller('v1/origens')
export class OrigensController {

    private readonly logger = new Logger(OrigensController.name);

    constructor(private readonly origensService: OrigensService) {}

    @Post()
    async criarOrigem(
        @Body() createOrigemDto: CreateOrigemDto
    ): Promise<Origem>{
        return await this.origensService.criarOrigem(createOrigemDto)
    }

    @Get()
    async consultarOrigem(): Promise<Origem[]> {
        return await this.origensService.consultarTodosOrigem();
    }

    @Get('/:_id')
    async consultarOrigemKey(@Param('_id') _id: string): Promise<Origem[] | Origem> {
        return await this.origensService.consultarOrigemKey(_id);
    }

    @Put('/:_id')
    async atualizarOrigem(
        @Body() updateOrigemDto: UpdateOrigemDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateOrigemDto: ${JSON.stringify(updateOrigemDto)}`);
        await this.origensService.atualizarOrigem(_id,updateOrigemDto)
    }

    @Delete('/:_id')
    async deletarOrigem(
        @Param('_id') _id: string): Promise<void>{
        this.origensService.deletarOrigem(_id)
    }

}