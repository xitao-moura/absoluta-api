import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateStatusDto } from './dtos/create-status.dto';
import { UpdateStatusDto } from './dtos/update-status.dto'
import { StatusService } from './status.service';
import { Status } from './interfaces/status.interface';

@Controller('v1/status')
export class StatusController {

    private readonly logger = new Logger(StatusController.name);

    constructor(private readonly statusService: StatusService) {}

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