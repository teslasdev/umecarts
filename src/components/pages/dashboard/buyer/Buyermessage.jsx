import { useState } from "react";
import "../../../../styles/dash-css/message.css";
import { HiOutlineSearch } from "react-icons/hi";
import MessageCard from "../../../dashComponents/MessageCard";
import DashChat from "../DashChat";
import BuyerLayout from "../../../layout/BuyerLayout";

const Buyermessage = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const [chatPage, setChatPage] = useState(false);
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  const handleChatPage = () => {
    setChatPage(true);
  };
  const handleCloseChatPage = () => {
    setChatPage(false);
  };
  return (
    <BuyerLayout>
      <div className="product-dash-container">
        {chatPage ? (
          <DashChat handleCloseChatPage={handleCloseChatPage} />
        ) : (
          <>
            <div className="product-head-box">
              <div className="tit-body">
                <div className="dashbor-text">Message</div>
                <div className="dashbor-simple red">
                  Messages from buyers & potential buyers.
                </div>
              </div>
            </div>
            <div className="pro-main-container">
              <div className="search-procount-box rgh">
                <input
                  type="text"
                  className={
                    searchToggleIcon ? "search-inp disp" : "search-inp"
                  }
                  placeholder="Search for a product..."
                />
                <HiOutlineSearch
                  className="search-icon"
                  onClick={handleSearchToggleIcon}
                />
              </div>
              {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">Your Message is Empty!</div>
            <div className="pro-simple">
            You do not have any message yet.
            </div>
          </div> */}
              <div className="nonempty-pro-container">
                <MessageCard handleChatPage={handleChatPage} />
              </div>
            </div>
          </>
        )}
      </div>
    </BuyerLayout>
  );
};

export default Buyermessage;
