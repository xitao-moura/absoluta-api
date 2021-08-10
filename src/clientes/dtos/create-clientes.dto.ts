import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    sexo: string
    @ApiProperty()
    tipo_pessoa: number //fisica ou juridica
    @ApiProperty()
    tipo_cliente: string //master ou dependente
    @ApiProperty()
    master_id: string
    @ApiProperty()
    rg: number
    @ApiProperty()
    cpf: number
    @ApiProperty()
    cnpj: number
    @ApiProperty()
    inscricao: number
    @ApiProperty()
    data_nascimento: Date
    @ApiProperty()
    profissao: string
    createdAt: Date
    updatedAt: Date
}