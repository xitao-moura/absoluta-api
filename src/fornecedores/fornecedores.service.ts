import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateFornecedorDto } from './dtos/create-fornecedores.dto'
import { UpdateFornecedorDto } from './dtos/update-fornecedores.dto'
import { Fornecedor } from './interfaces/fornecedores.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class FornecedoresService {

    constructor(
        @InjectModel('Fornecedor') private readonly fornecedoresModel: Model<Fornecedor>
    ) {}

    private readonly logger = new Logger(FornecedoresService.name);

    async criarFornecedor(createFornecedorDto: CreateFornecedorDto): Promise<any> {
        const fornecedorCriado = new this.fornecedoresModel(createFornecedorDto)
        fornecedorCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarFornecedor(_id: string, updateFornecedorDto: UpdateFornecedorDto): Promise<Fornecedor> {
        const fornecedorCriado = await this.fornecedoresModel.findOne({_id}).exec()
        if(!fornecedorCriado){
            throw new BadRequestException(`Fornecedor com o _id ${_id} não encontrado`)
        }
        return await this.fornecedoresModel.findOneAndUpdate({_id: _id},{$set: updateFornecedorDto}).exec()
    }

    async consultarTodosFornecedor(): Promise<Fornecedor[]> {
        return await this.fornecedoresModel.find().exec()
    }

    async consultarFornecedorKey(_id: string): Promise<Fornecedor> {
        const fornecedorCriado = await this.fornecedoresModel.findOne({_id}).exec()
        if(!fornecedorCriado){
            throw new BadRequestException(`Fornecedor com o _id ${_id} não encontrado`)
        }
        return await this.fornecedoresModel.findOne({_id}).exec()
    }

    async deletarFornecedor(_id: string): Promise<any> {
        const fornecedorCriado = await this.fornecedoresModel.findOne({_id}).exec()
        if(!fornecedorCriado){
            throw new BadRequestException(`Fornecedor com o _id ${_id} não encontrado`)
        }
        await this.fornecedoresModel.deleteOne({_id}).exec()
    }

}