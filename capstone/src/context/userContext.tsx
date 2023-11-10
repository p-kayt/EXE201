import * as React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../store/selector";

export interface IDrawMapContext {
  isAdmin: boolean;
}

const UserContext = React.createContext<IDrawMapContext>({
  isAdmin: false,
});

interface DrawMapProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<DrawMapProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const auth = useSelector(authSelector);

  React.useEffect(() => {
    if (auth?.user?.role.toLowerCase() === "admin") {
      setIsAdmin(true);
    }
  }, [auth]);

  return (
    <UserContext.Provider value={{ isAdmin }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const methods = React.useContext(UserContext);
  return methods;
};
