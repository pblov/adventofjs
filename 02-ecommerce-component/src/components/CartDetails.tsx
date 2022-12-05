import { useContext } from "react";
import "./CartDetailsStyles.css";
import Chevron from "../icons/chevron.svg";
import { PlatesItems } from "../context/cart/CartProvider";
import { CartContext } from "../context/cart/CartContext";

const CartDetails = ({ ...props }: PlatesItems) => {
  const { dispatch } = useContext(CartContext);
  const { id, name, price, quantity, path } = props;
  const handleIncrementQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: [
        {
          id,
          name,
          price,
          path,
          quantity: quantity + 1,
        },
      ],
    });
  };
  const handleDecrementQuantity = () => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: [
        {
          id,
          name,
          price,
          path,
          quantity: quantity - 1,
        },
      ],
    });
  };

  return (
    <>
      <div className="cart-details-container">
        <img
          width="64"
          height="64"
          src={`assets/images/plate__${path}`}
          alt=""
        />
        <div className="cart-details">
          <p className="cart-details-title">{name} </p>
          <p className="cart-details-price">${price} </p>
          <div className="cart-quantity-section">
            <div className="cart-quantity-wrapper">
              <button
                onClick={handleDecrementQuantity}
                className="cart-details-icon"
              >
                <img src={Chevron} alt="chevron-back" />
              </button>
              <span className="cart-quantity-title">{quantity}</span>
              <button
                onClick={handleIncrementQuantity}
                className="cart-details-icon cart-details-icon-right  "
              >
                <img src={Chevron} alt="chevron-right" />
              </button>
            </div>

            <span className="cart-total">
              {Number(price * quantity).toFixed(2)}{" "}
            </span>
          </div>
        </div>
      </div>
      <hr className="cart-divider" />
    </>
  );
};

export default CartDetails;
