import * as Yup from "yup"
export const reservationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required")
    .min(3,"Full name must be at least 3 characters"),
    phoneNumber:Yup.string().required("Phone number is required")
    .min(10,"Phone number must be at least 10 characters"),
    email:Yup.string().required("E mail is required")
    .min(10,"E mail must be at least 10 characters").max(25,"E mail must be max 25 characters.").email("E mail is invalid"),
    persons:Yup.string().required("Persons  is required")
    .min(1,"Persons must be at least 1 person").max(99,"Persons could be max 99 person."),
    date:Yup.string().required("Date is required"),
  })