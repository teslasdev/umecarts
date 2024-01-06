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
  var isPrice = 0;
  switch (props?.price?.discount) {
    case "Flat":
      const discount = props?.price?.discount_flat;
      const unit_price = props?.price?.unit_price;
      if (discount === 0) {
        isDiscount = false;
        isPrice = unit_price;
      } else {
        isDiscount = true;
        var calculatePercentage =
          (props?.price?.discount_flat / props?.price?.unit_price) * 100;
        isPrice = unit_price - discount;
      }

      break;
    case "Percentage":
      const percentage = props?.price?.discount_percentage;
      const unitprice = props?.price?.unit_price;
      if (percentage === 0) {
        isDiscount = false;
        isPrice = unitprice.toLocaleString();
      } else {
        isDiscount = true;
        var calculatePercentage = props?.price?.discount_percentage;
        isPrice = (
          unitprice -
          (props?.price?.discount_percentage * props?.price?.unit_price) / 100
        ).toLocaleString();
      }
      break;
  }

  let productName = props.information?.product_name;
  if (productName.length > 40) {
    productName = props.information?.product_name.replace(
      props.information?.product_name.substring(25, 255),
      "...."
    );
  }
  const [setIsToggled] = useState(false);
  return (
    <div className="pro-card-container bg-white shadow-md">
      <div className="pro-img-con h-[40%] w-full">
        <img
          src={
            process.env.REACT_APP_S3_ENDPOINT + "/" + props.image?.thumbnails[0]
          }
          onError={"https://umecarts.com/public/assets/img/placeholder.jpg"}
          alt=""
          className="h-full w-full object-fit pro-img"
        />
        <BsThreeDotsVertical
          className="men-icon"
          onClick={handleProductToggleIcon}
        />
        {productToggleIcon && <ProductModal />}
      </div>
      <div className="pro-card-body-box">
        <div className="pro-type">{"type"}</div>
        <div className="price-disc-box">
          <div className="main-price">
            ₦
            {isDiscount
              ? isPrice.toLocaleString()
              : props.price?.unit_price.toLocaleString()}
          </div>
          {isDiscount && (
            <>
              <div className="crs-price">
                <s>₦{props.price?.unit_price.toLocaleString()}</s>
              </div>
              <div className="discount-per">
                -{Math.floor(calculatePercentage)}%
              </div>
            </>
          )}
        </div>
        <div className="product-name h-[50px]">{productName}</div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Published</div>
          <ToggleSwitch
            isToggled={props?.isPublished}
            setIsToggled={setIsToggled}
          />
        </div>
        <div className="pub-fea-con">
          <div className="pub-fea-txt">Featured</div>
          <ToggleSwitch
            isToggled={props?.isFeatured}
            setIsToggled={setIsToggled}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
