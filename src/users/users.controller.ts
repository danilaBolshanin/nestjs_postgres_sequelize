import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { Roles } from 'auth/roles.decorator';
import { RoleGuard } from 'auth/role.guard';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createuser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Add role to user' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  //@Roles('ADMIN')
  //@UseGuards(RoleGuard)
  @Post('/add_role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  @Post('/ban_user')
  banUser(@Body() dto: BanUserDto) {
    return this.usersService.banUser(dto);
  }
}
