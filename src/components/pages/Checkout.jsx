import React, { useEffect, useState } from "react";
import { CartBadge } from "../common/Badge";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { HiOutlinePencil } from "react-icons/hi2";
import { FormPopup } from "../common/Modal";
import isEmpty from "../../utils/isEmpty";
import { getLocalStorage } from "../../utils/getLocalStorage";
import { FormInput } from "../common/Inputs";
import paymentCard from "../../assets/image/payment-card.png";
import { IoCashOutline, IoWallet } from "react-icons/io5";
import { BsCheck2Circle } from "react-icons/bs";

export const CheckoutAddress = ({ data, price }) => {
  const Navigate = useNavigate();
  const [handleModal, setModal] = useState(false);
  const handleSubmit = () => {
    const { data } = getLocalStorage("pagination");
    data.address = true;
    var storageAddressUpdate = data;
    localStorage.setItem("pagination", JSON.stringify(storageAddressUpdate));
    Navigate("/checkout/delivery_info");
  };
  const currentBadge = {
    cart: false,
    checkout: true,
    delivery: false,
    payment: false,
    confirm: false,
  };
  const doneBadge = {
    cart: true,
    checkout: false,
    delivery: false,
    payment: false,
    confirm: false,
  };
  const [checked, setCheck] = useState();
  return (
    <>
      <Layout>
        <CartBadge done={doneBadge} current={currentBadge} />
        <div className="py-6 h-screen">
          {isEmpty(data) ? (
            <div className="flex justify-center mt-3 p-4 md:p-0">
              <div className="bg-white rounded-md w-full md:w-[50%] text-center p-6 shadow-md">
                <h3 className="font-extrabold text-2xl">No Saved Address!</h3>
                <h5 className="border-gray-bottom text-[#2E486B] py-4 text-xl">
                  You do not have any address saved yet, add a new address to
                  continue checkout.
                </h5>

                <div className="border-gray-bottom flex justify-center py-3">
                  <div
                    className="underline decoration-1 flex justify-start text-blue-600 font-extrabold cursor-pointer"
                    onClick={() => setModal(!handleModal)}
                  >
                    + Add new Address
                  </div>
                </div>

                <div className="md:flex hidden py-3  justify-between items-center">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[#2E486B]">Sub-total :</h3>
                      <h3 className="text-red-800 font-extrabold text-xl">
                        ₦{price.toLocaleString()}
                      </h3>
                    </div>

                    <div className="flex gap-2 items-center text-xs text-gray-400">
                      <AiOutlineExclamationCircle />
                      <p>Excluding shipping fee</p>
                    </div>
                  </div>

                  <div className="w-[70%] flex justify-center items-center">
                    <button
                      className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                      onClick={console.log("ok")}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-3">
              <div className="bg-white rounded-md w-[90%] md:w-[70%] text-center p-6 shadow-md">
                {data.map((item, index) => {
                  return (
                    <div
                      className="flex flex-row flex-wrap gap-3 sm:gap-0 border-gray-full p-6 my-2 rounded-md"
                      key={index}
                    >
                      <div className="w-[5%]">
                        <div
                          className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                          onClick={() => setCheck(index)}
                        >
                          {checked == index && (
                            <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row  md:gap-4 gap-6  w-[90%] md:w-[90%]">
                        <div className="flex md:flex-col flex-row md:max-w-[45%] w-full gap-4 sm:justify-between items-start">
                          <h5 className="text-gray-400 text-start  text-xs sm:text-lg w-[30%]">
                            Address
                          </h5>
                          <h3 className="text-xs sm:text-lg text-start  text-[#2E486B] font-bold">
                            {item.address}
                          </h3>
                        </div>
                        <div className="flex md:flex-col flex-row md:max-w-[10%] gap-4 w-full  sm:justify-between items-start">
                          <h5 className="text-gray-400 text-start  text-xs sm:text-lg w-[30%]">
                            City
                          </h5>
                          <h3 className="text-xs sm:text-lg text-start  text-[#2E486B] font-bold">
                            {item.city}
                          </h3>
                        </div>

                        <div className="flex md:flex-col flex-row md:max-w-[10%] gap-4 w-full sm:justify-between items-start">
                          <h5 className="text-gray-400 text-start  text-xs sm:text-lg w-[30%]">
                            State
                          </h5>
                          <h3 className="text-xs sm:text-lg text-start  text-[#2E486B] font-bold">
                            {item.state}
                          </h3>
                        </div>

                        <div className="flex md:flex-col flex-row md:max-w-[10%] gap-4 w-full  sm:justify-between items-start">
                          <h5 className="text-gray-400 text-start  text-xs sm:text-lg w-[30%]">
                            Country
                          </h5>
                          <h3 className="text-xs sm:text-lg text-start  text-[#2E486B] font-bold">
                            Nigeria
                          </h3>
                        </div>

                        <div className="flex md:flex-col flex-row md:max-w-[10%] gap-4 w-ful sm:justify-between  items-start">
                          <h5 className="text-gray-400 text-start text-xs sm:text-lg w-[30%]">
                            Phone
                          </h5>
                          <h3 className="text-xs sm:text-lg text-[#2E486B] font-bold">
                            {item.phone_no}
                          </h3>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-4  sm:w-[5%] w-full  justify-end items-center">
                        <div className="self-center um-cart-delete bg-[#F0F7FF]">
                          <HiOutlinePencil />
                        </div>
                        <div className="self-center um-cart-delete bg-[#FEF0F0]">
                          <RiDeleteBin6Line />
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="border-gray-bottom flex justify-center py-3">
                  <div
                    className="underline decoration-1 flex justify-start text-blue-600 font-extrabold cursor-pointer"
                    onClick={() => setModal(!handleModal)}
                  >
                    + Add new Address
                  </div>
                </div>

                <div className="py-3 md:flex hidden justify-between items-center">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[#2E486B]">Sub-total :</h3>
                      <h3 className="text-red-800 font-extrabold text-xl">
                        #{price.toLocaleString()}
                      </h3>
                    </div>

                    <div className="flex gap-2 items-center text-xs text-gray-400">
                      <AiOutlineExclamationCircle />
                      <p>Excluding shipping fee</p>
                    </div>
                  </div>

                  <div className="w-[70%] flex justify-center items-center">
                    <button
                      className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                      onClick={handleSubmit}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {handleModal ? (
          <FormPopup
            Label="Add New Address"
            isOpen={handleModal}
            isClose={() => setModal(false)}
            Style="w-[35%]"
          />
        ) : (
          <div className="fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen">
            <div className="py-3 flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between md:items-center">
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

              <div className="w-full md:w-[70%] flex justify-center items-center">
                <button
                  className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export const CheckoutDelivery = ({ data, price }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout/payment_info");
  };
  const currentBadge = {
    cart: false,
    checkout: false,
    delivery: true,
    payment: false,
    confirm: false,
  };
  const doneBadge = {
    cart: true,
    checkout: true,
    delivery: false,
    payment: false,
    confirm: false,
  };
  const [checked, setCheck] = useState();
  return (
    <>
      <Layout>
        <CartBadge done={doneBadge} current={currentBadge} />
        <div className="py-6 h-screen">
          <div className="flex justify-center mt-3">
            <div className="bg-white rounded-md w-[90%] md:w-[50%] text-center p-6 shadow-md">
              {data?.map((item, index) => {
                return (
                  <div className="flex item-center gap-3 py-3">
                    <div className="um-cart-img-small rounded-sm">
                      <img
                        src={
                          process.env.REACT_APP_S3_ENDPOINT +
                          "/" +
                          item?.product?.image?.galleries.toReversed()[0]
                        }
                        className="w-full h-full rounded-sm object-fit"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start">
                      <h3 className="font-extrabold text-lg">{item.title}</h3>
                      <div className="flex gap-4 w-[100%] items-center">
                        <p className="text-sm font-semibold text-gray-500">
                          From
                        </p>
                        <h3 className="text-md font-bold text-[#2E486B]">
                          {item?.product?.product?.user?.firstname}{" "}
                          {item?.product?.product?.user?.lastname}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="border-gray-bottom-top  border-gray-bottom md:flex hidden justify-between py-5">
                <div className="flex gap-4 w-[40%] items-center">
                  <p className="text-sm font-semibold text-gray-500">
                    Delivery Type
                  </p>
                </div>

                <div className="w-[50%] flex justify-between">
                  <div
                    className="border-gray-full rounded-md flex gap-3 h-[56px] items-center px-4 cursor-pointer"
                    onClick={() => setCheck(0)}
                  >
                    <div className="w-[10%]">
                      <div
                        className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                      >
                        {checked == 0 && (
                          <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-md font-bold text-[#2E486B]">
                      Local Delivery
                    </h3>
                  </div>

                  <div
                    className="border-gray-full rounded-md flex gap-3 h-[56px] items-center px-4 cursor-pointer"
                    onClick={() => setCheck(1)}
                  >
                    <div className="w-[10%]">
                      <div
                        className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                        onClick={() => setCheck(1)}
                      >
                        {checked == 1 && (
                          <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-md font-bold text-[#2E486B]">
                      Local Pickup
                    </h3>
                  </div>
                </div>
              </div>
              <div className="py-3 md:flex hidden justify-between items-center">
                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="text-[#2E486B]">Sub-total :</h3>
                    <h3 className="text-red-800 font-extrabold text-xl">
                      ₦{price.toLocaleString()}
                    </h3>
                  </div>

                  <div className="flex gap-2 items-center text-xs text-gray-400">
                    <AiOutlineExclamationCircle />
                    <p>Excluding shipping fee</p>
                  </div>
                </div>

                <div className="w-[70%] flex justify-center items-center">
                  <button
                    className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen">
          <div className="border-gray-bottom-top  border-gray-bottom block justify-between py-5">
            <div className="flex gap-4 w-[40%] items-center">
              <p className="text-sm font-semibold text-gray-500">
                Delivery Type
              </p>
            </div>

            <div className="md:w-[50%] w-full mt-3 md:mt-0 flex justify-between">
              <div
                className="border-gray-full rounded-md flex gap-3 h-[56px] items-center px-4 cursor-pointer"
                onClick={() => setCheck(0)}
              >
                <div className="w-[10%]">
                  <div
                    className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                  >
                    {checked == 0 && (
                      <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                    )}
                  </div>
                </div>
                <h3 className="text-md font-bold text-[#2E486B]">
                  Local Delivery
                </h3>
              </div>

              <div
                className="border-gray-full rounded-md flex gap-3 h-[56px] items-center px-4 cursor-pointer"
                onClick={() => setCheck(1)}
              >
                <div className="w-[10%]">
                  <div
                    className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                    onClick={() => setCheck(1)}
                  >
                    {checked == 1 && (
                      <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                    )}
                  </div>
                </div>
                <h3 className="text-md font-bold text-[#2E486B]">
                  Local Pickup
                </h3>
              </div>
            </div>
          </div>
          <div className="py-3 flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between md:items-center">
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="text-[#2E486B]">Sub-total :</h3>
                <h3 className="text-red-800 font-extrabold text-xl">
                  #{price.toLocaleString()}
                </h3>
              </div>
              <div className="flex gap-2 items-center text-xs text-gray-400">
                <AiOutlineExclamationCircle />
                <p>Excluding shipping fee</p>
              </div>
            </div>

            <div className="w-full md:w-[70%] flex justify-center items-center">
              <button
                className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const CheckoutPayment = ({ data, price }) => {
  const navigate = useNavigate();
  const handleCompletion = () => {
    navigate("/checkout/completion");
  };
  const currentBadge = {
    cart: false,
    checkout: false,
    delivery: false,
    payment: true,
    confirm: false,
  };
  const doneBadge = {
    cart: true,
    checkout: true,
    delivery: true,
    payment: false,
    confirm: false,
  };
  const [checked, setCheck] = useState();
  console.log(data)
  const Totalprice = data && data?.reduce((acc , product) => acc + product.product?.price?.unit_price , 0);
  return (
    <>
      <Layout>
        <CartBadge done={doneBadge} current={currentBadge} />
        <div className="py-6 md:h-screen w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-[90%] md:h-[520px]">
            <div className="md:w-[30%] w-full bg-white rounded-md">
              <div className="border-blue flex py-3 px-2 items-center justify-between">
                <div className="font-semibold text-md">Summary</div>
                <div className="bg-blue-100 rounded-full px-2 text-xs flex  justify-center items-center">
                  1 item(s)
                </div>
              </div>

              <div className="border-blue flex flex-col w-full py-3 px-2">
                <div className="flex py-3 px-2 items-center justify-between">
                  <div className="font-semibold text-md">Product</div>
                  <div className="font-semibold text-md">Total</div>
                </div>
                {data.map((item, index) => {
                  return (
                    <div className="flex py-3 px-2 items-center justify-between" key={index}>
                      <div className="text-sm">
                        <span className="font-bold">1×</span> {item?.product?.information?.product_name}
                      </div>
                      <div className="font-semibold text-md">₦{item?.product?.price?.unit_price.toLocaleString()}</div>
                    </div>
                  );
                })}
                
              </div>

              <div className="border-blue flex flex-col text-[17px] w-full py-3 px-2">
                <div className="flex py-3 px-2 items-center justify-between">
                  <div className="font-normal">Subtotal</div>
                  <div className="font-semibold">₦{Totalprice.toLocaleString()}</div>
                </div>

                <div className="flex py-3 px-2 items-center justify-between">
                  <div className="font-normal">V.A.T</div>
                  <div className="font-semibold">₦0</div>
                </div>

                <div className="flex py-3 px-2 items-center justify-between">
                  <div className="font-normal">Shipping Info</div>
                  <div className="font-semibold">₦0</div>
                </div>
              </div>

              <div className="border-blue flex py-3 px-2 items-center justify-between">
                <div className="font-semibold text-lg">Total</div>
                <div className="font-semibold text-lg">₦{Totalprice.toLocaleString()}</div>
              </div>
              <div className="w-full flex items-center px-3 py-4">
                <FormInput
                  className="h-[45px] md:w-[90%] w-full"
                  Text="Apply"
                  type="text"
                  placeholder="Apply Coupon Code"
                />
              </div>
            </div>

            <div className="md:w-[67%] w-full bg-white rounded-md pb-10">
              <div className="border-blue p-4">
                <h5 className="font-bold">Select a payment option</h5>
              </div>
              <div className="border-blue md:p-5 py-10 px-5 flex gap-4 justify-between flex-wrap md:h-[43%]">
                <div
                  className="sm:w-[45%] w-full flex gap-4 cursor-pointer"
                  onClick={() => setCheck(1)}
                >
                  <div className="w-[5%]">
                    <div
                      className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                      onClick={() => setCheck(1)}
                    >
                      {checked == 1 && (
                        <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                      )}
                    </div>
                  </div>
                  <div className="border-gray-full w-[90%] mb-12 md:mb-0 rounded-md p-4 h-[130px]">
                    <h4 className="font-bold">Pay with</h4>
                    <h5>Bank Transfer, Debit Card, USSD</h5>
                    <div className="w-full flex justify-center items-center h-[50px]">
                      <img src={paymentCard} alt="" srcset="" />
                    </div>
                    <div className="flex p-2 items-center justify-center bg-white">
                      <i>Secured by Paystack</i>
                    </div>
                  </div>
                </div>
                <div
                  className="sm:w-[45%] w-full flex gap-4 cursor-pointer"
                  onClick={() => setCheck(2)}
                >
                  <div className="w-[5%]">
                    <div
                      className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                      onClick={() => setCheck(2)}
                    >
                      {checked == 2 && (
                        <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                      )}
                    </div>
                  </div>
                  <div className="border-gray-full w-[90%] rounded-md p-4 flex items-center h-[100px] gap-3">
                    <IoCashOutline size={25} />
                    Pay on Delivery
                  </div>
                </div>
              </div>
              <div
                className="border-blue md:p-5 sm:w-[45%] w-full py-15 px-5 flex gap-4 flex-wrap md:h-[33%] cursor-pointer"
                onClick={() => setCheck(3)}
              >
                <div className="w-[5%]">
                  <div
                    className={`um-cart-border-rounded rounded-full  w-[16px] h-[16px] cursor-pointer justify-center items-center`}
                    onClick={() => setCheck(3)}
                  >
                    {checked == 3 && (
                      <div className="w-[8px] h-[8px] rounded-full  bg-[#002c66]"></div>
                    )}
                  </div>
                </div>
                <div className="border-gray-full w-[90%] rounded-md p-4 flex gap-3 items-center h-[100px]">
                  <IoWallet color="#02BD73" size={25} />
                  <div>
                    <h4 className="font-bold flex gap-2 items-center">
                      Pay from Wallet
                    </h4>
                    <h5>Balance: N5,000</h5>
                  </div>
                </div>
              </div>
              <div className="h-[40%]">
                <div className="py-3 md:flex hidden justify-between items-center md:h-[30%] p-5">
                  <div>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-[#2E486B]">Sub-total :</h3>
                      <h3 className="text-red-800 font-extrabold text-xl">
                        ₦{price.toLocaleString()}
                      </h3>
                    </div>

                    <div className="flex gap-2 items-center text-xs text-gray-400">
                      <AiOutlineExclamationCircle />
                      <p>Excluding shipping fee</p>
                    </div>
                  </div>

                  <div className="w-[70%] flex justify-center items-center">
                    <button
                      className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                      onClick={handleCompletion}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen">
          <div className="py-3 flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between md:items-center">
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="text-[#2E486B]">Sub-total :</h3>
                <h3 className="text-red-800 font-extrabold text-xl">
                  ₦{price.toLocaleString()}
                </h3>
              </div>
            </div>

            <div className="w-full md:w-[70%] flex justify-center items-center">
              <button
                className="h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2"
                onClick={handleCompletion}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const CheckoutComplete = ({ data }) => {
  const currentBadge = {
    cart: false,
    checkout: false,
    delivery: false,
    payment: false,
    confirm: true,
  };
  const doneBadge = {
    cart: true,
    checkout: true,
    delivery: true,
    payment: true,
    confirm: false,
  };
  return (
    <>
      <Layout>
        <CartBadge done={doneBadge} current={currentBadge} />
        <div className="py-6 h-screen">
          <div className="flex justify-center mt-3">
            <div className="bg-white rounded-md md:w-[60%] w-[90%] text-center p-4 shadow-md">
              <div className="w-full flex justify-center items-center h-[100px]">
                <BsCheck2Circle size={100} color="green" />
              </div>
              <h3 className="font-extrabold text-2xl">Order Successful!</h3>
              <h5 className="border-gray-bottom text-[#2E486B] py-4 text-lg">
                You have successfully made payment for your order(s). A copy of
                your order summary has been sent to your registered email. You
                can{" "}
                <Link to="" className="text-red-500 cursor-pointer">
                  {" "}
                  continue shopping
                </Link>{" "}
                or{" "}
                <Link to="" className="text-red-500 cursor-pointer">
                  {" "}
                  track your order(s){" "}
                </Link>{" "}
                to stay updated with your product(s) delivery.
              </h5>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
