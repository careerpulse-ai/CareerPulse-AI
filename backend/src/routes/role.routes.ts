import express = require("express");
import { RoleController } from "../controllers/role.controller";

const Router = express.Router();

Router.get("/roles", RoleController.getAllRoles);

Router.post("/roles", RoleController.createRole);

Router.put("/roles/:id", RoleController.updateRole);

Router.delete("/roles/:id", RoleController.deleteRole);

export { Router as roleRouter };
