import { Document } from 'mongoose'

export interface Origem extends Document {
    nome: string,
    status: Number,
    createdAt: Date,
    updatedAt: Date
}