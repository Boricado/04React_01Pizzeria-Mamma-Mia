import { createContext, useState } from "react";
// crear el contexto
export const UserContext = createContext();
 
// crear el proveedor del contexto
const UserProvider = ({ children }) => {
const [token, setToken] = useState(true)
const [user, setUser] = useState({email: "desafiolatam@desafiolatam.com", displayName: "Hola Desafío Latam"})

const login = (userData) => {
    setToken(true)
    setUser(userData)
  };

const logout = () => {setToken(false); setUser(null)}

 return (
 <UserContext.Provider value={{ token, user, login, logout}}>
 {children}
 </UserContext.Provider>
 );
 };
 export default UserProvider