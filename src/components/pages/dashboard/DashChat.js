import shoe from "../../../assets/products/product4.png";
import { HiOutlineCamera } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

// function autoResize() {
//   const textarea = document.getElementById("chat-inp");

//   if (textarea) {
//     textarea.style.height = "auto"; // Reset the height to auto before recalculating

//     const newHeight = textarea.scrollHeight;
//     const maxHeight = 50; // Maximum height we want the textarea to grow to (50px in this case)

//     // Limit the maximum height to 50px
//     textarea.style.height = `${Math.min(newHeight, maxHeight)}px`;
//   }
// JavaScript function to auto resize the textarea
function autoResize() {
  const div = document.getElementById("chat-inp");
  if (div) {
    // Reset the height before recalculating
    div.style.height = "auto";

    // Calculate the scroll height and set the new height
    div.style.height = `${div.scrollHeight}px`;
  }
}

const DashChat = ({ handleCloseChatPage }) => {
  return (
    <div className="chat-dash-container">
      <FaArrowLeft className="back-arrw" onClick={handleCloseChatPage} />
      <div className="name-act-box">
        <div className="customer-name">Tony Montana</div>
        <div className="act-tim">Active 2 days ago</div>
      </div>
      <div className="chat-main-container">
        <div className="date-chat">Thu 8 Jul 2023</div>

        <div className="pro-customer-box">
          <div className="profile-image">
            <img src={shoe} alt="" className="cus-pro" />
          </div>
          <div className="time-msg-sent">
            <div className="customer-chat-cont">
              <div className="pro-info">Product Information</div>
              <div className="img-title-box">
                <img src={shoe} alt="" />
                <div className="tit-word">Louis Vuitton Pam slipper</div>
              </div>
              <div className="min-msg">
                Hello! i want to make some few clarifications about this
                product. How will i get them?
              </div>
            </div>
            <div className="time-sent">5:21pm</div>
          </div>
        </div>

        <div className="seller-box">
          <div className="seller-sent-time">
            <div className="seller-chat-cont ">
              Good afternoon! you can get them as soon as you order. Delivery
              takes about 3 days. it will be sent to your location and in the
              interim, you can use your order/tracking code to track the product
              untill it gets delivered. Thank you.
            </div>
            <div className="time-sent">5:21pm</div>
          </div>

          <div className="profile-image">
            <img src={shoe} alt="" />
          </div>
        </div>
        <div className="pro-customer-box">
          <div className="profile-image">
            <img src={shoe} alt="" className="cus-pro" />
          </div>
          <div className="customer-chat-cont">
            <div className="min-msg">
              Hello! i want to make some few clarifications about this product.
              How will i get them?
            </div>
          </div>
        </div>
        <div className="seller-box">
          <div className="seller-sent-time">
            <div className="seller-chat-cont ">
              Good afternoon! you can get them as soon as you order. Delivery
              takes about 3 days. it will be sent to your location and in the
              interim, you can use your order/tracking code to track the product
              untill it gets delivered. Thank you.
            </div>
            <div className="time-sent">5:21pm</div>
          </div>
          <div className="profile-image">
            <img src={shoe} alt="" />
          </div>
        </div>
        <div className="pro-customer-box">
          <div className="profile-image">
            <img src={shoe} alt="" className="cus-pro" />
          </div>
          <div className="time-msg-sent">
            <div className="msg-sequential">
              <div className="customer-chat-cont">
                <div className="min-msg">
                  Hello! i want to make some few clarifications about this
                  product. How will i get them?
                </div>
              </div>
              <div className="customer-chat-cont">
                <div className="pro-info">Product Information</div>
                <div className="img-title-box">
                  <img src={shoe} alt="" />
                  <div className="tit-word">Louis Vuitton Pam slipper</div>
                </div>
                <div className="min-msg">
                  Hello! i want to make some few clarifications about this
                  product. How will i get them?
                </div>
              </div>
            </div>
            <div className="time-sent">5:21pm</div>
          </div>
        </div>
      </div>
      <form action="">
        <div className="inp-msg-cont">
          <div className="cam-inp-box">
            <HiOutlineCamera className="vision chat-btn" />
            <textarea
              type="text"
              className="chat-inp"
              id="chat-inp"
              placeholder="Type your response here..."
              oninput={autoResize()}
            ></textarea>
            {/* <div id="hidden-div" class="chat-inp hidden"></div> */}
          </div>
          <IoSend type="submit" className="send-btn chat-btn" />
        </div>
      </form>
    </div>
  );
};

export default DashChat;
