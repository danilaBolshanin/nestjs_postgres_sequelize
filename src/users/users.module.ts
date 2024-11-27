import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { Role } from 'roles/entities/role.entity';
import { RolesModule } from 'roles/roles.module';
import { UserRoles } from 'roles/entities/user-roles.entity';
import { AuthModule } from 'auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    //so that there is no circular dependence
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
