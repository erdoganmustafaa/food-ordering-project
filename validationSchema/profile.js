import * as Yup from "yup"
export const profileSchema = Yup.object({
   
    fullName:Yup.string().required("Full name is required")
    .min(3,"Full name must be at least 3 characters").max(25,"Full name must be max 25 characters."),
    email:Yup.string().required("Full name is required")
    .min(10,"E mail must be at least 10 characters").max(25,"E mail must be max 25 characters.").email("E mail is invalid"),
    phoneNumber:Yup.string().required("Phone number  is required")
    .min(7,"Password must be minimum 7 character"),
    adress:Yup.string().required("Adress is required"),

  })