
import AuthContext from "./Auth-Context";
import { useState } from "react";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const isUserLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logOutHandler = () => {
    setToken(null);
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
