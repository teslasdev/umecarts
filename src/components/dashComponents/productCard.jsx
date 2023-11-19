// import bottle from "../../assets/image/bottle.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch";
import "../../styles/dash-css/productCard.css";
import ProductModal from "./modal/productModal";
import { useState } from "react";

const ProductCard = ({ props }) => {
  const [productToggleIcon, setProductToggleIcon] = useState(false);
  const handleProductToggleIcon = () => {
    setProductToggleIcon(!productToggleIcon);
  };
  return (
    <div className="pro-card-container">
      <div className="pro-img-con">
        <img src={props.imageUrl} alt="" className="pro-img" />
        <BsThreeDotsVertical
          className="men-icon"
          onClick={handleProductToggleIcon}
        />
        {productToggleIcon && <ProductModal />}
      </div>
      <div className="pro-card-body-box">
        <div className="pro-type">{props.type}</div>
        <div className="price-disc-box">
          <div className="main-price">₦2,500</div>
          <div className="crs-price">
            <s>₦2,500</s>
          </div>
          <div className="discount-per">-50%</div>
        </div>
        <div className="product-name">
          iPhone 11 pro max factory unlocked 64gb | UK used
        </div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Published</div>
          <ToggleSwitch />
        </div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Featured</div>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
