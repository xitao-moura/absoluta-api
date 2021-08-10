import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfissaoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status: string
    updatedAt: Date
}