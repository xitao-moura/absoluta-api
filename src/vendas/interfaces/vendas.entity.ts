import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';

@Entity('vendas')
export class Vendas extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "int"
    })
    indicacao_id: number

    @Column({
        type: "int"
    })
    operadora_id: number

    @Column({
        type: "int"
    })
    tipo_id: number

    @Column({
        type: "int"
    })
    categoria_id: number

    @Column({
        type: "varchar",
        length: 255
    })
    produto: string

    @Column({
        type: "varchar",
        length: 255
    })
    valor: string

    @Column({
        type: "varchar",
        length: 255
    })
    aniversario_apolice_mes: string

    @Column({
        type: "varchar",
        length: 255
    })
    aniversario_apolice_ano: string

    @Column({
        type: "date"
    })
    vigencia: Date

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date

    @OneToOne(type => Indicacao)
    @JoinColumn({name: 'indicacao_id', referencedColumnName: 'id'})
    indicacao: Indicacao;
}