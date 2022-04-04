import { useState } from 'react';

function useCredentials() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState(getToken());
  
  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  }
  const getEmail = () => {
    const email = sessionStorage.getItem('email');
    if(email){
      return email;
    }    
  };
  const [email, setEmail] = useState(getEmail());

  const saveEmail = userEmail => {
    sessionStorage.setItem('email', userEmail);
    setEmail(userEmail)
  }
  const logOut = () => {
    sessionStorage.clear();
    setToken();
    setEmail();
  }
  return {
    token,
    setToken: saveToken,
    clearToken: logOut,
    email,
    setEmail: saveEmail
    
  }

}
export { useCredentials };
