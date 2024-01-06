import React, { useContext, useState } from "react";
import { CartBadge } from "../common/Badge";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import isEmpty from "../../utils/isEmpty";
import { GlobalContext } from "../../context";
import Cart from "../pages/Cart";
import { useGetIpAddress } from "../../helper/api-hooks/useAuth";

const CartController = () => {
  const [productSelected, setSelection] = useState(false);
  const {data , isLoading } = useGetIpAddress()
  const {cartIndex} = useContext(GlobalContext)
  const onSubmit = () => {
   //  const pagination = {
   //    address: false,
   //    delivery: false,
   //    payment: false,
   //  };
   //  localStorage.setItem("pagination", JSON.stringify(pagination));
   //  return history("/checkout");
  };
  return (
    <>
      <Layout>
        <CartBadge data="cart" />
        <div className="py-6 h-screen">
         {!isLoading &&
          isEmpty(data?.cart) ? (
            <div className="flex justify-center">
              <div className="bg-white rounded-md w-[90%] md:w-[50%] text-center p-6 shadow-md">
                <h3 className="font-extrabold text-xl">Your Cart is Empty!</h3>
                <h5 className="border-gray-bottom text-[#2E486B] py-4 text-lg">
                  You do not have any product on your cart yet.
                </h5>

                <div className="w-full flex justify-center items-center py-4">
                  <Link className="btn-default-full bg-red-primary text-lg flex items-center justify-center gap-2">
                    Check Around
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-3 p-4 md:p-0">
              <div className="bg-white rounded-md w-full md:w-[60%] text-center p-6 shadow-md">
                <div className="border-gray-bottom pb-2 md:flex hidden justify-between items-center pr-12">
                  <h3 className="flex justify-start font-bold text-[18px] w-[60%]">
                    Product
                  </h3>

                  <div className="flex w-[40%] justify-around">
                    <h3 className="font-bold text-[18px]">Quantity</h3>
                    <h3 className="font-bold text-[18px]">Price</h3>
                  </div>
                </div>
                {!isEmpty(data?.cart) &&
                  data?.cart.map((item, index) => {
                    return (
                      <Cart data={item} index={index}/>
                    );
                  })}
                <div className="py-3 md:flex hidden justify-between items-center">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[#2E486B]">Sub-total :</h3>
                      <h3 className="text-red-800 font-extrabold text-xl">
                        #12,500
                      </h3>
                    </div>

                    <div className="flex gap-2 items-center text-xs text-gray-400">
                      <AiOutlineExclamationCircle />
                      <p>Excluding shipping fee</p>
                    </div>
                  </div>

                  <div className="w-[70%] flex justify-center items-center">
                    {!isEmpty(cartIndex) ? (
                      <button
                        className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                        onClick={onSubmit}
                      >
                        Proceed to Checkout
                      </button>
                    ) : (
                      <button className="h-[62px] text-white rounded-md w-full bg-red-primary-default text-lg flex items-center justify-center gap-2">
                        Proceed to Checkout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen">
          <div className="py-3 flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between md:items-center">
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="text-[#2E486B]">Sub-total :</h3>
                <h3 className="text-red-800 font-extrabold text-xl">#12,500</h3>
              </div>
              <div className="flex gap-2 items-center text-xs text-gray-400">
                <AiOutlineExclamationCircle />
                <p>Excluding shipping fee</p>
              </div>
            </div>

            <div className="w-full md:w-[70%] flex justify-center items-center">
              {!isEmpty(cartIndex) ? (
                <button
                  className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                  onClick={onSubmit}
                >
                  Proceed to Checkout
                </button>
              ) : (
                <button className="h-[62px] text-white rounded-md w-full bg-red-primary-default text-lg flex items-center justify-center gap-2">
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CartController;
