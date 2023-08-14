import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiaristaController } from './diarista.controller';
import { Diarista } from './diarista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diarista])],
  controllers: [DiaristaController],
})
export class DiaristaModule {}
