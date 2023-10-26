import { AppDataSource } from "../connection/mysql"
import { Product } from "../entities"


export const saveProduct = async (data: Product) => (await AppDataSource.getConnection()).createQueryBuilder()
    .insert()
    .into(Product)
    .values(data)
    .execute()

export const getProducts = async () => (await AppDataSource.getConnection())
    .getRepository(Product)
    .createQueryBuilder('p')
    .getRawMany()

export const getProductById = async (id: number) => (await AppDataSource.getConnection())
    .getRepository(Product)
    .createQueryBuilder('p')
    .where('id = :id', { id })
    .getOne()