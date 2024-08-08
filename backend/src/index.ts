import { AppDataSource } from "./data-source"
import * as dotenv from "dotenv";
import * as express from "express";
import { Request, Response } from "express";
import "reflect-metadata";
import { errorHandler } from "./middleware/error.middleware";
import { userRouter } from "./routes/user.routes";
dotenv.config();



const app = express();
app.use(express.json());
app.use(errorHandler);
const { PORT = 3000 } = process.env;
app.use('/api',userRouter);


AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
