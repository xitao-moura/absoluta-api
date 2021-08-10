import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FornecedoresController } from './fornecedores.controller';
import { FornecedoresService } from './fornecedores.service';
import { FornecedorSchema } from './interfaces/fornecedores.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Fornecedor', schema: FornecedorSchema}])
  ],
  exports: [FornecedoresService],
  controllers: [FornecedoresController],
  providers: [FornecedoresService]
})
export class FornecedoresModule {}
