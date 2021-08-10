import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { ClienteSchema } from './interfaces/clientes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Cliente', schema: ClienteSchema}])
  ],
  exports: [ClientesService],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
