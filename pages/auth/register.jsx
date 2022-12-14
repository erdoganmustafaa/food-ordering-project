
import { useFormik } from 'formik'
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import { registerSchema } from '../../validationSchema/register'
import Link from 'next/link'
import axios from 'axios'
import {toast} from "react-toastify"
import {useRouter} from "next/router"
const Register = () => {
    const {push} = useRouter();
    const onSubmit = async (values, actions) => {
        
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
            values
          );
          if(res.status===200){
            toast.success("User created succesfully");
            const pushToLoginPage = ()=>{
              push("/auth/login")
          }
          setTimeout(pushToLoginPage,2000)
          }
          
        } catch (err) {
          console.log(err);
          toast.error(err.response.data.message);
        }
         actions.resetForm();
      };

    const formik = useFormik({
        initialValues:{
            fullName:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        onSubmit,
        validationSchema:registerSchema,
     
   });
       
    const inputs = [    
        {
            id:1,
            name:"fullName",
            type:"text",
            placeholder:"Full name..",
            value: formik.values.fullName,
            errorMessage:formik.errors.fullName,
            touched:formik.touched.fullName,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"E mail adress..",
            value: formik.values.email,
            errorMessage:formik.errors.email,
            touched:formik.touched.email,
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"Your password",
            value: formik.values.password,
            errorMessage:formik.errors.password,
            touched:formik.touched.password,
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Your re-password",
            value: formik.values.confirmPassword,
            errorMessage:formik.errors.confirmPassword,
            touched:formik.touched.confirmPassword,
        }
    ]
  return (
    <div className='container mx-auto'>
        <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={formik.handleSubmit}>
            <Title addClass="text-[40px] ">Register</Title>
            <div className='flex flex-col gap-3  w-full mt-6'>
                {inputs.map((input)=>(
                    <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                ))}
               
            </div>
            <div className='flex flex-col w-full gap-y-4 mt-6'>
            <button className='btn-primary' >Register</button>
           
            <Link href="/auth/login">
                <span className='text-sm underline cursor-pointer text-secondary'>Do you have already a account?</span>
            </Link>
            </div>
            
        </form>
    </div>
  )
}

export default Register