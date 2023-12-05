import { PiWarningCircleBold } from "react-icons/pi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { PrimaryButton } from "../../common/Button";
import { ActionInput, PrimaryInput } from "../../common/Inputs";

const Privacy = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="pro-main-container">
        <div className="close-head al-head">
          <div className="det-head dddw">Change email address</div>
        </div>
        <form action="">
          <div className="w-full flex items-center">
            <ActionInput 
               className={"w-full"} 
               placeholder={"E.g., thewinehouse@gmail.com"} 
               actionClick={true} 
               label={"New Email Address"} 
               actionRight={true} actionText={"Verify"} 
               disabled={true}
               info={true} 
               bgColor={true}
               infoText={"A link will be sent to your new email to confirm your request."} />
          </div>
        </form>
        <div className="close-head al-head">
          <div className="det-head dddw">Change Password</div>
        </div>
        <form action="">
          <div className="inp-lab-con">
            <label htmlFor="">Current Password</label>
            <div className="inp-com eye-sd">
              <input
                type={passwordVisible ? "text" : "password"}
                className="details-inp "
                placeholder="Enter current password"
              />
              <div className="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">New Password</label>
            <div className="inp-com eye-sd">
              <input
                type={passwordVisible ? "text" : "password"}
                className="details-inp "
                placeholder="Enter new password"
              />
              <div className="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Confirm New Password</label>
            <div className="inp-com eye-sd">
              <input
                type={passwordVisible ? "text" : "password"}
                className="details-inp "
                placeholder="Confirm new password"
              />
              <div className="eye" onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </div>{" "}
          <div className="shop-warnn">
            <PiWarningCircleBold /> <span>Password must match</span>
          </div>
          <div className="btn-new with rit">
            <button className="dash-btn ind ">Change Password</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Privacy;