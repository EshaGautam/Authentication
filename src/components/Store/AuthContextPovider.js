
import AuthContext from "./Auth-Context";
import { useState } from "react";

const AuthContextProvider = (props) => {
    const existingToken = localStorage.getItem('token')
  const [token, setToken] = useState(existingToken);
  const isUserLoggedIn = !!token;

  const loginHandler = (id) => {
       localStorage.setItem("token", id);
    setToken(id);
  };
  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem('token')
     
  };

  const ContextValue = {
    token,
    isUserLoggedIn,
    loginHandler,
    logOutHandler,
  };

  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
