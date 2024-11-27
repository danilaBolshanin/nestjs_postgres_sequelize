import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'email@email.email', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: 'superpassword', description: 'Password' })
  readonly password: string;
}
