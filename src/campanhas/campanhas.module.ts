import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampanhasController } from './campanha.controller';
import { CampanhasService } from './campanhas.service';
import { CampanhaSchema } from './interfaces/campanhas.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Campanha', schema: CampanhaSchema}])
  ],
  exports: [CampanhasService],
  controllers: [CampanhasController],
  providers: [CampanhasService]
})
export class CampanhasModule {}
