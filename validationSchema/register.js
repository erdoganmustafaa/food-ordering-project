import * as Yup from "yup"
export const registerSchema = Yup.object({
   
    fullName:Yup.string().required("Full name is required")
    .min(3,"Full name must be at least 3 characters").max(25,"Full name must be max 25 characters."),
    email:Yup.string().required("Full name is required")
    .min(10,"E mail must be at least 10 characters").max(45,"E mail must be max 45 characters.").email("E mail is invalid"),
    password:Yup.string().required("Password  is required")
    .min(7,"Password must be minimum 7 character"),
    confirmPassword:Yup.string().required("Password  is required")
    .min(7,"Password must be minimum 7 character")
  })