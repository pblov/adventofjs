import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/cart/CartProvider";
import EcommerceApp from "./EcommerceApp";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <EcommerceApp />
    </CartProvider>
  </React.StrictMode>
);
