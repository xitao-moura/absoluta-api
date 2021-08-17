import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';

@Entity('profissoes')
export class Profissoes extends BaseEntity {
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
        type: "int"
    })
    status_id: number

    @OneToMany(type => Indicacao, indicacao => indicacao.profissao)
    indicacao: Indicacao[];
}