import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import * as entities from '../entities'

export class AppDataSource {
    private static AppDataSource: DataSource

    static async getConnection() {
        if (!this.AppDataSource) {
            const config: DataSourceOptions = {
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "db",
                // synchronize: true,
                logging: true,
                entities: Object.keys(entities).map(key => entities[key])
            }
            this.AppDataSource = new DataSource(config)
            await this.AppDataSource.initialize()
        }

        return this.AppDataSource
    }

}