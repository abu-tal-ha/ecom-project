import * as Yup from "yup";

export const categoryFormSchema = Yup
.object({
  categoryName: Yup.string().required(),
  categoryImageUrl: Yup.string().required().url(),
})
.required();

export const productFormSchema = Yup
.object({
  productName: Yup.string().required(),
  productPrice: Yup.number().required(),
  ProductImageUrl: Yup.string().required().url(),
  productCategory: Yup.string().required(),
})
.required();


export const registerValidation = Yup.object({
  name: Yup.string()
    .required("Name is required!")
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name must not exceed 50 characters."),
  
  email: Yup.string()
    .required("Email is required!")
    .email("Please enter a valid email address!"),
  
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character (e.g., @$!%*?&#)."),
  
  confirmPassword: Yup.string()
    .required("Please confirm your password!")
    .oneOf([Yup.ref("password")], "Passwords must match!"),
}).required();

export const loginValidation = Yup.object({
 
  email: Yup.string()
    .required("Email is required!")
    .email("Please enter a valid email address!"),
  
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(/[@$!%*?&#]/, "Password must contain at least one special character (e.g., @$!%*?&#)."),
  
}).required();


