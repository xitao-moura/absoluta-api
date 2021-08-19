import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { Indicacao } from 'src/indicacoes/interfaces/indicacoes.entity';

@Entity('enderecos')
export class Enderecos extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "int"
    })
    indicacao_id: number

    @Column({
        type: "varchar",
        length: 255
    })
    rua: string

    @Column({
        type: "varchar",
        length: 255
    })
    num: string

    @Column({
        type: "varchar",
        length: 255
    })
    complemento: string

    @Column({
        type: "varchar",
        length: 255
    })
    bairro: string

    @Column({
        type: "varchar",
        length: 255
    })
    cep: string

    @Column({
        type: "int"
    })
    cidade_id: number

    @Column({
        type: "int"
    })
    estado_id: number

    @Column({
        type: "varchar",
        length: 255
    })
    latitude: string

    @Column({
        type: "varchar",
        length: 255
    })
    longitude: string

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