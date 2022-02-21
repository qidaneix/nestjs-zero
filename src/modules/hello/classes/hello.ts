import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'Kitty', description: 'name of cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'age of cat' })
  age: number;

  @ApiProperty({
    example: 'ok',
    description: 'bbbb',
  })
  breed: string;

  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
