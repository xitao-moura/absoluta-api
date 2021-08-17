import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfissaoDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    status_id: string
    updatedAt: Date
}