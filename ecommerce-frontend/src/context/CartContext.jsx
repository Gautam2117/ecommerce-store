import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.find(item => item._id === action.payload._id);
      if (existing) {
        return state.map(item =>
          item._id === action.payload._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter(item => item._id !== action.payload);

    case "UPDATE_QTY":
      return state.map(item =>
        item._id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
