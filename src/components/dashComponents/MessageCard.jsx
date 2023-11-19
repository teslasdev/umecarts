import shoe from "../../assets/products/product4.png";

const MessageCard = ({ handleChatPage }) => {
  return (
    <div className="message-card-container" onClick={handleChatPage}>
      <div className="profile-name-message-box">
        <div className="profile-image">
          <img src={shoe} alt="" />
        </div>
        <div className="name-msg-prod-box">
          <div className="name-txt">Tony Montana</div>
          <div className="msg-txt">
            Hello! i want to make some few clarifications about this product
          </div>
          <div className="prod-txt">Louis Vuitton Pam slipper</div>
        </div>
      </div>
      <div className="status-time-box">
        <div className="status">Active</div>
        <div className="time-text">12:00am</div>
      </div>
    </div>
  );
};

export default MessageCard;
