import "./EcommerceAppStyles.css";
import MenuSection from "./components/MenuSection";
import Cart from "./components/Cart";

const EcommerceApp = () => {
  return (
    <div className="ecommerce-container">
      <div className="bg-left " />
      <div className="bg-bottom-right" />
      <div className="bg-top-right" />
      <MenuSection />
      <Cart />
    </div>
  );
};

export default EcommerceApp;
