import { Document } from 'mongoose'

export interface Origem extends Document {
    nome: string,
    createdAt: Date,
    updatedAt: Date
}