import { PiWarningCircleBold } from "react-icons/pi";
import LogoModal from "../../dashComponents/modal/logoModal";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import BasicInfoBankDetail from "./basicInfoBankdetai";
import BankDetail from "../modal/bankDetail";
import { ActionInput, PrimaryInput } from "../../common/Inputs";
import { useProduct } from "../../../helper/api-hooks/useProduct";
import { RiErrorWarningLine } from "react-icons/ri";
import Tags from "../../pages/dashboard/product/Tags";
import { useGlobalState } from "../../common/store";
import ThumbNail from "../../pages/dashboard/product/ThumbNail";
import UploadFileModal from "../modal/uploadFileModal";

const BasicInfo = ({
   Logo,
   setLogo,
   setUpload,
   setUploadType,
}) => {
  const [tags , setTags] = useGlobalState('tags');
  const [detail, setDetail] = useState(false);
  const handleDetail = () => {
    setDetail(!detail);
  };
  const handleCloseDetail = () => {
    setDetail(false);
  };

  const [tagColor] = useState([
   "#FEF8F3",
   "#F3F3F3",
   "#F0FEF9",
   "#F0FEF2",
   "#F0FEF7"
])

   const {formik} = useProduct()

  return (
    <>
      <div className="pro-main-container">
        <div className="close-head">
          <div className="det-head">Personal Information</div>
        </div>
        <form action="">
          <div className="flex flex-col">
            <PrimaryInput 
               label={"Full Name"}
               placeholder={"Grove Mill"}
               className={"w-full flex flex-col gap-1 py-4"}
            />
            <PrimaryInput 
               label={"Email Address"}
               placeholder={"thewinehouse@gmail.com"}
               className={"w-full flex flex-col gap-1 py-4"}
            />
            <PrimaryInput 
               label={"Phone Number"}
               placeholder={"07064422483"}
               className={"w-full flex flex-col gap-1 py-4"}
            />
          </div>
          <div className="close-head">
            <div className="det-head">Shop Information</div>
          </div>
         <div className='relative z-10 w-full flex flex-col  py-4'>
            <div className='flex items-center gap-2'>
            <input 
              name="shopName"
              type="text"
              placeholder='Shop Name' 
              className={`um-sign-field w-4/5 ${formik.errors.shopName ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              <p>.umecarts.com</p>
            </div>
            <span class="text-sm flex items-center gap-1 pt-2"><RiErrorWarningLine />Your shop name will be used as prefix for your personal domain</span>
         </div>
         <div className='flex flex-col gap-3 w-full'>
            <ActionInput
               label={'Gallary Images'}
               placeholder={'Click to add File'}
               className={'w-[100%] flex flex-col gap-1 py-4'} 
               actionLeft={'true'}
               actionText={'Browse'}
               onClick={() => setUpload(true) || setUploadType('Logo')}
            />
            {Logo &&
            <div className='flex gap-4 flex-wrap'>
               {
                  Logo.map((item, index) => {
                     return <ThumbNail item={item} index={index} setLogo={setLogo} Logo={Logo} />
                  })
               }
            </div>
            }
         </div>
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'text'}
            label={'Tags'} 
            className={'w-full  flex flex-col gap-1 py-4'} 
            Tags={tags}
            setTags={setTags}
            enterOption={true}
            name="tags"
            valueText={tags}
            onChange={formik.handleChange}
            
         />
         <div className="shop-warnn">
           <PiWarningCircleBold />{" "}
           <span>Provide 3-5 tags that best describes your store</span>
         </div>
         <div className='flex gap-2 pp-4 flex-wrap'>
            {tags.map((item , index) => {
               return <Tags setTags={setTags} Tags={tags} index={index} color={tagColor[Math.floor(Math.random() * 4)]} name={item}/>
            })}
         </div>
          <div className="btn-new with rit">
            <button className="dash-btn ind">Save Changes</button>
          </div>
        </form>
      </div>
      <div className="pro-main-container">
        <div className="close-head">
          <div className="det-head">Payment</div>
        </div>
        <div className="payment-row">
          <BasicInfoBankDetail
            status={"DEFAULT"}
            bankName={"Guarantee Trust Bank"}
            accNo={"0704960493"}
          />
          <BasicInfoBankDetail
            status={"SET AS DEFAULT"}
            bankName={"Access Bank"}
            accNo={"0221107354"}
          />
        </div>
        <div className="position-stage">
          <div className="btn-new  rit magbt">
            <button className="dash-btn bankbtn  ind" onClick={handleDetail}>
              <AiOutlinePlus /> Add new Bank
            </button>
          </div>
          {detail && (
            <BankDetail handleCloseDetail={handleCloseDetail} dir={"btmm"} />
          )}
        </div>
        
      </div>
    </>
  );
};

export default BasicInfo;