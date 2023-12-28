import React from "react";
import { RxCaretRight } from "react-icons/rx";
import product2 from "../../assets/products/product3.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import PaginationCom from "../common/Pagination";

const FeaturePreview = () => {
  AOS.init();
  const navigate = useNavigate();
  const fetchProduct = () => {
    navigate("/product/iPhone 11 pro max factory unlocked 64gb | UK used");
  };
  return (
    <>
      <div
        className="um-product rounded-sm shadow-md pb-6"
        data-aos="fade-right"
      >
        <div className="um-product-header h-[30%] sm:text-xl text-[16px] flex justify-between px-2 py-4 w-full items-end rounded-t-md bg-[#FEF0F0]">
          <div>
            <p className="font-bold sm:text-xl text-md">Products</p>
          </div>

          <select name="" id="" className="sel-cat">
            <option value="">Newest Arrival</option>
            <option value="">Oldest Arrival</option>
            <option value="">Newest Arrival</option>
          </select>
        </div>

        <div className="um-product-caret flex py-2 sm:px-6 px-1 w-full gap-6 sm:overflow-hidden overflow-x-scroll">
          <React.Fragment>
            <div
              className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:"
              onClick={fetchProduct}
            >
              <div className="um-product-img h-[65%] relative">
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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

        <div className="um-product-caret  flex py-2 sm:px-6 px-1 w-full  gap-6 sm:overflow-hidden overflow-x-scroll">
          <React.Fragment>
            <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
              <div className="um-product-img h-[65%] relative">
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
              </div>

              <div className="um-product-details h-[35%] px-2 py-2">
                <p className="text-red-700 font-extrabold">#2500</p>
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
              </div>

              <div className="um-product-details h-[35%] px-2 py-2">
                <div className="flex gap-4 items-center">
                  <p className="text-red-700 font-extrabold">#2500</p>
                  <p className="text-gray-400 text-sm">
                    <del>2500</del>
                  </p>
                </div>
                <p className="text-sm font-bold mt-2">
                  iPhone 11 pro max factory unlocked 64gb | UK used
                </p>
              </div>
            </div>

            <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
              <div className="um-product-img h-[65%]">
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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

        <div className="um-product-caret  flex py-2 sm:px-6 px-1 w-full  gap-6 sm:overflow-hidden overflow-x-scroll">
          <React.Fragment>
            <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
              <div className="um-product-img h-[65%] relative">
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
              </div>

              <div className="um-product-details h-[35%] px-2 py-2">
                <p className="text-red-700 font-extrabold">#2500</p>
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
              </div>

              <div className="um-product-details h-[35%] px-2 py-2">
                <div className="flex gap-4 items-center">
                  <p className="text-red-700 font-extrabold">#2500</p>
                  <p className="text-gray-400 text-sm">
                    <del>2500</del>
                  </p>
                </div>
                <p className="text-sm font-bold mt-2">
                  iPhone 11 pro max factory unlocked 64gb | UK used
                </p>
              </div>
            </div>

            <div className="um-product-box shadow-sm hover:shadow-md rounded-sm hover:">
              <div className="um-product-img h-[65%]">
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
                <img
                  src={product2}
                  alt=""
                  className="w-full h-full rounded-sm"
                />
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
        <PaginationCom />
        <div className="detai-sow text-center">
          Showing 36 products per page
        </div>
      </div>
    </>
  );
};

export default FeaturePreview;
