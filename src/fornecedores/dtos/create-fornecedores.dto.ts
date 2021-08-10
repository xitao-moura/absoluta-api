import { ApiProperty } from '@nestjs/swagger';

export class CreateFornecedorDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    createdAt: Date
    updatedAt: Date
}