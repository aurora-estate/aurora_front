// utils/image.ts
import { useRuntimeConfig } from '#app'

export const getImageUrl = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  const { public: { apiBaseURL } } = useRuntimeConfig()
  console.log('apiBaseUrl', apiBaseURL);
  
  return `${apiBaseURL}${path}`
}