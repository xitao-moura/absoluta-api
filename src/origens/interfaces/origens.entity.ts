import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';

@Entity('sites')
export class Origens extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 255
    })
    nome: string

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date

    @OneToMany(type => Indicacao, indicacao => indicacao.origem)
    indicacao: Indicacao[];
}