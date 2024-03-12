import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GlobalContext } from "../../context";
import isEmpty from "../../utils/isEmpty";

const Cart = ({ data, index }) => {
  const {cartIndex, setIndex , price , setPrice , cartSelection , setCartSelection} = useContext(GlobalContext)
  const [checked, setCheck] = useState(false);
  useEffect(() => {
    if(checked) {
      setIndex((prev) => [
        ...prev,
        index
      ])
      setPrice(price + data?.product?.price?.unit_price)
      if(isEmpty(cartSelection)) {
        setCartSelection([data])
      } else {
        setCartSelection((prev) => [
          ...prev,
          data
        ])
      }
    }
    else if(!checked) {
      if(cartIndex.includes(index)) {
        const newSelected = []
        for (let i = 0; i < cartIndex.length; i++) {
          if(cartIndex[i] != index) {
            newSelected.push(cartIndex[i])
          }
        }
        setIndex(newSelected)
        setPrice(price - data?.product?.price?.unit_price)
        const neCartSelection = []
        for (let i = 0; i < cartSelection.length; i++) {
          if(cartSelection[i] != index) {
            neCartSelection.push(cartSelection[i])
          }
        }
        setCartSelection(neCartSelection)
      }
    }
  },[checked])
  return (
    <>
      <div key={index} className="border-gray-bottom flex justify-between">
        <div className="py-4 flex w-full md:w-[60%] gap-2">
          <div
            className={`um-cart-border-outline  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
            onClick={() => setCheck(!checked)}
          >
            {checked && (
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#002c66]"></div>
            )}
          </div>
          <div className="um-cart-img-small rounded-sm">
            <img
              src={
                process.env.REACT_APP_S3_ENDPOINT +
                "/" +
                data?.product?.image?.galleries.toReversed()[0]
              }
              className="w-full h-full rounded-sm object-fit"
              alt=""
              srcset=""
            />
          </div>

          <div className="flex flex-col items-start gap-2 justify-start w-[60%]">
            <h3 className="font-extrabold text-left sm:text-md text-sm">
              {data?.product?.information?.product_name}
            </h3>
            <p className="text-xs text-[#2E486B]">size/color/gender</p>
            <div className="flex gap-2 items-center">
              <p className="text-xs text-gray-400">Price</p>
              <h4 className="sm:text-md text-sm text-[#2E486B] font-extrabold">₦{data?.product?.price?.unit_price.toLocaleString()}</h4>
            </div>
          </div>
        </div>

        <div className="md:flex hidden justify-around my-3 w-[40%] items-center">
          <div className="flex flex-col gap-2 items-start">
            <div className="flex gap-2 items-center">
              <span className="um-product-reading text-[14px]">-</span>
              <h4 className="text-[12px]">01</h4>
              <span className="um-product-reading text-[14px]">+</span>
            </div>
            <h3 className="font-extrabold text-[14px] text-[#017E4D]">
              In Stock
            </h3>
          </div>
          <div>
            <h3 className="text-red-800 font-extrabold text-md">
              ₦{data?.product?.price?.unit_price.toLocaleString()}
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
            <h3 className="text-red-800 font-extrabold text-xl">₦{data?.product?.price?.unit_price.toLocaleString()}</h3>
          </div>
          <div>
            <span className="text-xs text-gray-500">Availabiity</span>
            <h3 className="font-extrabold text-[14px] text-[#017E4D]">
              In Stock
            </h3>
          </div>
        </div>
      </div>
      <div className="border-gray-bottom flex  justify-between py-2 md:py-3">
        <div className="flex gap-2 md:gap-4 md:w-[60%] w-full items-center">
          <p className="text-sm font-semibold text-gray-500">Sold By</p>
          <h3 className="text-xs md:text-sm font-bold text-[#2E486B]">
            {data?.product?.product?.user?.firstname} {data?.product?.product?.user?.lastname}
          </h3>
        </div>

        <div className="underline decoration-1 w-[60%] md:w-[40%] flex justify-start text-blue-600">
          Message Seller
        </div>
      </div>
    </>
  );
};

export default Cart;
