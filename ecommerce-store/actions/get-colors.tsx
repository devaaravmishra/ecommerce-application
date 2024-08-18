import { API_URL } from '@/config/constants'
import { Color } from '@/types'

const URL = `${API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getColors
