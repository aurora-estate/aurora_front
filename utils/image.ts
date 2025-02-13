// utils/image.ts
import { useRuntimeConfig } from '#app'

export const getImageUrl = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  const { public: { baseURL } } = useRuntimeConfig()
  return `${baseURL}${path}`
}