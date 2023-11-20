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
  var isDiscount = false;
    switch(props.price?.discount) {
        case 'Flat' :
            const discount = props.price?.discount_flat
            if(discount === 0) {
                isDiscount = false;
                
            } else {
                isDiscount = true;
                var calculatePercentage = (props.price?.discount_flat / props.price?.unit_price) * 100
            }
        break;
    }

    let productName = props.information?.product_name
    if(productName.length > 40) {
      productName = props.information?.product_name.replace(props.information?.product_name.substring(10,30), "....");
    }
    const [setIsToggled] = useState(false)
  return (
    <div className="pro-card-container bg-red">
      <div className="pro-img-con h-[50%] w-full">
        <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+props.image?.thumbnails[0]} alt="" className="h-full w-full object-cover pro-img" />
        <BsThreeDotsVertical
          className="men-icon"
          onClick={handleProductToggleIcon}
        />
        {productToggleIcon && <ProductModal />}
      </div>
      <div className="pro-card-body-box">
        <div className="pro-type">{"type"}</div>
        <div className="price-disc-box">
          <div className="main-price">₦{ isDiscount ?  props.price?.discount_flat.toLocaleString() : props.price?.unit_price.toLocaleString()}</div>
          {isDiscount && 
          <>
            <div className="crs-price">
              <s>₦{props.price?.unit_price.toLocaleString()}</s>
            </div>
            <div className="discount-per">-{100 - Math.floor(calculatePercentage)}%</div>
          </>
          }
        </div>
        <div className="product-name">
          {productName}
        </div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Published</div>
          <ToggleSwitch isToggled = {props?.isPublished} setIsToggled={setIsToggled}/>
        </div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Featured</div>
          <ToggleSwitch isToggled = {props?.isFeatured} setIsToggled={setIsToggled}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
