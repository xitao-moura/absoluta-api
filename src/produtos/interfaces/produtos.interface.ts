import { Document } from 'mongoose'

export interface Produto extends Document {
    nome: string,
    valor: Number
    tipo: string,
    categoria: string,
    status: string,
    fornecedor: string,
    createdAt: Date,
    updatedAt: Date
}