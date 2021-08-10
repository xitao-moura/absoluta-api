import { ApiProperty } from '@nestjs/swagger';

export class CreateProfissaoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    createdAt: Date
    updatedAt: Date
}