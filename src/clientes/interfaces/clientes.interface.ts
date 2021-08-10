import { Document } from 'mongoose'

export interface Cliente extends Document {
    nome: string,
    tipo: string,
    createdAt: Date,
    updatedAt: Date
}