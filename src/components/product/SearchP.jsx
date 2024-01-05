import React from "react";
import product2 from "../../assets/image/bottle.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
const SearchP = () => {
  AOS.init();
  const navigate = useNavigate();
  const fetchProduct = () => {
    navigate("/product/iPhone 11 pro max factory unlocked 64gb | UK used");
  };
  return (
    <div className="um-product-caret flex py-2 sm:px-6 px-1 w-full gap-6 overflow-hidden overflow-x-scroll">
      <React.Fragment>
        <div
          className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:"
          onClick={fetchProduct}
        >
          <div className="um-product-img h-[65%] relative">
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <p className="text-red-700 font-extrabold">₦2500</p>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>

        <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
          <div className="um-product-img h-[65%] relative">
            <span className="absolute top-4 right-6 um-product-badge">
              -50%
            </span>
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <div className="flex gap-4 items-center">
              <p className="text-red-700 font-extrabold">#2500</p>
              <p className="text-gray-400 text-sm">
                <del>₦2500</del>
              </p>
            </div>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>

        <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
          <div className="um-product-img h-[65%]">
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <p className="text-red-700 font-extrabold">#2500</p>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>

        <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
          <div className="um-product-img h-[65%]">
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <p className="text-red-700 font-extrabold">#2500</p>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>

        <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
          <div className="um-product-img h-[65%]">
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <p className="text-red-700 font-extrabold">#2500</p>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>

        <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
          <div className="um-product-img h-[65%]">
            <img src={product2} alt="" className="w-full h-full rounded-sm" />
          </div>

          <div className="um-product-details h-[35%] px-2 py-2">
            <p className="text-red-700 font-extrabold">#2500</p>
            <p className="text-sm font-bold mt-2">
              iPhone 11 pro max factory unlocked 64gb | UK used
            </p>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default SearchP;
