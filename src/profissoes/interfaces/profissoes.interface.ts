import { Document } from 'mongoose'

export interface Profissao extends Document {
    nome: string,
    status_id: string
}