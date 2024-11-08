import { EMAIL_KEY, LOGIN_STATE, LOGIN_STATE_KEY, PASSWORD_KEY, TOKEN_KEY } from '@/constant'

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

export const setTokenStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getTokenFormStorage = () => {
  return localStorage.getItem(TOKEN_KEY)
}

export const deleteTokenFormStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export const login = () => {
  localStorage.setItem(LOGIN_STATE_KEY, LOGIN_STATE.LOGIN)
}

export const logout = () => {
  localStorage.setItem(LOGIN_STATE_KEY, LOGIN_STATE.LOGOUT)
  deleteTokenFormStorage()
}

export const getLoginState = () => {
  return localStorage.getItem(LOGIN_STATE_KEY)
}
