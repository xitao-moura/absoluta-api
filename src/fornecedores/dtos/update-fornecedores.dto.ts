import { ApiProperty } from '@nestjs/swagger';

export class UpdateFornecedorDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    updatedAt: Date
}