import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { GlobalContext } from "../../context";
import isEmpty from "../../utils/isEmpty";
import { useGetIpAddress } from "../../helper/api-hooks/useAuth";

const Navigation = () => {
  const { userData } = useContext(GlobalContext);
  const { data, isLoading, refetch } = useGetIpAddress();
  return (
    <>
      <div className="um-footer-navigation flex justify-between fixed bottom-0 w-full z-10 bg-white">
        <Link className="flex flex-col items-center justify-center" to={"/"}>
          <BiHome size={18} color="#1F3047" />
          <p className="pt-1 font-semibold">Home</p>
        </Link>

        <Link to="/cart" className="relative flex flex-col items-center justify-center">
          {data?.cart.length > 0 && (
            <span className="absolute bg-[#004399] rounded-full text-white w-[15px] h-[15px] flex justify-center items-center text-[7px] top-0 right-[-8px]">
              {data?.cart.length}
            </span>
          )}
          <FiShoppingCart size={18} color="#1F3047" />
          <p className="pt-1 font-semibold">Cart</p>
        </Link>

        <Link  className="relative flex flex-col items-center justify-center">
          <span className="absolute bg-[#004399] rounded-full text-white w-[15px] h-[15px] flex justify-center items-center text-[7px] top-0 right-[-8px]">
            3
          </span>
          <IoChatboxEllipsesOutline size={18} color="#1F3047" />
          <p className="pt-1 font-semibold">Chat</p>
        </Link>

        <Link
          className="flex flex-col items-center justify-center"
          to={isEmpty(userData) ? "/auth/login" : "/buyer/dashboard"}
        >
          <FaRegUserCircle size={18} color="#1F3047" />
          <p className="pt-1 font-semibold">My Account</p>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
