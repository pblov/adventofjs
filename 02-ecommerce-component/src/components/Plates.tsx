import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

import { IPlates } from "../interfaces/plates";
import "./PlatesStyles.css";
import CheckIcon from "../icons/check.svg";

const Plates = ({ ...props }: IPlates) => {
  const { id, name, price, path, color } = props;
  const { plates, dispatch } = useContext(CartContext);
  const handleAddCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: [{ id, name, price, path, quantity: 1, totalPrice: price }],
    });
  };

  return (
    <div className="plates-container" style={{ backgroundColor: `${color}` }}>
      <img
        className="plates-img"
        src={`assets/images/plate__${path}`}
        width="148"
        height="144"
        alt="img"
      />
      <div className="plates-details-container">
        <p className="plates-title">{name}</p>
        <p className="plates-price">{price} </p>
        {!plates.some((elem) => elem.id === id) ? (
          <button onClick={handleAddCart} className="plates-button">
            Add to cart
          </button>
        ) : (
          <button className="plates-button in-cart">
            <img className="in-cart-icon" src={CheckIcon} alt="check" />
            In cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Plates;
