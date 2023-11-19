import * as Yup from "yup";
export const UploadProductSchema = Yup.object().shape({
   product_name: Yup.string().required("Product name is required").trim(),
   video_link: Yup.string().nullable().url("Provide a valid Url"),
   unit: Yup.string().required("Unit is required").trim(),
   unit_price: Yup.number().required("Unit Price is required").positive().integer(),
   discount_Flat : Yup
   .number()
   .integer()
   .nullable()
   .lessThan(Yup.ref("unit_price") ,"Discount can not be greater than Unit price" ),
   discount_Percentage : Yup
   .number()
   .integer()
   .nullable()
   .max(100,"Discount can not be greater than 100%" ), //<-- a whole lot neater than using a when conditional...
   quantity: Yup.number().required("Quantity is required").positive().integer(),
   meta_title: Yup.string().required("Meta Title is required").trim(),
   meta_description: Yup.string().required("Meta Description is required").trim(),
});