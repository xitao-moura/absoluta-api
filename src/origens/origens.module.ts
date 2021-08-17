import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrigensController } from './origens.controller';
import { OrigensService } from './origens.service';
import { OrigensSchema } from './interfaces/origens.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Origens } from './interfaces/origens.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Origens', schema: OrigensSchema}]),
    TypeOrmModule.forFeature([Origens])
  ],
  exports: [OrigensService],
  controllers: [OrigensController],
  providers: [OrigensService]
})
export class OrigensModule {}
