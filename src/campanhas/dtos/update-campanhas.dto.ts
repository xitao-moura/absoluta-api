import { ApiProperty } from '@nestjs/swagger';
import { Status } from 'src/status/interfaces/status.interface'

export class UpdateCampanhaDto {
    @ApiProperty()
    nome: string
    @ApiProperty()
    mensagem: string
    @ApiProperty()
    status: string
    @ApiProperty()
    data_inicio: Date
    @ApiProperty()
    data_final: Date
    @ApiProperty()
    horarios: [Date]
    @ApiProperty()
    indicacoes: [number]
    updatedAt: Date
}