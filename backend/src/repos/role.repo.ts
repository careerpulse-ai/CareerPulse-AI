import { RoleResquest } from "../dao/role.dao";
import { AppDataSource } from "../data-source";
import { Role } from "../entity/Roles";

export class RoleRepository {

  static async getAllroles() {
    try {
      console.log("serving from getAllroles repository");
      const role_repository = AppDataSource.getRepository(Role);
      return await role_repository.find();
    } catch (error) {
      console.log("error fetching the roles", error);
    }
  }

  static async createRole(role: RoleResquest) {
    try {
      console.log("serving from createRole repository");
      const role_repository = AppDataSource.getRepository(Role);
      const newrole = await role_repository.create(role)
      return await role_repository.save(newrole);
    } catch (error) {
      console.log("error creating the  role", error);
    }
  }

  static async findRoleById(id) {
    try {
      console.log("serving from findRoleById repository");
      const role_repository = AppDataSource.getRepository(Role);
      return await role_repository.findOne({ where: { id } });
    } catch (error) {
      console.log("error finding the role", error);
    }
  }

  static async findRoleByname(name) {
    try {
      console.log("serving from findRoleByname repository");
      const role_repository = AppDataSource.getRepository(Role);
      return await role_repository.findOne({ where: { name } });
    } catch (error) {
      console.log("error finding the role", error);
    }
  }

  static async updateRole(id, role: RoleResquest) {
    try {
      console.log("serving from updateRole repository");
      const role_repository = AppDataSource.getRepository(Role);
      await role_repository.update(id, role);
      return await role_repository.findOne({ where: { id } });
    } catch (error) {
      console.log("error updating the role", error);
    }
  }
  static async deleteRole(id) {
    try {
      console.log("serving from deleteRole repository");
      const role_repository = AppDataSource.getRepository(Role);
      await role_repository.delete(id);
    } catch (error) {
      console.log("error updating the role", error);
    }
  }
}
