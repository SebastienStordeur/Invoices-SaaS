import React, { useState } from "react";
import axios from "axios";

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  currentUser: any | null;
  login: (token: string) => void;
  getAuth: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  currentUser: null,
  login: (token: string) => {},
  getAuth: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const getAuth = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    console.log(id);
    axios
      .get("http://localhost:8000/user/getAuth", { params: { id }, headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        const user = res.data.user;
        setCurrentUser({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          fullName: user.fullName,
          userName: user.userName,
        });
        setIsAuthenticated(true);
        return { setIsAuthenticated, currentUser };
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  const defaultValue = {
    isAuthenticated,
    currentUser,
    login,
    getAuth,
    logout,
  };

  return <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>;
};
