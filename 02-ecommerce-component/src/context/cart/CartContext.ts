import { createContext } from "react";
import { PlatesItems } from "./CartProvider";
import { CartAction } from "./cartReducer";

interface CartContextProps {
  plates: PlatesItems[];
  dispatch: React.Dispatch<CartAction>;
}

export const CartContext = createContext({} as CartContextProps);
