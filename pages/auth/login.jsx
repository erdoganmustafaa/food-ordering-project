
import { useFormik } from 'formik'
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import { loginSchema } from '../../validationSchema/login'
import Link from 'next/link'
import { signIn,getSession } from 'next-auth/react'
import {toast} from "react-toastify"
import {useRouter} from "next/router";
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'


const Login = ({user}) => {
    const router = useRouter();  
    const {data:session} = getSession();
    const [currentUser,setCurrentUser] = useState();
   
    const onSubmit = async (values,actions)=>{
        const {email,password} = values;
        
        let options = {redirect:false,email,password};
        const res = await signIn("credentials", options);
        if(res.status===200){
            actions.resetForm();
            toast.success("Successfuly logged in")
            setTimeout(window.location.reload(),2000)
        }
        else{
            toast.error("Email or password is incorrect")
            actions.resetForm();
        }
          
    }
  
    

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit,
        validationSchema:loginSchema,
     
   });
       
    const inputs = [    
        {
            id:1,
            name:"email",
            type:"email",
            placeholder:"Your email address",
            value: formik.values.email,
            errorMessage:formik.errors.email,
            touched:formik.touched.email,
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholder:"Your password",
            value: formik.values.password,
            errorMessage:formik.errors.password,
            touched:formik.touched.password,
        }
    ]
    
    
  return (
    <div className='container mx-auto'>
        <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto ' onSubmit={formik.handleSubmit}>
            <Title addClass="text-[40px] ">Login</Title>
            <div className='flex flex-col gap-3  w-full mt-6'>
                {inputs.map((input)=>(
                    <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                ))}
               
            </div>
            <div className='flex flex-col w-full gap-y-4 mt-6'>
            <button className='btn-primary' >Login</button>
            <button className='btn-primary bg-secondary text-white'
            onClick={()=>signIn("github")}
            >Login with Github</button>
          
            <Link href="/auth/register">
                <span className='text-sm underline cursor-pointer text-secondary'>Do you no have a account?</span>
            </Link>
            </div>
            
        </form>
    </div>
  )
}
export async function getServerSideProps({req}){
    const session = await getSession({req}) 
    
    
       const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
       const user = res.data?.find((user)=>user.email===session?.user.email);
       console.log(user);
        
        // BURADA HATA VAR DÜZELTİLECEK..
        
      
        //
        
    
    
    if(session && user){
        return{
            redirect:{
                destination:"/profile/" + user._id,
                permanent:false
            }
        }
    }
    
    return{
        props:{
            user: user? user.data : "yarrak",
        }
    }
}
export default Login