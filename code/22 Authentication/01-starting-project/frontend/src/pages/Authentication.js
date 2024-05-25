import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";
import {setAuthToken} from "../utils/auth";

function AuthenticationPage() {
  return <AuthForm/>;
}

export default AuthenticationPage;

export const authAction = async ({request}) => {

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'signup';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: "Unexpected URL"}, {status: 500})

  }

  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  const payload = {
    email,
    password
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })

  if (response.status === 401 || response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({message: 'Could not authenticate user'}, {status: 500})
  }

  const responseData = await response.json();
  setAuthToken(responseData.token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/');
}
