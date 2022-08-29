import { Controller, Get } from '@nestjs/common';

@Controller('typeorm')
export class TypeormController {
  @Get()
  async hello() {
    return 'hello world';
  }
}
