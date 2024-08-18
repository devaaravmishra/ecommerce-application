import { API_URL } from '@/config/constants'
import { Size } from '@/types'

const URL = `${API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getSizes
