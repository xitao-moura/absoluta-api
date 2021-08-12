import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Status extends BaseEntity {
    id: number;
    nome: string;
    grupo: string;
    cor: string;
    descricao: string;
    created: Date;
    modified: Date;
    indicacao: Indicacao[];
}
