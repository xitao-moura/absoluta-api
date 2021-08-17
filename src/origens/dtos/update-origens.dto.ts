import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrigensDto {
    @ApiProperty()
    nome: string
    updatedAt: Date
}