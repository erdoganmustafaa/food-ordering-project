import React from 'react'
import Title from "../../components/ui/Title"
import Input from "../../components/form/Input"
import { useFormik } from 'formik';
import { footerSchema } from '../../validationSchema/adminFooter'
const Adminfooter = () => {
    const onSubmit = async (values,actions)=>{
        await new Promise((resolve)=>setTimeout(resolve,3000));
        actions.resetForm();
        alert(JSON.stringify(values, null, 2));
    }
    const formik = useFormik({
        initialValues:{
            location:"",
            email:"",
            phoneNumber:"",
            desc:"",
            day:"",
            time:""
        },
        onSubmit,
        validationSchema:footerSchema,
     
   });
    const inputs = [
        {
            id:1,
            name:"location",
            type:"text",
            placeholder:"Your location",
            value: formik.values.location,
            errorMessage:formik.errors.location,
            touched:formik.touched.location,
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
            name:"desc",
            type:"text",
            placeholder:"Your description",
            value: formik.values.desc,
            errorMessage:formik.errors.desc,
            touched:formik.touched.desc,
        },
        {
            id:5,
            name:"day",
            type:"text",
            placeholder:"Write a day",
            value: formik.values.day,
            errorMessage:formik.errors.day,
            touched:formik.touched.day,
        },
        {
            id:6,
            name:"time",
            type:"text",
            placeholder:"Update time",
            value: formik.values.time,
            errorMessage:formik.errors.time,
            touched:formik.touched.time,
        }
    ]
  return (
    <>
        <Title addClass="text-[40px]">Location Settings</Title>
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

export default Adminfooter