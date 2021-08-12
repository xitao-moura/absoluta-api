import { Document } from 'mongoose';
export interface Site extends Document {
    nome: string;
    status: Number;
    createdAt: Date;
    updatedAt: Date;
}
