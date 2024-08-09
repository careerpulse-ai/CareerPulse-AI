import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { RoleResquest } from "../dao/role.dao";
import { RoleResponce } from "../dto/role.dto";

export class RoleController {
  static async getAllRoles(req: Request, res: Response) {
    try {
      console.log("serving from contorller");
      const roles = await RoleService.getAllroles();
      return res.status(200).json({
        data: roles,
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }

  static async createRole(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const create_role: RoleResquest = { name: name };
      console.log("serving from contorller");
      const created_role = await RoleService.createRole(create_role);
      const response: RoleResponce = {
        role_name: created_role.name,
        created_on: created_role.created_on,
        updated_on: created_role.updated_on,
      };
      return res.status(200).json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }

  static async updateRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const create_role: RoleResquest = { name: name };
      console.log("serving from contorller");
      const updated_role = await RoleService.updateRole(id, create_role);
      const response: RoleResponce = {
        role_name: updated_role.name,
        created_on: updated_role.created_on,
        updated_on: updated_role.updated_on,
      };
      return res.status(200).json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }

  static async deleteRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log("serving from contorller");
      const updated_role = await RoleService.deleteRole(id);
      const response = {
        "Delete Task": "Success",
      };
      return res.status(200).json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }
}
