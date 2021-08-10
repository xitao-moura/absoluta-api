import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { ProdutoSchema } from './interfaces/produtos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Produto', schema: ProdutoSchema}])
  ],
  exports: [ProdutosService],
  controllers: [ProdutosController],
  providers: [ProdutosService]
})
export class ProdutosModule {}
