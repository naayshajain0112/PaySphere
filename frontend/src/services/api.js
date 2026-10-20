import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

export async function getHealth() {
  const response = await api.get('/health')
  return response.data
}
