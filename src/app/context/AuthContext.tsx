import { Component } from "lucide-react";
import { createContext,  useState, useEffect } from "react";
import { setCookie, parseCookies } from 'nookies';
import { api } from "@/components/utils/api";
import Router from "next/router";
import axios from "axios";

type SignUpData = {
    name: string,
    promptuary: string,
    role: string,
    password: string
}

export const AuthContext = createContext<{
  isAuthenticated: boolean;
  login: (promptuary: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  user: SignUpData | null;
}>({
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  signUp: async () => {},
  user: null,
});


export function AuthProvider({ children }) {

    const [user, setUser] = useState<SignUpData | null>(null)
    const isAuthenticated = !!user;
    const baseURL = 'http://localhost:8080/api/v1';

    useEffect(() => {
      const { 'nextauth.token': token } = parseCookies();
    }, [])

    const logout = async () => {
        try {
            setCookie(undefined, 'nextauth.token', '')
        
            setUser(null);
        } catch (error) {
          console.log("Error during logoutr: ", error);
        }
      };
    
      const login = async (promptuary: string, password: string) => {
        try {
          const response = await axios.post(`${baseURL}/login`, {
            promptuary: promptuary,
            password: password,
          });

          const { token } = response.headers.auth;

          setCookie(undefined, 'nextauth.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
          })
      
          api.defaults.headers['Authorization'] = `Bearer ${token}`;

          setUser(response.data);
          Router.push('/home');
        } catch (error) {
          console.log("Error during loginr: ", error);
        }
      };

    const signUp = async ({name, promptuary, role, password} : SignUpData) => {
        try {
            const response = await axios.post(`${baseURL}/register`, {
              name: name,
              promptuary: promptuary,
              role: role,
              password: password,
            });
            await login(promptuary, password);
          } catch (error) {
            console.log("Error registering the user: ", error);
          } 
    }

  return (
    <AuthContext.Provider value={{ 
        isAuthenticated, 
        login,
        logout,
        signUp,
        user
    }}>
        {children}
    </AuthContext.Provider>
  )
}