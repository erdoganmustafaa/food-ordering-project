import React from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik';
import axios from 'axios';

const PasswordSettings = ({user}) => {const onSubmit = async (values,actions)=>{
    try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,values)
        if(res.status===200){
            alert("basarili")
        }
        else{
            alert("basarisiz");
        }
    } catch (error) {
        console.log(error);
    }
    actions.resetForm();
   
}
const formik = useFormik({
    initialValues:{
        password:"",
        confirmPassword:"",
        
    },
    onSubmit,
    
 
});
const inputs = [
    {
        id:1,
        name:"password",
        type:"password",
        placeholder:"Your password",
        value: formik.values.password,
        errorMessage:formik.errors.password,
        touched:formik.touched.password,
    },
    {
        id:2,
        name:"confirmPassword",
        type:"password",
        placeholder:"Your confirm password",
        value: formik.values.confirmPassword,
        errorMessage:formik.errors.confirmPassword,
        touched:formik.touched.confirmPassword,
    }, 
    
]
  return (
    <>
    <form onSubmit={formik.handleSubmit}>
        <Title addClass="text-[40px]">Password Settings</Title>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4  '>
            {inputs.map((input)=>(
                <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            ))}
        </div>
        <div className='mt-4 flex sm:justify-start justify-center'>
            <button className='btn-primary '>Update</button>
        </div>
        </form>
    </>
   
  )
}

export default PasswordSettings