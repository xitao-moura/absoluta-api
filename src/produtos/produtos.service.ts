import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateProdutoDto } from './dtos/create-produtos.dto'
import { UpdateProdutoDto } from './dtos/update-produtos.dto'
import { Produto } from './interfaces/produtos.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ProdutosService {

    constructor(
        @InjectModel('Produto') private readonly produtosModel: Model<Produto>
    ) {}

    private readonly logger = new Logger(ProdutosService.name);

    async criarProduto(createProdutoDto: CreateProdutoDto): Promise<any> {
        const produtoCriado = new this.produtosModel(createProdutoDto)
        produtoCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarProduto(_id: string, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
        const produtoCriado = await this.produtosModel.findOne({_id}).exec()
        if(!produtoCriado){
            throw new BadRequestException(`Produto com o _id ${_id} não encontrado`)
        }
        return await this.produtosModel.findOneAndUpdate({_id: _id},{$set: updateProdutoDto}).exec()
    }

    async consultarTodosProduto(): Promise<Produto[]> {
        return await this.produtosModel.find().exec()
    }

    async consultarProdutoKey(_id: string): Promise<Produto> {
        const produtoCriado = await this.produtosModel.findOne({_id}).exec()
        if(!produtoCriado){
            throw new BadRequestException(`Produto com o _id ${_id} não encontrado`)
        }
        return await this.produtosModel.findOne({_id}).exec()
    }

    async deletarProduto(_id: string): Promise<any> {
        const produtoCriado = await this.produtosModel.findOne({_id}).exec()
        if(!produtoCriado){
            throw new BadRequestException(`Produto com o _id ${_id} não encontrado`)
        }
        await this.produtosModel.deleteOne({_id}).exec()
    }

}