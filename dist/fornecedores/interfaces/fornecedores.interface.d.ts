import { Document } from 'mongoose';
export interface Fornecedor extends Document {
    nome: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}
