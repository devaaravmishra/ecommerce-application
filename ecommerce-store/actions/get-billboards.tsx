import { API_URL } from '@/config/constants'
import { Billboard } from '@/types'

const URL = `${API_URL}/billboards`

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getBillboards
