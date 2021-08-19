import { BaseEntity } from 'typeorm';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';
export declare class Vendas extends BaseEntity {
    id: number;
    indicacao_id: number;
    operadora_id: number;
    tipo_id: number;
    categoria_id: number;
    produto: string;
    valor: string;
    aniversario_apolice_mes: string;
    aniversario_apolice_ano: string;
    vigencia: Date;
    created: Date;
    modified: Date;
    indicacao: Indicacao;
}
