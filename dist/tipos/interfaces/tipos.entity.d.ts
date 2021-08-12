import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Tipos extends BaseEntity {
    id: number;
    nome: string;
    grupo: string;
    created: Date;
    modified: Date;
    indicacao: Indicacao[];
}
