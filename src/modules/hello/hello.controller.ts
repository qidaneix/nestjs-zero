import {
  Controller,
  Get,
  Post,
  Put,
  Query,
  Delete,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiBearerAuth,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { HelloService } from './hello.service';
import { Hello, UserRole } from './classes/hello';

// CURD
@ApiBearerAuth()
@ApiTags('hello')
@Controller('/hello')
export class HelloController {
  // 依赖注入
  constructor(private readonly helloService: HelloService) {}

  // read 查询
  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    description: '...',
    type: Hello,
  })
  fetch(@Query() { id }, @Headers('token') token): string {
    console.log(token);
    return this.helloService.fetch(id);
  }

  // create 创建
  @Post()
  @ApiBody({ description: 'xxxx' })
  // body 默认格式content-type:x-www-form-urlencoded 或者 application/json
  save(@Body() { message }): string {
    return this.helloService.save(message);
  }

  // update 更新
  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '啰嗦' })
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  // delete 删除
  @Delete()
  remove(@Query() { id }): string {
    return this.helloService.remove(id);
  }
}
