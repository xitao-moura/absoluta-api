import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecosDto {
    @ApiProperty()
    indicacao_id: number
    rua: string
    num: string
    complemento: string
    bairro: string
    cep: string
    cidade_id: number
    estado_id: number
    latitude: string
    longitude: string
    createdAt: Date
    updatedAt: Date
}