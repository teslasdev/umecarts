import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import { DropdownDefault } from "./Dropdown";
import isEmpty from "../../utils/isEmpty";
import AddressValidate from "../../utils/Validation/AddressValidate";
import isError from "../../utils/isError";
import { ThreeDots } from "react-loader-spinner";
import { PrimaryButton } from "./Button";
import { GlobalContext } from "../../context";
import { Mutation, useMutation } from "@tanstack/react-query";
import { useCart } from "../../helper/api-hooks/useProduct";
import { UseAddAdress } from "../../helper/api-hooks/useGeneral";

export const FullModal = ({ Style, Label, onclick, info }) => {
  AOS.init();
  const [isLoading, setIsLoading] = useState(false);
  const { setUpdate } = useContext(GlobalContext);
  const Navigate = useNavigate();
  const mutation = useMutation(useCart, {
    onSuccess: (data) => {
      setIsLoading(true);
      window.location.href = "/cart";
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const handleAddToCart = () => {
    setIsLoading(true);
    const data = {
      product: info,
    };

    mutation.mutate(data);
  };
  return (
    <>
      <div className="blur-bg fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center text-[#2E486B]">
        <div
          className={`relative bg-white w-[90%] md:w-[50%] min-h-[100px]  blur-0 z-45 rounded-md  ${Style}`}
          data-aos="zoom-in-down"
        >
          <div className="overflow-y-scroll h-[600px] p-5 pb-32">
            <div className="flex justify-between items-center pr-4">
              <h3 className="font-bold text-[18px]">{Label}</h3>
              <span className="bg-gray-hover cursor-pointer" onClick={onclick}>
                <IoMdClose size={20} />
              </span>
            </div>

            <div className="flex justify-between pr-20 mt-5 font-semibold border-gray-bottom pb-2">
              <h5>Product Variation</h5>
              <h5>Quantity</h5>
            </div>

            <div className="flex justify-between my-3 items-center">
              <h2 className="font-bold">Size 41</h2>
              <div className="flex gap-5 items-center">
                <span className="um-product-reading text-[20px]">-</span>
                <h4>01</h4>
                <span className="um-product-reading text-[20px]">+</span>
                <p className="text-red-500 text-sm">(20) Available</p>
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Colour</span>
              <div className="flex items-end gap-6">
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4" />
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4" />
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Price</span>
              <div className="flex items-end gap-6">
                <h2 className="text-red-700 text-xl font-extrabold">
                  ₦12,500
                  <span className="text-sm text-gray-200 font-light">/pc</span>
                </h2>
              </div>
            </div>

            <div className="flex justify-between my-3 items-center">
              <h2 className="font-bold">Size 42</h2>
              <div className="flex gap-5 items-center">
                <span className="um-product-reading text-[20px]">-</span>
                <h4>01</h4>
                <span className="um-product-reading text-[20px]">+</span>
                <p className="text-red-500 text-sm">(20) Available</p>
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Colour</span>
              <div className="flex items-end gap-6">
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4" />
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4" />
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Price</span>
              <div className="flex items-end gap-6">
                <h2 className="text-red-700 text-xl font-extrabold">
                  ₦12,500
                  <span className="text-sm text-gray-200 font-light">/pc</span>
                </h2>
              </div>
            </div>

            <div className="flex justify-between my-3 items-center">
              <h2 className="font-bold">Size 43</h2>
              <div className="flex gap-5 items-center">
                <span className="um-product-reading text-[20px]">-</span>
                <h4>01</h4>
                <span className="um-product-reading text-[20px]">+</span>
                <p className="text-red-500 text-sm">(20) Available</p>
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Colour</span>
              <div className="flex items-end gap-6">
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4" />
                <span className="border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4" />
              </div>
            </div>

            <div className="flex items-center gap-8 py-2">
              <span>Price</span>
              <div className="flex items-end gap-6">
                <h2 className="text-red-700 text-xl font-extrabold">
                  ₦12,500
                  <span className="text-sm text-gray-200 font-light">/pc</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 bg-white p-3 py-4 w-full">
            <div className="flex items-center gap-8 py-2">
              <span>Total</span>
              <div className="flex items-end gap-6">
                <h2 className="text-red-700 text-xl font-extrabold">₦12,500</h2>
              </div>
            </div>

            <div className="flex gap-3">
              <PrimaryButton
                isLoading={isLoading}
                classNameButton={
                  "btn-default-full w-full bg-blue-secondary text-lg flex items-center justify-center gap-2"
                }
                click={handleAddToCart}
                type={true}
                name="Add to Cart"
              />
              {/* <Link to='/cart' className='btn-default-full bg-blue-secondary text-lg flex items-center justify-center gap-2'><FiShoppingCart /> Add to Cart</Link> */}
              <Link className="btn-default-full bg-red-secondary text-lg flex items-center justify-center gap-2">
                <SlHandbag /> Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FormPopup = ({ Style, Label, isOpen, isClose, ...props }) => {
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const [isErrors, setError] = useState({});
  const {addressDetails,setaddressDetails} = useContext(GlobalContext);

  const mutation = useMutation(UseAddAdress, {
    onSuccess: (data) => {
      isClose()
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const addAddress = {
      address,
      country,
      state,
      city,
      phoneNumber,
    };
    setLoading(true);
    const { isValid, errors } = AddressValidate(addAddress);
    if (!isValid) {
      setError(errors);
      setLoading(false);
      return;
    }
    console.log(addAddress)
    mutation.mutate(addAddress);
  };
  const  cities = [{ name: "Ogun" }, { name: "Osun" }, { name: "Lagos" }];
  const states = [
    {
      name: "Iole",
      cost: "500",
    },
    {
      name: "Shape",
      cost: "500",
    }
  ];

  const  countries = [{ name: "Nigeria" }, { name: "Ghana" }, { name: "South Africa" }];
  
  if (!isOpen) return null;
  AOS.init();
  return (
    <form onSubmit={onSubmit} autoComplete="false">
      <div className="blur-bg fixed bottom-0 left-0 z-50 w-full h-[85vh] flex justify-center items-center text-[#2E486B]">
        <div
          className={`relative bg-white w-[90%] sm:w-[40%] min-h-[100px] p-6  blur-0 z-45 rounded-md  ${Style}`}
          data-aos="zoom-in-down"
        >
          <div className="flex justify-between items-center pr-4">
            <h3 className="font-bold text-[18px]">{Label}</h3>
            <span className="bg-gray-hover cursor-pointer" onClick={isClose}>
              <IoMdClose size={20} />
            </span>
          </div>

          <div>
            <div className="w-full flex flex-col gap-2 py-2">
              <label className="font-bold">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House Number, Street, Town"
                className="um-sign-field border"
              />
              {isErrors.address && isError("Home Address is Required", true)}
            </div>

            <DropdownDefault
              placeholder={"Country"}
              label={"Country"}
              className={"w-full flex flex-col gap-1 py-2"}
              disabled="true"
              zIndex="z-30"
              setOption={setCountry}
              options={countries}
            />
            <div className="flex justify-between w-full">
              <div className="w-[48%] flex flex-col gap-2 py-2">
                <DropdownDefault
                  placeholder={"State"}
                  label={"State"}
                  className={"w-full flex flex-col gap-1"}
                  disabled="true"
                  zIndex="z-30"
                  setOption={setState}
                  options={cities}
                />
                {isErrors.state && isError("State is Required", true)}
              </div>

              <div className="w-[48%] flex flex-col gap-2 py-2">
                <DropdownDefault
                  placeholder={"City"}
                  label={"City"}
                  className={"w-full flex flex-col gap-1"}
                  disabled="true"
                  zIndex="z-30"
                  setOption={setCity}
                  options={states}
                />
                {isErrors.city && isError("City is Required", true)}
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 py-2">
              <label className="font-bold">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
                className="um-sign-field border"
              />
              {isErrors.phoneNumber &&
                isError("Phone Number is Required", true)}
            </div>

            <div className="w-[100%] flex justify-center items-center">
              <button className="h-[52px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2">
                {mutation.isLoading ? (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Save Address"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
