import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateClienteDto } from './dtos/create-clientes.dto'
import { UpdateClienteDto } from './dtos/update-clientes.dto'
import { Cliente } from './interfaces/clientes.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ClientesService {

    constructor(
        @InjectModel('Cliente') private readonly clientesModel: Model<Cliente>
    ) {}

    private readonly logger = new Logger(ClientesService.name);

    async criarCliente(createClienteDto: CreateClienteDto): Promise<any> {
        const clienteCriado = new this.clientesModel(createClienteDto)
        clienteCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarCliente(_id: string, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
        const clienteCriado = await this.clientesModel.findOne({_id}).exec()
        if(!clienteCriado){
            throw new BadRequestException(`Cliente com o _id ${_id} não encontrado`)
        }
        return await this.clientesModel.findOneAndUpdate({_id: _id},{$set: updateClienteDto}).exec()
    }

    async consultarTodosCliente(): Promise<Cliente[]> {
        return await this.clientesModel.find().exec()
    }

    async consultarClienteKey(_id: string): Promise<Cliente> {
        const clienteCriado = await this.clientesModel.findOne({_id}).exec()
        if(!clienteCriado){
            throw new BadRequestException(`Cliente com o _id ${_id} não encontrado`)
        }
        return await this.clientesModel.findOne({_id}).exec()
    }

    async deletarCliente(_id: string): Promise<any> {
        const clienteCriado = await this.clientesModel.findOne({_id}).exec()
        if(!clienteCriado){
            throw new BadRequestException(`Cliente com o _id ${_id} não encontrado`)
        }
        await this.clientesModel.deleteOne({_id}).exec()
    }

}