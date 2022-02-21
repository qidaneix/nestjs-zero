import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleGuardService } from './role-guard.service';

@ApiBearerAuth()
@ApiTags('role-guard')
@UseGuards(RolesGuard)
@Controller('/role-guard')
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  @Get()
  @Roles('admin')
  fetch(@Query() { id }): string {
    return this.roleGuardService.fetch(id);
  }
}
