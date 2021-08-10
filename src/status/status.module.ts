import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { StatusSchema } from './interfaces/status.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './interfaces/status.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Status', schema: StatusSchema}]),
    TypeOrmModule.forFeature([Status])
  ],
  exports: [StatusService],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
