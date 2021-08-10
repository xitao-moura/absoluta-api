import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { CreateStatusDto } from './dtos/create-status.dto'
import { UpdateStatusDto } from './dtos/update-status.dto'
//import { Status } from './interfaces/status.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { InjectRepository } from '@nestjs/typeorm'
import { Status } from './interfaces/status.entity'
import { Repository } from 'typeorm'

@Injectable()
export class StatusService {

    constructor(
        //@InjectModel('Status') private readonly statusModel: Model<Status>,
        @InjectRepository(Status) private indicacaoRepository: Repository<Status>,
    ) {}

    private readonly logger = new Logger(StatusService.name);

    // async criarStatus(createStatusDto: CreateStatusDto): Promise<any> {
    //     const vinculoCriado = new this.statusModel(createStatusDto)
    //     vinculoCriado.save( (error, doc) => {
    //         console.log(doc)
    //     })
    // }

    // async atualizarStatus(_id: string, updateStatusDto: UpdateStatusDto): Promise<Status> {
    //     const statusEncontrado = await this.statusModel.findOne({_id}).exec()
    //     if(!statusEncontrado){
    //         throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
    //     }
    //     return await this.statusModel.findOneAndUpdate({_id: _id},{$set: updateStatusDto}).exec()
    // }

    async consultarTodosStatus(): Promise<Status[]> {
        return await this.indicacaoRepository.find()
    }

    async consultarStatusKey(_id: string): Promise<Status> {
        const statusEncontrado = await this.indicacaoRepository.findOne({
            where: {
                id: _id
            }
        })
        if(!statusEncontrado){
            throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
        }
        return await this.indicacaoRepository.findOne({
            where: {
                id: _id
            }
        })
    }

    // async deletarStatus(_id: string): Promise<any> {
    //     const statusEncontrado = await this.statusModel.findOne({_id}).exec()
    //     if(!statusEncontrado){
    //         throw new BadRequestException(`Status com o _id ${_id} não encontrado`)
    //     }
    //     await this.statusModel.deleteOne({_id}).exec()
    // }

}