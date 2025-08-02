import { createContext, useState } from "react"

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  const login = async (userData) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json()

      if (res.ok) {
        setToken(data.token);
        setUser({ email: data.email })
      } else {
        throw new Error(data.message || "Error al iniciar sesión")
      }
    } catch (error) {
      console.error("Login error:", error.message)
    }
  }

  const register = async (userData) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await res.json()

      if (res.ok) {
        setToken(data.token);
        setUser({ email: data.email })
      } else {
        throw new Error(data.message || "Error al registrarse")
      }
    } catch (error) {
      console.error("Register error:", error.message)
    }
  };

  const logout = () => {
    setToken(null)
    setUser(null)
  }

  const getProfile = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json()

    if (res.ok) {
      setUser({ email: data.email })
    } else {
      throw new Error(data.message || "No se pudo obtener el perfil")
    }
  } catch (error) {
    console.error("Error al obtener el perfil:", error.message)
  }
};


  return (
    <UserContext.Provider value={{ token, user, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
