import React, { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextProps {
  menuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <MenuContext.Provider value={{ menuToggle, setMenuToggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export const UseMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export default MenuProvider;
