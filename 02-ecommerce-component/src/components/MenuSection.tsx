import "./MenuSectionStyles.css";
import Plates from "./Plates";
import allPlates from "../fixtures/plates.json";
import { IPlates } from "../interfaces/plates";

const MenuSection = () => {
  return (
    <div className="menu-section-container">
      <div className="menu-section-wrapper">
        <h2 className="menu-title">To Go Menu</h2>
        {allPlates.map((item: IPlates) => (
          <Plates key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
