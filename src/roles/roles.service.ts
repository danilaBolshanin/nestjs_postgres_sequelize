import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.create(createRoleDto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }

  async findAllRoles() {
    return `This action returns all roles`;
  }

  async findOneRole(id: number) {
    return `This action returns a #${id} role`;
  }

  async updateRole(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  async removeRole(id: number) {
    return `This action removes a #${id} role`;
  }
}
