import { Module } from '@nestjs/common';
import { TypeormController } from './typeorm.controller';
import { TypeormService } from './typeorm.service';

@Module({
  providers: [TypeormService],
  controllers: [TypeormController],
})
export class TypeormModule {}
