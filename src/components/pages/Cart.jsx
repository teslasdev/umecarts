import React, { useState } from "react";
import { CartBadge } from "../common/Badge";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import isEmpty from "../../utils/isEmpty";

const Cart = ({ data, index }) => {
  const [checked, setCheck ] = useState(false);
  return (
    <>
      <div key={index} className="border-gray-bottom flex justify-between">
        <div className="py-4 flex w-full md:w-[60%] gap-2">
          <div
            className={`um-cart-border-outline cursor-pointer justify-center items-center`}

            onClick={() => setCheck(!checked)}
          >
            {checked &&
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#002c66]">
            </div>
            }
          </div>
          <div className="um-cart-img-small rounded-sm">
            <img
              src={
                process.env.REACT_APP_S3_ENDPOINT +
                "/" +
                data?.product?.image?.galleries.toReversed()[0]
              }
              className="w-full h-full rounded-sm object-cover"
              alt=""
              srcset=""
            />
          </div>

          <div className="flex flex-col items-start justify-start">
            <h3 className="font-extrabold text-lg">
              {data?.product?.information?.product_name}
            </h3>
            <p className="text-xs text-[#2E486B]">size/color/gender</p>
            <div className="flex gap-2 items-center">
              <p className="text-xs text-gray-400">Price</p>
              <h4 className="text-lg text-[#2E486B] font-extrabold">₦12,500</h4>
            </div>
          </div>
        </div>

        <div className="md:flex hidden justify-around my-3 w-[40%] items-center">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex gap-2 items-center">
              <span className="um-product-reading text-[20px]">-</span>
              <h4>01</h4>
              <span className="um-product-reading text-[20px]">+</span>
            </div>
            <h3 className="font-extrabold text-[#017E4D]">In Stock</h3>
          </div>
          <div>
            <h3 className="text-red-800 font-extrabold text-xl">
              {data?.product?.price?.unit_price.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="md:flex hidden self-center um-cart-delete">
          <RiDeleteBin6Line />
        </div>
      </div>

      <div className="border-gray-bottom">
        <div className="flex md:hidden justify-around my-3 w-full items-center">
          <div className="flex items-center gap-2">
            <div className="">
              <span className="text-xs text-gray-500">Quantity</span>
              <div className="flex gap-2 items-center">
                <span className="um-product-reading text-[14px] md:text-[20px]">
                  -
                </span>
                <h4>01</h4>
                <span className="um-product-reading text-[14px] md:text-[20px]">
                  +
                </span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-500">Price</span>
            <h3 className="text-red-800 font-extrabold text-xl">#12,500</h3>
          </div>
          <div>
            <span className="text-xs text-gray-500">Availabiity</span>
            <h3 className="font-extrabold text-[#017E4D]">In Stock</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
