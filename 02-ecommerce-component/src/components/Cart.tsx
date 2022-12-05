import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cart/CartContext";

import CartDetails from "./CartDetails";
import "./CartStyles.css";

const TAX_PERCENTAGE = 0.0975;

const Cart = () => {
  const { plates } = useContext(CartContext);

  const [subTotal, setSubTotal] = useState(0);

  const parseSubTotal = Number(subTotal).toFixed(2);
  const parseTax = Number(subTotal * TAX_PERCENTAGE).toFixed(2);
  const total = Number(parseSubTotal) + Number(parseTax);

  useEffect(() => {
    setSubTotal(
      plates.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [plates]);

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h2 className="cart-title">Your Cart</h2>
        {plates.length > 0 ? (
          <div>
            {plates.map((item) => (
              <CartDetails key={item.id} {...item} />
            ))}
            <div className="cart-results">
              <div className="cart-results-left">
                <p className="cart-total-title">Subtotal:</p>
                <p className="cart-total-title">Tax:</p>
                <p className="cart-total-title">Total:</p>
              </div>
              <div className="cart-results-right">
                <p className="cart-total-quantity">${parseSubTotal}</p>
                <p className="cart-total-quantity">${parseTax}</p>
                <p className="cart-total-quantity total">
                  ${total.toFixed(2)}{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
