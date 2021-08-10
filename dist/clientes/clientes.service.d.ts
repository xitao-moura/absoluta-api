import { CreateClienteDto } from './dtos/create-clientes.dto';
import { UpdateClienteDto } from './dtos/update-clientes.dto';
import { Cliente } from './interfaces/clientes.interface';
import { Model } from 'mongoose';
export declare class ClientesService {
    private readonly clientesModel;
    constructor(clientesModel: Model<Cliente>);
    private readonly logger;
    criarCliente(createClienteDto: CreateClienteDto): Promise<any>;
    atualizarCliente(_id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    consultarTodosCliente(): Promise<Cliente[]>;
    consultarClienteKey(_id: string): Promise<Cliente>;
    deletarCliente(_id: string): Promise<any>;
}
