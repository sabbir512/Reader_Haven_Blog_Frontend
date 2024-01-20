import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const navigate = useNavigate();

  const login = async (inputs) => {
    try {
      const response = await axios.post("http://localhost:9000/login", inputs);
      setCurrentUser(response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:9000/api/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
      // Handle any errors during logout
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
