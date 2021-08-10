import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateProfissaoDto } from './dtos/create-profissoes.dto'
import { UpdateProfissaoDto } from './dtos/update-profissoes.dto'
import { Profissao } from './interfaces/profissoes.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ProfissoesService {

    constructor(
        @InjectModel('Profissao') private readonly profissoesModel: Model<Profissao>
    ) {}

    private readonly logger = new Logger(ProfissoesService.name);

    async criarProfissao(createProfissaoDto: CreateProfissaoDto): Promise<any> {
        const origemCriado = new this.profissoesModel(createProfissaoDto)
        origemCriado.save( (error, doc) => {
            console.log(doc)
        })
    }

    async atualizarProfissao(_id: string, updateProfissaoDto: UpdateProfissaoDto): Promise<Profissao> {
        const origemCriado = await this.profissoesModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Profissao com o _id ${_id} não encontrado`)
        }
        return await this.profissoesModel.findOneAndUpdate({_id: _id},{$set: updateProfissaoDto}).exec()
    }

    async consultarTodosProfissao(): Promise<Profissao[]> {
        return await this.profissoesModel.find().exec()
    }

    async consultarProfissaoKey(_id: string): Promise<Profissao> {
        const origemCriado = await this.profissoesModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Profissao com o _id ${_id} não encontrado`)
        }
        return await this.profissoesModel.findOne({_id}).exec()
    }

    async deletarProfissao(_id: string): Promise<any> {
        const origemCriado = await this.profissoesModel.findOne({_id}).exec()
        if(!origemCriado){
            throw new BadRequestException(`Profissao com o _id ${_id} não encontrado`)
        }
        await this.profissoesModel.deleteOne({_id}).exec()
    }

}