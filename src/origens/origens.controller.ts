import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateOrigensDto } from './dtos/create-origens.dto';
import { UpdateOrigensDto } from './dtos/update-origens.dto'
import { OrigensService } from './origens.service';
import { Origem } from './interfaces/origens.interface';

@Controller('v1/origens')
export class OrigensController {

    private readonly logger = new Logger(OrigensController.name);

    constructor(private readonly statusService: OrigensService) {}

    // @Post()
    // async criarStatus(
    //     @Body() createStatusDto: CreateStatusDto
    // ): Promise<Status>{
    //     return await this.statusService.criarStatus(createStatusDto)
    // }

    @Get()
    async consultarStatus() {
        //return await this.statusService.consultarTodosStatus();
        return this.statusService.consultarTodosStatus();
    }

    @Get('/:_id')
    async consultarStatusKey(@Param('_id') _id: string) {
        return await this.statusService.consultarStatusKey(_id);
    }

    // @Put('/:_id')
    // async atualizarStatus(
    //     @Body() updateStatusDto: UpdateStatusDto,
    //     @Param('_id') _id: string
    // ): Promise<void> { 
    //     this.logger.log(`updateStatusDto: ${JSON.stringify(updateStatusDto)}`);
    //     await this.statusService.atualizarStatus(_id,updateStatusDto)
    // }

    // @Delete('/:_id')
    // async deletarStatus(
    //     @Param('_id') _id: string): Promise<void>{
    //     this.statusService.deletarStatus(_id)
    // }

}