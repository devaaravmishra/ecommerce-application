import { API_URL } from '@/config/constants'
import { Product } from '@/types'
import qs from 'query-string'

const URL = `${API_URL}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  })

  const res = await fetch(url)

  return res.json()
}

export default getProducts
