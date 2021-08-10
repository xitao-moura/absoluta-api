import { Document } from 'mongoose'

export interface User extends Document {
    nome: string,
    email: string,
    password: string,
    tipo: string,
    status: string
    createdAt: Date,
    updatedAt: Date,
}