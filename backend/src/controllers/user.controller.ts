import { Request, Response } from "express";
import * as cache from "memory-cache";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserController {
  static async getAllUser(req: Request, res: Response) {
    const data = cache.get("data");
    if (data) {
      console.log("serving from cache");
      return res.status(200).json({
        data,
      });
    } else {
      console.log("serving from db");
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.find();
      cache.put("data", users, 10000);
      return res.status(200).json({
        data: users,
      });
    }
  }
}
