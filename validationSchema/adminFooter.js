import * as Yup from "yup"
export const footerSchema = Yup.object({
   
    location:Yup.string().required("Location is required"),
    email:Yup.string().required("E mail is required")
    .min(10,"E mail must be at least 10 characters").max(35,"E mail must be max 35 characters.").email("E mail is invalid"),
    phoneNumber:Yup.string().required("Phone number is required")
    .min(10,"Phone number must be minimum 10 character"),
    desc:Yup.string().required("Description is required"),
    day:Yup.string().required("Day is required"),
    time:Yup.string().required("Time is required"),

  })