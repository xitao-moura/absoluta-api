import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrigensController } from './origens.controller';
import { OrigensService } from './origens.service';
import { OrigemSchema } from './interfaces/origens.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Origem', schema: OrigemSchema}])
  ],
  exports: [OrigensService],
  controllers: [OrigensController],
  providers: [OrigensService]
})
export class OrigensModule {}
