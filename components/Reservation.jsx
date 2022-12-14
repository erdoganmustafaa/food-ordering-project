import React from 'react'
import Input from './form/Input';
import Title from './ui/Title'
import { useFormik } from 'formik';
import { reservationSchema } from '../validationSchema/reservation';
const Reservation = () => {
    const onSubmit = async (values,actions)=>{
        await new Promise((resolve)=>setTimeout(resolve,3000));
        actions.resetForm();
        alert(JSON.stringify(values, null, 2));
    }
    const formik = useFormik({
        initialValues:{
            fullName:"",
            phoneNumber:"",
            email:"",
            persons:"",
            date:"",
        },
        onSubmit,
        validationSchema:reservationSchema,
     
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
            name:"phoneNumber",
            type:"number",
            placeholder:"Your phone number",
            value: formik.values.phoneNumber,
            errorMessage:formik.errors.phoneNumber,
            touched:formik.touched.phoneNumber,
            
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"Your email address",
            value: formik.values.email,
            errorMessage:formik.errors.email,
            touched:formik.touched.email,
        },
        {
            id:4,
            name:"persons",
            type:"number",
            placeholder:"How many persons?",
            value: formik.values.persons,
            errorMessage:formik.errors.persons,
            touched:formik.touched.persons,
        },
        {
            id:5,
            name:"date",
            type:"datetime-local",
            placeholder:"",
            value: formik.values.date,
            errorMessage:formik.errors.date,
        },
    ]
  return (
    <div className='container mx-auto py-12'>
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
       <div className='sm:flex  justify-between items-center gap-x-10 flex-wrap'>
       <form className='lg:flex-1 w-full' onSubmit={formik.handleSubmit}>
        <div className='flex flex-col gap-y-4'>
            {inputs.map((input)=>(
                <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            ))}
           
        </div>
        <button className="btn-primary mt-4" >BOOK NOW</button>
       </form>
       <div className='lg:flex-1 !w-1/2'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.043831275276!2d-74.14014147210692!3d40.778276783427465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2557b0e35d7d3%3A0xdee944a1fac0ab1b!2sShawn&#39;s%20Crazy%20Saloon!5e0!3m2!1str!2str!4v1668522485778!5m2!1str!2str" 
        height="400" allowFullScreen="" loading="lazy" className='lg:w-[600px] lg:mt-0 mt-10 mx-auto w-[350px]'></iframe>
       </div>
       </div>
    </div>
  )
}

export default Reservation