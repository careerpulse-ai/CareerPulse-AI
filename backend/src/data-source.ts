import "reflect-metadata"
import { DataSource } from "typeorm"


const db_url = process.env.DB_URL

export const AppDataSource = new DataSource({
    type: "postgres",
    url:db_url,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
})
