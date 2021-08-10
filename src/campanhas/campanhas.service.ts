import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateCampanhaDto } from './dtos/create-campanhas.dto'
import { UpdateCampanhaDto } from './dtos/update-campanhas.dto'
import { Campanha } from './interfaces/campanhas.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class CampanhasService {

    constructor(
        @InjectModel('Campanha') private readonly campanhasModel: Model<Campanha>
    ) {}

    private readonly logger = new Logger(CampanhasService.name);

    async criarCampanha(createCampanhaDto: CreateCampanhaDto): Promise<any> {
        console.log(createCampanhaDto)
        const campanhaCriado = new this.campanhasModel(createCampanhaDto)
        campanhaCriado.save( (error, doc) => {
            console.log(error)
            console.log(doc)
        })
    }

    async atualizarCampanha(_id: string, updateCampanhaDto: UpdateCampanhaDto): Promise<Campanha> {
        const campanhaCriado = await this.campanhasModel.findOne({_id}).exec()
        if(!campanhaCriado){
            throw new BadRequestException(`Campanha com o _id ${_id} não encontrado`)
        }
        return await this.campanhasModel.findOneAndUpdate({_id: _id},{$set: updateCampanhaDto}).exec()
    }

    async consultarTodosCampanha(): Promise<Campanha[]> {
        return await this.campanhasModel.find().populate('status').exec()
    }

    async consultarCampanhaKey(_id: string): Promise<Campanha> {
        const campanhaCriado = await this.campanhasModel.findOne({_id}).exec()
        if(!campanhaCriado){
            throw new BadRequestException(`Campanha com o _id ${_id} não encontrado`)
        }
        return await this.campanhasModel.findOne({_id}).populate('status').exec()
    }

    async deletarCampanha(_id: string): Promise<any> {
        const campanhaCriado = await this.campanhasModel.findOne({_id}).exec()
        if(!campanhaCriado){
            throw new BadRequestException(`Campanha com o _id ${_id} não encontrado`)
        }
        await this.campanhasModel.deleteOne({_id}).exec()
    }

    async sendSms(_id: string): Promise<Campanha>{
        return
    }

}