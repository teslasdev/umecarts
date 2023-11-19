import React, { useEffect, useState } from 'react'
import NoSideLayout from '../../../layout/NoSideLayout'
import { ActionInput, DatePicker, DatePickerCustom, PrimaryInput, TextAreaInput } from '../../../common/Inputs'
import { DropdownDefault } from '../../../common/Dropdown'
import Tags from './Tags'
import ToggleSwitch from '../../../dashComponents/ToggleSwitch'
import ThumbNail from './ThumbNail'
import { RxCross2 } from 'react-icons/rx'
import {  useCategory, useTags } from '../../../../helper/api-hooks/useGeneral'
import { FaAngleRight } from 'react-icons/fa'
import UploadFileModal from '../../../dashComponents/modal/uploadFileModal'
import {  getGlobalState, setGlobalState, useGlobalState } from '../../../common/store'
import isEmpty from '../../../../utils/isEmpty'
import Variant from './Variant'
import Editor from './Editor'
import { Button, PrimaryButton } from '../../../common/Button'
import Loader from '../../../common/Loader'
import { useProduct } from '../../../../helper/api-hooks/useProduct'
import LogoutModal from '../../../common/logout-modal'
import Loading from '../../../common/Loading'

const AddProduct = () => {
   const { data , isLoading , refetch} = useCategory();
   const { fetch } = useTags();
   const [tags , setTags] = useGlobalState('tags');
   const [ brands ] = useGlobalState('brands')
   const [ categoryId ] = useGlobalState('categoryId')
   const [provider , setProvider] = useGlobalState('provider')
   const [delivery , setDelivery] = useGlobalState('delivery')
   const [isload] = useGlobalState('isload')
   useEffect(() => {
      if (!data?.category) {
        refetch(); 
      }
   })
   const [tagColor] = useState([
      "#FEF8F3",
      "#F3F3F3",
      "#F0FEF9",
      "#F0FEF2",
      "#F0FEF7"
   ])
   const [isOpenTags ,setPrevTags] = useState(true)
   const [isUploadOpen ,setUpload] = useState(false)
   const [UploadType ,setUploadType] = useState('')
   const [Gallery , setGallery] = useState([])
   const [Thumb , setThumb] = useState([])
   const [Meta , setMeta] = useState([])
   const [ stockQty , setStockQty] = useState(false)
   const [ stockQtyText , setStockQtyText] = useState(false)
   const [ stockVisible , setStockVisible] = useState(false)
   const [ cashRefund , setCashRefund] = useState(false)
   const [ cashOnDlv , setCashDlv] = useState(false)
   const [ description , setDescription] = useGlobalState('description')
   const [attributes , setAttribute] = useGlobalState('attributes')
   const [colors , setColor] = useGlobalState('colors')
   const [size , setSize] = useGlobalState('size')
   const [gender, setGender] = useGlobalState('gender')
   const [discount, setDiscount] = useGlobalState('discount')
   const Gender = [
      {name : 'Male'},
      {name : 'Female'}
   ]

   const Size = [
      {name : 43},
      {name : 42},
      {name : 'XL'},
      {name : 'XXL'},
      {name : 'M'}
   ]

   const Color = [
      {'name' : 'Red' , 'color' : 'red'},
      {'name' : 'Blue' , 'color' : 'blue'},
      {'name' : 'Green' , 'color' : 'green'},
      {'name' : 'Orange' , 'color' : 'orange'},
      {'name' : 'Pink' , 'color' : 'pink'},
      {'name' : 'Black' , 'color' : 'black'},
      {'name' : 'White' , 'color' : 'white'}
   ]
   const { formik  } = useProduct()
   const HandleUpload = () => {
      formik.setFieldValue('provider' , provider)
      formik.setFieldValue('meta_image' , Meta)
      formik.setFieldValue('gallery' , Gallery)
      formik.setFieldValue('thumb' , Thumb)
      formik.setFieldValue('brands' , brands)
      formik.setFieldValue('categoryId' , categoryId)
      formik.setFieldValue('tags' , tags)
      formik.setFieldValue('flat' , discount)
      formik.setFieldValue('stock_quantity' , stockQty)
      formik.setFieldValue('stock_with_text' , stockQtyText)
      formik.setFieldValue('stock_visible' , stockVisible)
      formik.setFieldValue('cash_refund' , cashRefund)
      formik.setFieldValue('cash_on_delivery' , cashOnDlv)
      formik.setFieldValue('shipping_days' , delivery)
      formik.setFieldValue('description' , description)
      formik.handleSubmit()
   }
   return (
      <NoSideLayout>
         {/* Hidden values */}
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="tags"
            valueText={tags}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="brand"
            valueText={brands}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="category"
            valueText={categoryId}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="gallery"
            valueText={Gallery}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="thumb"
            valueText={Thumb}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="meta_image"
            valueText={Meta}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="flat"
            valueText={discount}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="stock_quantity"
            valueText={stockQty}
            onChange={formik.handleChange}
         />

         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="stock_with_text"
            valueText={stockQtyText}
            onChange={formik.handleChange}
         />

         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="stock_visible"
            valueText={stockVisible}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="cash_on_delivery"
            valueText={cashOnDlv}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="stock_with_text"
            valueText={stockQtyText}
            onChange={formik.handleChange}
         />
         <PrimaryInput 
            placeholder={'Type and click “enter” to add a tag...'} 
            type={'hidden'}
            className={"hidden"}
            name="shipping_days"
            valueText={delivery}
            onChange={formik.handleChange}
         />

       

         <div className='md:px-32 sm:px-6 px-4 py-8 flex sm:flex-row flex-col justify-between gap-4 w-full'>
            <div className='sm:w-[70%] w-full flex flex-col gap-6'>
               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT INFORMATION</p>
                     <span className='text-[#94A3B8] font-medium'>(important)</span>
                  </div>
                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'E.g., Crunchy Chin-Chin'} 
                        label={'Product Name'} 
                        error={formik.errors.product_name}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="product_name"
                     />
                     <DropdownDefault 
                        placeholder={'Select a Category...'} 
                        label={'Category'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex = 'z-30'
                        TypeOf={'Category'}
                        options={
                           !isLoading &&  data?.category
                        }
                     />
                     <DropdownDefault 
                        placeholder={'Select a Brand...'} 
                        label={'Brand'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        Multiple={false}
                        TypeOf={'Brand'}
                        zIndex = 'z-20'
                        options={
                           !isLoading &&  data?.brand
                        }
                     />
                     <PrimaryInput 
                        placeholder={'E.g., Kg, Pc, e.t.c'} 
                        label={'Unit'} 
                        error={formik.errors.unit}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="unit"
                     />
                     

                     <PrimaryInput 
                        placeholder={'E.g., 1'} 
                        type={'number'}
                        label={'Minimum Purchase Qty'}
                        error={formik.errors.quantity}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="quantity"
                     />

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
                     <div className='flex gap-2 pp-4 flex-wrap'>
                        {tags.map((item , index) => {
                           return <Tags setTags={setTags} Tags={tags} index={index} color={tagColor[Math.floor(Math.random() * 4)]} name={item}/>
                        })}
                        {/* <Tags color={'#FEF8F0'} name="Food"/>
                        <Tags color={'#F3F3F3'} name="Small chops"/>
                        <Tags color={'#F0FEF9'} name="Bags"/> */}
                     </div>
                    
                     <div className='flex justify-between items-center'>
                        <h3 className='text-[#94A3B8] text-sm p-4'>Previously used tags</h3>
                        {isOpenTags ?
                        <span className='cursor-pointer' onClick={() => setPrevTags(false)}>
                           <RxCross2 size={13} />
                        </span>
                        :
                        <span className='cursor-pointer' onClick={() => setPrevTags(true)}>
                           <FaAngleRight size={13} />
                        </span>
                        } 
                     </div>
                    
                     {isOpenTags &&
                     <div className='flex gap-2 p-2 flex-wrap'>
                        {fetch && fetch.map((items) => {
                           return (
                              items.tags.map((item , index) => {
                                 return <Tags setTags={setTags} prevTags={true} Tags={tags} index={index} color={tagColor[Math.floor(Math.random() * 4)]} name={item}/>
                              })
                           )
                        })}
                     </div>
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT IMAGES</p>
                     <span className='text-[#94A3B8] font-medium'>(important)</span>
                  </div>

                  <div className='flex flex-col gap-3 w-full'>
                     <ActionInput
                        label={'Gallary Images'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Gallery')}
                     />
                     {Gallery &&
                     <div className='flex gap-4 flex-wrap'>
                        {
                           Gallery.map((item, index) => {
                              return <ThumbNail item={item} index={index} setGallery={setGallery} Gallery={Gallery} />
                           })
                        }
                     </div>
                     }
                  </div>

                  <div className='flex flex-col gap-3 w-full'>
                     <ActionInput
                        label={'Thumbnail Image'}
                        option={'Recommended (1:1 aspect ratio)'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Thumb')}
                     />
                     {Thumb &&
                     <div className='flex gap-4 flex-wrap'>
                        {
                           Thumb.map((item, index) => {
                              return <ThumbNail item={item} index={index} setThumb={setThumb} Thumb={Thumb}/>
                           })
                        }
                     </div>
                     }
                  </div>

                  
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT VIDEOS</p>
                  </div>

                  <div className='flex flex-col'>
                     <DropdownDefault 
                        placeholder={'Youtube'} 
                        label={'Video Provider'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex={'z-30'}
                        name={'provider'}
                        error={formik.errors.provider}
                        setProvider={setProvider}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        TypeOf={"Provider"}
                        options={[
                           {'name' : 'Dailymotion'},
                           {'name' : 'Vimeo'},
                           {'name' : 'Youtube'},
                        ]}
                     />
                     <PrimaryInput 
                        placeholder={'https://'} 
                        label={'Video Link'} 
                        error={formik.errors.video_link}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="video_link"
                     />
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT VARIATION</p>
                  </div>

                  <div className='flex flex-col'>
                     <DropdownDefault 
                        placeholder={'Select Color'} 
                        label={'Colors'} 
                        className={'w-full flex flex-col gap-1 py-2'} 
                        disabled='true'
                        activator={true}
                        Multiple={true}
                        zIndex={'z-40'}
                        TypeOf={'Colors'}
                        setColor ={setColor}
                        colors = {colors}
                        options={Color}
                        info={true}
                        infoText={"Activate/deactivate with the toggle button above the input field"}
                     />
                     <DropdownDefault 
                        placeholder={'Select Attributes'} 
                        label={'Attributes'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                        disabled='true'
                        zIndex={'z-30'}
                        Multiple={true}
                        TypeOf={'Attributes'}
                        setAttribute={setAttribute}
                        attributes={attributes}
                        options={[
                           {'name' : 'Gender' , 'id' : '41'},
                           {'name' : 'Size' , 'id' : '42'},
                        ]}
                        info={true}
                        infoText={"Choose the attributes of the product and then input their respective values"}
                     />
                     {!isEmpty(attributes) &&
                        attributes.map((item) => {
                           switch(item) {
                              case 'Gender':
                                 var Opt = Gender
                              break;
                              case 'Size':
                                 var Opt = Size
                           }
                           return (
                              
                              <DropdownDefault 
                                 placeholder={`Select ${item}`} 
                                 label={item} 
                                 className={'w-full flex flex-col gap-1 py-4'} 
                                 disabled='true'
                                 Multiple={true}
                                 gender= {gender}
                                 setGender={setGender}
                                 size={size}
                                 setSize={setSize}
                                 TypeOf={item}
                                 zIndex={'z-20'}
                                 options={
                                    Opt
                                 }
                              />
                           )
                        })
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT PRICE + STOCK</p>
                  </div>

                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'12,500'} 
                        label={'Unit Price'} 
                        error={formik.errors.unit_price}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="unit_price"
                        
                     />
                     <DatePickerCustom 
                        placeholder={'Click to select date range'} 
                        label={'Discount Date Range'} 
                        className={'w-full flex flex-col gap-1 py-4'} 
                     />
                     <div className='flex gap-3 w-full flex-wrap md:flex-nowrap'>
                        <PrimaryInput 
                           placeholder={'0'} 
                           type={'number'}
                           label={'Discount'} 
                           name={`discount_${discount}`}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           error={discount === 'Flat' ? formik.errors.discount_Flat : formik.errors.discount_Percentage}
                           className={'w-[200%]  flex flex-col gap-1 py-4'} 
                        />
                        <DropdownDefault 
                           placeholder={'Flat'} 
                           label={'Flat'} 
                           zIndex={'z-30'}
                           className={'w-[full] flex flex-col gap-1 py-4'} 
                           disabled='true'
                           TypeOf={'Discount'}
                           setDiscount={setDiscount}
                           discount={discount}
                           options={[
                              {'name' : 'Flat'},
                              {'name' : 'Percentage'},
                           ]}
                        />

                     </div>
                     {!isEmpty(colors) &&
                        <div className='border border-[#94A3B8] rounded-[8px]'>
                           <div className='flex'>
                              <div className='w-[30%] border-r border-[#94A3B8] p-4'>
                                 <h2 className='font-bold text-[#1F3047]'>Variant</h2>
                              </div>
                              <div className='w-[60%] border-r border-[#94A3B8] p-4'>
                                 <h2 className='font-bold text-[#1F3047]'>Variant Price</h2>
                              </div>
                              <div className='w-[10%] p-3'>
                                 <h2 className='font-bold text-[#1F3047]'></h2>
                              </div>
                           </div>
                           

                           {!isEmpty(colors) && isEmpty(size) && isEmpty(gender) &&

                                 colors.map((color , index) => (
                                    <Variant data={color} index={index} colors={colors} gender={gender} />  
                                 ))        
                           }
                           {!isEmpty(colors) && isEmpty(gender) && !isEmpty(size) &&
                              colors.map((color , index) => (
                                 size.map((item) => (
                                    <Variant data={color+"-"+item} index={index} colors={colors} gender={gender} />  
                                 ))
                              )) 
                           } 
                           {!isEmpty(colors) && !isEmpty(gender) && isEmpty(size) &&
                              colors.map((color , index) => (
                                 gender.map((gender) => (
                                    <Variant data={color+"-"+gender} index={index} colors={colors} gender={gender} />  
                                 ))
                              )) 
                           } 
                           {!isEmpty(colors) && !isEmpty(size) && !isEmpty(gender) &&
                              colors.map((color , index) => {
                                 return (
                                 size.map((item) => {
                                    return (
                                    gender.map((gender) => {
                                       return <Variant data={color +"-"+gender+"-"+item} index={index} colors={colors} gender={gender} />
                                    }
                                 ))})
                              )})
                           }
                           
                        </div>
                     }
                  </div>
               </div>

               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PRODUCT DESCRIPTION</p>
                  </div>

                  <div className='flex flex-col md:h-[456px] min:h-[300px]'>
                     <Editor setDescription={setDescription} description={description} />
                  </div>
               </div>
               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>PDF SPECIFICATION</p>
                  </div>

                  <div className='flex flex-col'>
                     <ActionInput
                        label={'Pdf Specification'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                     />
                  </div>
               </div>


               <div className='shadow-md bg-white rounded-md p-2 px-4'>
                  <div className='flex gap-1'>
                     <p className='font-bold text-[16px]'>SE0 META TAGS</p>
                  </div>

                  <div className='flex flex-col'>
                     <PrimaryInput 
                        placeholder={'Meta Title'} 
                        type={'text'}
                        label={'Meta Title'} 
                        error={formik.errors.meta_title}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="meta_title"
                        
                     />

                     <TextAreaInput 
                        placeholder={'Meta Description'} 
                        type={'text'}
                        label={'Description'} 
                        error={formik.errors.meta_description}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="meta_description"
                     />

                     <ActionInput
                        label={'Meta Image'}
                        placeholder={'Click to add File'}
                        className={'w-[100%] flex flex-col gap-1 py-4'} 
                        actionLeft={'true'}
                        actionText={'Browse'}
                        onClick={() => setUpload(true) || setUploadType('Meta')}
                     />
                     <div className='flex gap-4 flex-wrap'>
                        {Meta &&
                           Meta.map((item, index) => {
                              return <ThumbNail item={item} index={index} setMeta={setMeta} Meta={Meta}/>
                           })
                        }
                     </div>
                     <PrimaryInput 
                        placeholder={'Set Slug...'} 
                        type={'text'}
                        label={'Slug'} 
                        error={formik.errors.meta_slug}
                        className={'w-full flex flex-col gap-1 py-4'} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="meta_slug"
                        disabled={true}
                     />

                  </div>
               </div>
               <div className='hidden sm:block h-[48px] w-[40%]'>
                  <Button 
                     className="um-btn um-btn-filled cursor-pointer" 
                     name="Upload" 
                     auth="button"
                     type="submit"
                     onClick={HandleUpload}
                  />

               </div>
            </div>
            <div className='sm:w-[30%] w-full gap-6 flex flex-col'>
               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>LOW STOCK QUANTITY WARNING</p>
                  <PrimaryInput
                     label={'Quantity'}
                     placeholder={'E.g., 1'}
                     type={"number"}
                     className={'w-full  flex flex-col gap-1 py-4'} 
                     name="low_quantity"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                  />
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>STOCK VISIBILITY STATE</p>
                  <div className='flex flex-col gap-2'>
                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Show Stock Quantity</div>
                        <ToggleSwitch isToggled={stockQty} setIsToggled={() => setStockQty(!stockQty)} />
                     </div>

                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Show Stock with text only</div>
                        <ToggleSwitch isToggled={stockQtyText} setIsToggled={() => setStockQtyText(!stockQtyText)} />
                     </div>


                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Hide Stock</div>
                        <ToggleSwitch isToggled={stockVisible} setIsToggled={() => setStockVisible(!stockVisible)} />
                     </div>
                  </div>
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>REFUND & CASH ON DELIVERY</p>
                  <div className='flex flex-col gap-2'>
                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Accept Refund</div>
                        <ToggleSwitch isToggled={cashRefund} setIsToggled={() => setCashRefund(!cashRefund)} />
                     </div>

                     <div className="pub-fea-con">
                        <div className="pub-fea-txt text-[20px]">Accept Cash on Delivery</div>
                        <ToggleSwitch isToggled={cashOnDlv} setIsToggled={() => setCashDlv(!cashOnDlv)} />
                     </div>
                  </div>
               </div>

               <div className='shadow-lg rounded-md p-4 bg-white'>
                  <p className='font-bold text-[16px] py-4'>ESTIMATED PERIOD OF SHIPPING</p>
                  <ActionInput
                     label={'Shipping Days'}
                     placeholder={'E.g., 1'}
                     type={'number'}
                     className={'w-[100%]  flex flex-col gap-1 py-4'} 
                     actionRight={'true'}
                     actionText={'Days'}
                     disabled={true}
                     setDelivery={setDelivery}
                     delivery={delivery}
                  />
               </div>
               <div className='sm:hidden block h-[48px] w-[40%] mb-[70px]'>
                  <Button 
                     className="um-btn um-btn-filled cursor-pointer" 
                     name="Upload" 
                     auth="button"
                     type="submit"
                     onClick={HandleUpload}
                  />

               </div>
            </div>
         </div>
         {isload &&
            <Loading action={false} title={"Uploading..."}/>
         }
         {isUploadOpen &&
            <UploadFileModal onChange={UploadType} onClick={() => setUpload(false)} setMeta={setMeta} Meta={Meta} setGallery={setGallery} Gallery={Gallery} setThumb={setThumb} Thumb={Thumb}/>
         }
      </NoSideLayout>
   )
}

export default AddProduct