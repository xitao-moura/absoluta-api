import { CreateClienteDto } from './dtos/create-clientes.dto';
import { UpdateClienteDto } from './dtos/update-clientes.dto';
import { ClientesService } from './clientes.service';
import { Cliente } from './interfaces/clientes.interface';
export declare class ClientesController {
    private readonly clientesService;
    private readonly logger;
    constructor(clientesService: ClientesService);
    criarCliente(createClienteDto: CreateClienteDto): Promise<Cliente>;
    consultarCliente(): Promise<Cliente[]>;
    consultarClienteKey(_id: string): Promise<Cliente[] | Cliente>;
    atualizarCliente(updateClienteDto: UpdateClienteDto, _id: string): Promise<void>;
    deletarCliente(_id: string): Promise<void>;
}
