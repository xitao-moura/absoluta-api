import { ApiProperty } from '@nestjs/swagger';

export class UpdateProdutoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    valor: Number
    @ApiProperty()
    tipo: string
    @ApiProperty()
    categoria: string
    @ApiProperty()
    status: string
    @ApiProperty()
    fornecedor: string
    updatedAt: Date
}