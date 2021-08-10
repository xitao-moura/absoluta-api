import { Document } from 'mongoose'
import { Status } from 'src/status/interfaces/status.interface';

export interface Campanha extends Document {
    nome: string,
    mensagem: string,
    status: string,
    data_inicio: Date,
    data_final: Date,
    horarios: [Date],
    indicacoes: [number],
    createdAt: Date,
    updatedAt: Date,
}