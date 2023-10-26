import type { Product } from "../entities";
import { getProducts, getProductById, saveProduct } from "../model/product";


export const createProduct = async (data: Product) => await saveProduct(data)
export const getAllProducts = async () => await getProducts()
export const getProduct = async (id: number) => await getProductById(id)