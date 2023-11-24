import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../axiosConfig";
import { useFormik } from "formik";
import { TOKEN_VALUE, useUrls } from "../useUrls";
import { errorToast, successToast } from "../../components/common/CustomToast";
import { useNavigate } from "react-router";
import { UploadProductSchema } from "../schema/product";
import { getGlobalState, setGlobalState, useGlobalState } from "../../components/common/store";
import LogoutModal from "../../components/common/logout-modal";
import Loading from "../../components/common/Loading";


export const useProduct = () => {
   const navigate = useNavigate();
   const { UploadProductUrl } = useUrls();
   const queryClient = useQueryClient();
   const { mutate, isLoading } = useMutation((payload) => {
     return axiosInstance.post(UploadProductUrl, payload);
   });
 
   const formik = useFormik({
      initialValues: {
         product_name: "",
         brands : "",
         unit : "",
         quantity : "",
         tags : [],
         thumb : "",
         gallery : [],
         provider : "",
         video_link : "",
         unit_price : "",
         description : "",
         discount_date_range : "",
         discount_Percentage: 100,
         discount_Flat : 0,
         flat : "",
         meta_title : "",
         meta_image : "",
         meta_description : "",
         meta_slug : "",
         low_quantity : 0,
         stock_quantity : false,
         stock_with_text : false,
         stock_visible : false,
         cash_refund : false,
         cash_on_delivery : false,
         shipping_days : 1,
      },
      validateOnBlur: false,
      validateOnChange: true,
      validationSchema: UploadProductSchema,
      onSubmit: async (values) => {
         setGlobalState('isload' , true)
         try {
            const castedValues = UploadProductSchema.cast(values);
            mutate(castedValues, {
               onSuccess: async (res) => {
                  setGlobalState('isload' , false)
                  setGlobalState('slug' , res.data.meta.slug)
                  navigate('/seller/preview/'+res.data.meta.slug)
                  successToast({
                     message: "Product Upload Successfully.",
                     position: "top-left",
                  });
               },
               onError:  async (res) => {
                  setGlobalState('isload' , false)
                  errorToast({
                     message: `${
                        res?.response?.data?.message ??
                       "Something went wrong, please try again later"
                     }`,
                     position: "top-left",
                  });
               },
             });     
         } catch (error) {
            throw new Error(error);
         }
      },
   });
 
   return { formik, isLoading };
};

export const useGetProductBySlug = () => {
   const { GetProductBySlug } = useUrls();
   const { data, isLoading ,refetch} = useQuery(["product"], ({ signal }) =>
      axiosInstance
      .get(GetProductBySlug, { signal })
      .then((res) => res.data.data)
   );
   
   return { data, isLoading, refetch };
};