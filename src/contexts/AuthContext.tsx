import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import type { FC, ReactNode } from "react";
import { authApi } from "../api/AuthApi";

interface IUser {
  userId: string;
  roleId: string;
  userName: string;
  email: string;
  role: string;
}

type TAuthContext = {
  user: IUser;
  autenticated: boolean;
  Login: Function;
  Logout: Function;
};
type AuthProviderProps = {
  children: ReactNode;
}


export const Context = createContext({} as TAuthContext);

const AuthContext: FC<AuthProviderProps> = (props) => {
  const { children } = props;
  const [autenticated, setAutenticated] = useState(false);
  const [user, setUser] = useState({
    userId: "",
    roleId: "",
    userName: "",
    email: "",
    role: "",
  });
  console.log('autenticated: ', autenticated);
  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    const jsonUser = window.sessionStorage.getItem('user');
    if (token && jsonUser) {
      const data = JSON.parse(jsonUser);
      axios.defaults.headers.common["Authorization"] = `Bearer  ${token}`;
      setAutenticated(true);
      setUser(data);
    } else {
      axios.defaults.headers.common["Authorization"] = "";
      window.sessionStorage.clear();
      setAutenticated(false);
    }
  }, []);

  const Login = async (email: string, password: string) => {
    try {
      const {
        success,
        data: { token },
      } = await authApi.Token(email, password);
      axios.defaults.headers.common["Authorization"] = `Bearer  ${token}`;
      window.sessionStorage.setItem('token', token);
      
      setAutenticated(success);
    } catch {
      axios.defaults.headers.common["Authorization"] = "";
      window.sessionStorage.clear();
      setAutenticated(false);
    }
  };
  const Logout = () => {
    axios.defaults.headers.common["Authorization"] = "";
    window.sessionStorage.clear();
    setAutenticated(false);
  };

  return (
    <Context.Provider value={{ user, autenticated, Login, Logout }}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
