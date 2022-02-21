import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';

@Module({
  providers: [ExceptionService],
  controllers: [ExceptionController],
})
export class ExceptionModule {}
