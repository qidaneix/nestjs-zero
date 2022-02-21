import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
  Param,
  Headers,
  // UseFilters,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody, ApiParam } from '@nestjs/swagger';
import { ExceptionService } from './exception.service';
// import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@ApiBearerAuth()
@ApiTags('exception')
// @UseFilters(new HttpExceptionFilter())
@Controller('/exception')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}

  @Get()
  fetch(@Query() { id }, @Headers('token') token): string {
    if (!id)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: '请求参数id必传',
          error: 'id is required',
        },
        HttpStatus.BAD_REQUEST,
      );
    return this.exceptionService.fetch(id);
  }

  @Post()
  @ApiBody({ description: '填写更新内容' })
  save(@Body() { message }): string {
    return this.exceptionService.save(message);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '请输入message' })
  // 管道转换参数类型。！注意：参数解构改为直接使用参数
  update(@Param('id', new ParseIntPipe()) id, @Body() { message }): string {
    console.log(typeof id);
    return this.exceptionService.update(id, message);
  }

  @Delete()
  remove(@Query() { id }): string {
    return this.exceptionService.remove(id);
  }
}
