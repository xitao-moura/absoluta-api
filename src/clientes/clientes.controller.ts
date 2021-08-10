import { Controller, Get, Post, Body, UseGuards, Logger, Param, Delete, Put } from '@nestjs/common';
import { CreateClienteDto } from './dtos/create-clientes.dto';
import { UpdateClienteDto } from './dtos/update-clientes.dto'
import { ClientesService } from './clientes.service';
import { Cliente } from './interfaces/clientes.interface';

@Controller('v1/clientes')
export class ClientesController {

    private readonly logger = new Logger(ClientesController.name);

    constructor(private readonly clientesService: ClientesService) {}

    @Post()
    async criarCliente(
        @Body() createClienteDto: CreateClienteDto
    ): Promise<Cliente>{
        return await this.clientesService.criarCliente(createClienteDto)
    }

    @Get()
    async consultarCliente(): Promise<Cliente[]> {
        return await this.clientesService.consultarTodosCliente();
    }

    @Get('/:_id')
    async consultarClienteKey(@Param('_id') _id: string): Promise<Cliente[] | Cliente> {
        return await this.clientesService.consultarClienteKey(_id);
    }

    @Put('/:_id')
    async atualizarCliente(
        @Body() updateClienteDto: UpdateClienteDto,
        @Param('_id') _id: string
    ): Promise<void> { 
        this.logger.log(`updateClienteDto: ${JSON.stringify(updateClienteDto)}`);
        await this.clientesService.atualizarCliente(_id,updateClienteDto)
    }

    @Delete('/:_id')
    async deletarCliente(
        @Param('_id') _id: string): Promise<void>{
        this.clientesService.deletarCliente(_id)
    }

}