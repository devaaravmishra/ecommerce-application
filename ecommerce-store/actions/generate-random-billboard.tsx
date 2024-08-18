import { Billboard } from '@/types'
import getBillboards from './get-billboards'

const generateRandomBillboard = async (): Promise<Billboard> => {
  const billboards = await getBillboards()
  const randomIndex = Math.floor(Math.random() * billboards.length)

  return billboards[randomIndex]
}

export default generateRandomBillboard
