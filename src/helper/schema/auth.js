import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").trim()
  .email('Enter Valid Email'),
  password: Yup.string().required("Password is required").trim()
  .min(6 , "Password must be at least 6 characters"),
});


export const RegisterShopSchema = Yup.object().shape({
   email: Yup.string().required("Email is required").trim()
   .email('Enter Valid Email'),
   password: Yup.string().required("Password is required").trim(),
   confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .trim(),
   firstname: Yup.string().required("Firstname is required").trim(),
   lastname: Yup.string().required("Lastname is required").trim(),
   shopName: Yup.string().required("Shop Name is required").trim()
   .min(3 , "Shop Name Must be at least more than 3 characters"),
 });

 export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").trim()
  .email('Enter Valid Email'),
  password: Yup.string().required("Password is required").trim(),
  confirmPassword: Yup.string()
   .required("Confirm Password is required")
   .oneOf([Yup.ref("password")], "Passwords do not match")
   .trim(),
  firstname: Yup.string().required("Firstname is required").trim(),
  lastname: Yup.string().required("Lastname is required").trim(),
});
