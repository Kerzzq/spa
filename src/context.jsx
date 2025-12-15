import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [message, setMessage] = useState("Estado global inicial");

  return (
    <AppContext.Provider value={{ message, setMessage }}>
      {children}
    </AppContext.Provider>
  );
}
