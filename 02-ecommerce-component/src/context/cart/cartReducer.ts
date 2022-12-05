import { CartState, PlatesItems } from "./CartProvider";

export type CartAction =
  | { type: "ADD_TO_CART"; payload: PlatesItems[] }
  | { type: "UPDATE_QUANTITY"; payload: PlatesItems[] };

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        plates: [...state.plates, ...action.payload],
      };

    case "UPDATE_QUANTITY":
      const { id, quantity, price } = action.payload[0];
      const plateUpdated = state.plates.filter((item) =>
        item.id === id ? (item.quantity = quantity) : item.quantity
      );

      if (plateUpdated.length > 0)
        plateUpdated[0]["totalPrice"] = quantity * price ?? price;

      return {
        ...state,
        plates: plateUpdated,
      };

    default:
      return state;
  }
};
