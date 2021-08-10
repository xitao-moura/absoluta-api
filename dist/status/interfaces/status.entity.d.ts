import { BaseEntity } from 'typeorm';
export declare class Status extends BaseEntity {
    id: number;
    nome: string;
    grupo: string;
    cor: string;
    descricao: string;
    created: Date;
    modified: Date;
}
