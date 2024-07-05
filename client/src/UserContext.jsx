import { createContext } from "react";
export const UserContext = createContext({});
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios.get("/profile").then((res) => {
      setUsername(res.data.username);
      setId(res.data.userId);
    });
  }, []);
  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
