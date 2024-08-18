import { API_URL } from '@/config/constants'
import { Category } from '@/types'

const URL = `${API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getCategories
