import { ReactNode, useReducer } from "react";

import { CartContext } from "./CartContext";
import { cartReducer } from "./cartReducer";

export interface PlatesItems {
  id: number;
  name: string;
  price: number;
  path: string;
  quantity: number;
  totalPrice?: number;
}

export interface CartState {
  plates: PlatesItems[];
}

const INITIAL_STATE: CartState = {
  plates: [],
};

interface Props {
  children?: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
