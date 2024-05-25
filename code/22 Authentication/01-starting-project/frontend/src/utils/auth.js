import {redirect} from "react-router-dom";

export const setAuthToken = (token) => {
  localStorage.setItem('token', token);
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export const authLoader = () => {
  return getAuthToken();
}

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect('/');
  }

  return null;
}
