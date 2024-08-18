import { API_URL } from '@/config/constants'
import { Product } from '@/types'

const URL = `${API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json()
}

export default getProduct
