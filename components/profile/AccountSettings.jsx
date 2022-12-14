import React from 'react'
import Title from "../../components/ui/Title"
import Input from "../../components/form/Input"
import { useFormik } from 'formik';
import { profileSchema } from '../../validationSchema/profile'
const AccountSettings = ({user}) => {
    const onSubmit = async (values,actions)=>{
        await new Promise((resolve)=>setTimeout(resolve,3000));
        actions.resetForm();
        alert(JSON.stringify(values, null, 2));
    }
    const formik = useFormik({
        initialValues:{
            fullName:user?.fullName,
            phoneNumber:"",
            email:user?.email,
            adress:"",
            job:"",
            bio:""
        },
        onSubmit,
        validationSchema:profileSchema,
     
   });
    const inputs = [
        {
            id:1,
            name:"fullName",
            type:"text",
            placeholder:"Your full name",
            value: formik.values.fullName,
            errorMessage:formik.errors.fullName,
            touched:formik.touched.fullName,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Your email address",
            value: formik.values.email,
            errorMessage:formik.errors.email,
            touched:formik.touched.email,
        },
        {
            id:3,
            
            name:"phoneNumber",
            type:"number",
            placeholder:"Your phone number",
            value: formik.values.phoneNumber,
            errorMessage:formik.errors.phoneNumber,
            touched:formik.touched.phoneNumber,
            
        },
        {
            id:4,
            
            name:"adress",
            type:"text",
            placeholder:"Your adress",
            value: formik.values.adress,
            errorMessage:formik.errors.adress,
            touched:formik.touched.adress,
        },
        {
            id:5,
            
            name:"job",
            type:"text",
            placeholder:"Your job",
            value: formik.values.job,
            errorMessage:formik.errors.job,
        },
        {
            id:6,
            name:"bio",
            type:"text",
            placeholder:"Your bio",
            value: formik.values.bio,
            errorMessage:formik.errors.bio,
        }
    ]
  return (
    <>
        <Title addClass="text-[40px]">Account Settings</Title>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4 '>
                {inputs.map((input)=>(
                    
                    <Input key={input.id} {...input} onBlur={formik.handleBlur} onChange={formik.handleChange}/>
                ))}
                
            </div>
            <div className='mt-4 flex sm:justify-start justify-center'>
            <button className='btn-primary '>Update</button>
            </div>
    </>
  )
}

export default AccountSettings