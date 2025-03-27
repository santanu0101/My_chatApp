import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const jwt = Cookies.get("jwt");
    const messenger = localStorage.getItem("messenger");
    return jwt || messenger ? JSON.parse(jwt || messenger) : undefined;
  });

  useEffect(() => {
    if (authUser) {
      Cookies.set("jwt", JSON.stringify(authUser));
      localStorage.setItem("messenger", JSON.stringify(authUser));
    } else {
      Cookies.remove("jwt");
      localStorage.removeItem("messenger");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
    
