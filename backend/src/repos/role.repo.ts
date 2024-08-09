import { RoleResquest } from "../dao/role.dao";
import { AppDataSource } from "../data-source";
import { Role } from "../entity/Roles";

export class RoleRepository {
  static role_repository;

  constructor() {
    RoleRepository.role_repository = AppDataSource.getRepository(Role);
  }

  static async getAllroles() {
    try {
      console.log("serving from repository");
      return await this.role_repository.find();
    } catch (error) {
      console.log("error fetching the roles", error);
    }
  }

  static async createRole(role: RoleResquest) {
    try {
      console.log("serving from repository");
      const newrole = await this.role_repository.create(role);
      return await this.role_repository.save(newrole);
    } catch (error) {
      console.log("error creating the role", error);
    }
  }

  static async findRoleById(id) {
    try {
      console.log("serving from repository");
      return await this.role_repository.findOne({ where: { id } });
    } catch (error) {
      console.log("error finding the role", error);
    }
  }

  static async findRoleByname(name) {
    try {
      console.log("serving from repository");
      return await this.role_repository.findOne({ where: { name } });
    } catch (error) {
      console.log("error finding the role", error);
    }
  }

  static async updateRole(id, role: RoleResquest) {
    try {
      console.log("serving from repository");
      await this.role_repository.update(id, role);
      return await this.role_repository.findOne({ where: { id } });
    } catch (error) {
      console.log("error updating the role", error);
    }
  }
  static async deleteRole(id) {
    try {
      console.log("serving from repository");
      await this.role_repository.delete(id);
    } catch (error) {
      console.log("error updating the role", error);
    }
  }
}
