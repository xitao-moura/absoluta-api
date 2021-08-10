import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity('indicacoes')
export class Indicacao extends BaseEntity {
    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "int"
    })
    status_id: number

    @Column({
        type: "int"
    })
    tipo_id: number

    @Column({
        type: "int"
    })
    indicacao_tipo_id: number

    @Column({
        type: "int"
    })
    site_id: number

    @Column({
        type: "int"
    })
    profissao_id: number

    @Column({
        type: "int"
    })
    editar: number

    @Column({
        type: "varchar",
        length: 255
    })
    qualidade: string

    @Column({
        type: "varchar",
        length: 255
    })
    segmento: string

    @Column({
        type: "varchar",
        length: 255
    })
    nome: string

    @Column({
        type: "varchar",
        length: 255
    })
    cpf: string

    @Column({
        type: "varchar",
        length: 255
    })
    cnpj: string

    @Column({
        type: "varchar",
        length: 255
    })
    email: string

    @Column({
        type: "bit"
    })
    telefone: number
    
    @Column({
        type: "bit"
    })
    ddd_telefone2: number

    @Column({
        type: "bit"
    })
    telefone2: number

    @Column({
        type: "bit"
    })
    ddd_telefone3: number

    @Column({
        type: "bit"
    })
    telefone3: number

    @Column({
        type: "varchar",
        length: 255
    })
    telefone4: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone5: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone6: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone7: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone8: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone9: string

    @Column({
        type: "varchar",
        length: 255
    })
    telefone10: string

    @Column({
        type: "varchar",
        length: 255
    })
    email2: string

    @Column({
        type: "varchar",
        length: 255
    })
    email3: string

    @Column({
        type: "varchar",
        length: 255
    })
    email4: string

    @Column({
        type: "varchar",
        length: 255
    })
    email5: string

    @Column({
        type: "varchar",
        length: 255
    })
    email6: string

    @Column({
        type: "varchar",
        length: 255
    })
    email7: string

    @Column({
        type: "varchar",
        length: 255
    })
    email8: string

    @Column({
        type: "bit"
    })
    ddd_telefone: number

    @Column({
        type: "bit"
    })
    ddd_celular: number

    @Column({
        type: "bit"
    })
    celular: number

    @Column({
        type: "varchar",
        length: 255
    })
    tel_original: string

    @Column({
        type: "varchar",
        length: 255
    })
    cel_original: string

    @Column({
        type: "int"
    })
    operadora_cel: number

    @Column({
        type: "varchar",
        length: 255
    })
    idade: string

    @Column({
        type: "date"
    })
    data_nascimento: Date

    @Column({
        type: "date"
    })
    data_nascimento2: Date

    @Column({
        type: "double",
        precision: 10,
        scale: 2,
        default: 0
    })
    valor_minimo: string

    @Column({
        type: "double",
        precision: 10,
        scale: 2,
        default: 0
    })
    valor_maximo: string

    @Column({
        type: "int"
    })
    acomodacao: number

    @Column({
        type: "varchar",
        length: 255
    })
    outra_profissao: string

    @Column({
        type: "int"
    })
    por_telefone: number

    @Column({
        type: "text"
    })
    message: string

    @Column({
        type: "text"
    })
    msg_contato: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_1: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_2: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_3: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_4: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_5: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_6: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_7: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_8: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_9: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_10: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_11: string

    @Column({
        type: "varchar",
        length: 255
    })
    dependente_12: string

    @Column({
        type: "int"
    })
    edicao: number

    @Column({
        type: "varchar",
        length: 255
    })
    origem_original: string

    @Column({
        type: "varchar",
        length: 255
    })
    base_original: string

    @Column({
        type: "varchar",
        length: 255
    })
    status_original: string

    @Column({
        type: "int"
    })
    id_importacao: number

    @Column({
        type: "text"
    })
    mensagem: string

    @Column({
        type: "int"
    })
    copy: number

    @Column({
        type: "int"
    })
    atualizado: number

    @Column({
        type: "date"
    })
    created: Date

    @Column({
        type: "date"
    })
    modified: Date
}