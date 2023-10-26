import { createProduct, getAllProducts } from "../../../controllers/product"
import type { Product } from "../../../entities"

export const GET = async () => {
    const response = await getAllProducts()
    return new Response(JSON.stringify(response),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}


export const POST = async (data) => {
    const body: Product = await data.request.json()
    const response = await createProduct(body)

    return new Response(JSON.stringify(response),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}