import * as cache from "memory-cache";
import { RoleRepository } from "../repos/role.repo";
import { RoleResquest } from "../dao/role.dao";

export class RoleService {
  static async getAllroles() {
    const data = cache.get("data");
    try {
      if (data) {
        console.log("serving from getAllroles cache");
        return data;
      } else {
        console.log("serving from  getAllroles service");
        const roles = await RoleRepository.getAllroles();
        cache.put("data", roles, 10000);
        return roles;
      }
    } catch (error) {
      console.log("error fetching the roles from getAllroles service", error);
    }
  }

  static async createRole(role: RoleResquest) {
    try {
      console.log("serving from createRole service");
      const role_obj = await RoleRepository.findRoleByname(role.name);
      if (role_obj) {
        throw new Error("Role already Exists");
      }
      const created_role = await RoleRepository.createRole(role);
      return created_role;
    } catch (error) {
      console.log("error fetching the roles from createRole service", error);
    }
  }

  static async updateRole(id, role: RoleResquest) {
    try {
      console.log("serving from updateRole service");

      const role_obj = await RoleRepository.findRoleById(id);
      if (!role_obj) {
        throw new Error("Role Not Exists");
      }
      const updated_role = await RoleRepository.updateRole(id, role);
      return updated_role;
    } catch (error) {
      console.log("error updating the roles from updateRole service", error);
    }
  }

  static async deleteRole(id) {
    try {
      console.log("serving from deleteRole service");

      const role_obj = await RoleRepository.findRoleById(id);
      if (!role_obj) {
        throw new Error("Role Not Exists");
      }
      await RoleRepository.deleteRole(id);
      return;
    } catch (error) {
      console.log("error updating the roles from deleteRole service", error);
    }
  }
}
