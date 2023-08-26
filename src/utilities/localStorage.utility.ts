export const persistLocalStorage = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }))
}

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}


export const getLocalStorage = <T,>(key: string): T => {
  const value = localStorage.getItem(key)

  if (!value)
    throw new Error('No value found')

  return JSON.parse(value)
}