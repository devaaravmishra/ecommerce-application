import { API_URL } from '@/config/constants'
import { Billboard } from '@/types'

const URL = `${API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json()
}

export default getBillboard
