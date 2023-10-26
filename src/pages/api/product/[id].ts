import { getProduct } from "../../../controllers/product"

export const GET = async ({ params }) => {
    const { id } = params
    const response = await getProduct(parseInt(id))

    return new Response(JSON.stringify(response),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}
