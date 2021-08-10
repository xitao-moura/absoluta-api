import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateOrigemDto } from './dtos/create-origens.dto'
import { UpdateOrigemDto } from './dtos/update-origens.dto'
import { Origem } from './interfaces/origens.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class OrigensService {

    constructor(
        @InjectModel('Origem') private readonly origensModel: Model<Origem>
    ) {}

    private readonly logger = new Logger(OrigensService.name);

    async criarOrigem(createOrigemDto: CreateOrigemDto): Promise<any> {
        const origemCriado = new this.origensModel(createOrigemDto)
        origemCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarOrigem(_id: string, updateOrigemDto: UpdateOrigemDto): Promise<Origem> {
        const origemCriado = await this.origensModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Origem com o _id ${_id} não encontrado`)
        }
        return await this.origensModel.findOneAndUpdate({_id: _id},{$set: updateOrigemDto}).exec()
    }

    async consultarTodosOrigem(): Promise<Origem[]> {
        return await this.origensModel.find().exec()
    }

    async consultarOrigemKey(_id: string): Promise<Origem> {
        const origemCriado = await this.origensModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Origem com o _id ${_id} não encontrado`)
        }
        return await this.origensModel.findOne({_id}).exec()
    }

    async deletarOrigem(_id: string): Promise<any> {
        const origemCriado = await this.origensModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Origem com o _id ${_id} não encontrado`)
        }
        await this.origensModel.deleteOne({_id}).exec()
    }

}