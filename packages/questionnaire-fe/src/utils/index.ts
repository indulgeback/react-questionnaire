import { EMAIL_KEY, PASSWORD_KEY } from '@/constant'

export const rememberUser = (email: string, password: string) => {
  localStorage.setItem(EMAIL_KEY, email)
  localStorage.setItem(PASSWORD_KEY, password)
}

export const deleteUserFormStorage = () => {
  localStorage.removeItem(EMAIL_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

export const getUserFormStorage = () => {
  return {
    email: localStorage.getItem(EMAIL_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}
