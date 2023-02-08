import React, {  createContext, useState, useEffect } from "react";

export const Context = createContext();

function UserProvider({ children }) {
    
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const dataLogin = JSON.parse(localStorage.getItem("isLogin"));
    setIsLogin(dataLogin);
  }, []);

  return (
    <Context.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </Context.Provider>
  );
}

export default UserProvider;
