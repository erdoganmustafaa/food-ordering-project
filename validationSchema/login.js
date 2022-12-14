import * as Yup from "yup"
export const loginSchema = Yup.object({
   
    email:Yup.string().required("E mail is required")
    .min(10,"E mail must be at least 10 characters").max(25,"E mail must be max 25 characters.").email("E mail is invalid"),
    password:Yup.string().required("Password  is required")
    .min(7,"Password must be minimum 7 character")
  })