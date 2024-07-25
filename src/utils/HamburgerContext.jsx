import { createContext, useState, useContext } from "react";

export const HamburgerContext = createContext();
export const useBurger = () => useContext(HamburgerContext);

export default function HamburgerProvider({ children }) {
  const [burgerClicked, setBurgerClicked] = useState(false);

  return (
    <HamburgerContext.Provider value={{ burgerClicked, setBurgerClicked }}>
      {children}
    </HamburgerContext.Provider>
  );
}
