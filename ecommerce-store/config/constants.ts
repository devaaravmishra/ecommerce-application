export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
export const STORE_ID = API_URL?.split('/').pop() as string
