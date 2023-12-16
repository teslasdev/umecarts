import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import BasicInfoBankDetail from "./basicInfoBankdetai";
import BankDetail from "../modal/bankDetail";
import { ActionInput, PrimaryInput } from "../../common/Inputs";
import { useProduct } from "../../../helper/api-hooks/useProduct";
import { useGlobalState } from "../../common/store";
import ThumbNail from "../../pages/dashboard/product/ThumbNail";
import { useUpdateUser } from "../../../helper/api-hooks/useAuth";
import { BiErrorCircle } from "react-icons/bi";
import { Button } from "../../common/Button";
import isEmpty from "../../../utils/isEmpty";
import { GlobalContext } from "../../../context";
import { DeleteModal } from "../../common/commonModal";


const BasicBuyerInfo = ({
  Logo,
  setLogo,
  setUpload,
  setUploadType,
  data
}) => {
  const [detail, setDetail] = useState(false);
  const {bandDetails , setBankDetails} = useContext(GlobalContext)
  const [deleteModal , setDelete] = useState(false)
  const [onEdit , setEdit] = useState(false)
   const handleDetail = () => {
      setEdit("") 
      
      setDetail(!detail);
   };
   const handleEdit = (index) => {
      setDetail(!detail);
      setEdit(bandDetails[index])
   };
   const handleCloseDetail = () => {
    setDetail(false);
   };

   useEffect(() => {
      if(!isEmpty(data.user.bank_details)) {
         setBankDetails(data.user.bank_details)
      }
   },[])
   const {formik , isLoading} = useUpdateUser()
   const handleSubmit = (e) => {
      setBankDetails(data.user.bank_details)
      formik.setFieldValue('bank_details' , bandDetails)
      formik.setFieldValue('profile_picture' , Logo[0])
      e.preventDefault();
      formik.handleSubmit();
   };
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
               className={"w-full flex flex-col gap-1 py-4"}
               name={"firstname"}
               placeholder={data.user.firstname}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
             <span class={`${!formik.errors.firstname && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.firstname}</span>   
            <PrimaryInput 
               label={"Full Name"}
               placeholder={data.user.lastname}
               name={"lastname"}
               className={"w-full flex flex-col gap-1 py-4"}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
            <span class={`${!formik.errors.lastname && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.lastname}</span>   
            <PrimaryInput 
               label={"Email Address"}
               placeholder={data.user.email}
               name={"email"}
               className={"w-full flex flex-col gap-1 py-4"}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
            />
             <span class={`${!formik.errors.email && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.email}</span>   
            <PrimaryInput 
              label={"Phone Number"}
              placeholder={"07064422483"}
              className={"w-full flex flex-col gap-1 py-4"}
              name={"phone_number"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span class={`${!formik.errors.email && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.email}</span>  
          </div>
         <div className='flex flex-col gap-3 w-full'>
            <ActionInput
               label={'Profile Photo'}
               placeholder={'Click to add File'}
               className={'w-[100%] flex flex-col gap-1 py-4'} 
               actionLeft={'true'}
               actionText={'Browse'}
               onClick={() => setUpload(true) || setUploadType('Logo')}
            />
            {Logo &&
            <div className='flex gap-4 flex-wrap'>
               {!isEmpty(data.user.profile_picture) && isEmpty(Logo) && 
                  <ThumbNail item={data.user.profile_picture} index={0}  setLogo={setLogo} Logo={Logo} />
               }
               {
                  Logo.map((item, index) => {
                     return <ThumbNail item={item} index={index} setLogo={setLogo} Logo={Logo} />
                  })
               }
            </div>
            }
         </div>
          <div className="btn-new sm:w-[30%] w-full flex justify-end with rit">
            <Button 
              disabled={!formik.isValid || !formik.dirty} 
              isLoading={isLoading} 
              className="um-btn um-btn-filled cursor-pointer" 
              name="Save Changes" 
              auth="button"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <div className="pro-main-container">
        <div className="close-head">
          <div className="det-head">Payment</div>
        </div>
        <div className="payment-row">
         {!isEmpty(bandDetails) ? bandDetails.map((item , index) => {
            return (
               <BasicInfoBankDetail
                  status={"DEFAULT"}
                  bankName={item.bank}
                  accNo={item.number}
                  accountName={item.name}
                  index={index}
                  onDelete={() => setDelete(true)}
                  onEdit={() => handleEdit(index)}
               />
            )
         })
         :
            <div className="h-[60px] w-full flex justify-center items-center">
               <p>No Bank Added</p>
            </div>
         }
        </div>
        <div className="position-stage">
          <div className="btn-new  rit magbt">
            <button className="dash-btn bankbtn  ind" onClick={handleDetail}>
              <AiOutlinePlus /> Add new Bank
            </button>
          </div>
          {detail && (
            <BankDetail handleCloseDetail={handleCloseDetail} dir={"btmm"} editData={onEdit}/>
          )}
          {deleteModal &&
            <DeleteModal onClose={() => setDelete(false)} title={"Are you sure you want to delete the bank details ?"}/>
            }
        </div>
        
      </div>
    </>
  );
};

export default BasicBuyerInfo;