import express = require("express");
import { UserController } from "../controllers/user.controller";

const Router = express.Router()


Router.get(
  '/users',
  UserController.getAllUser
  )

  export {Router as userRouter}