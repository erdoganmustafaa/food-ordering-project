
import { useFormik } from 'formik'
import Title from '../../components/ui/Title'
import Input from '../../components/form/Input'
import axios from 'axios'
import {toast} from "react-toastify";
import {useRouter} from "next/router";

const AdminLogin = () => {
    const {push} = useRouter();
    const onSubmit = async (values,actions)=>{
       try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`,values);
            if(res.status===200){
                
                actions.resetForm();
                toast.success("Admin Login success");
                const pushToAdminPage = ()=>{
                    push("/admin/adminprofile")
                }
                setTimeout(pushToAdminPage,2000)
            }  
       } catch (error) {    
        toast.error("Username or password is incorrect!")
       }
    }

    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        onSubmit,
       
     
   });
       
    const inputs = [    
        {
            id:1,
            name:"username",
            type:"text",
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
        <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={formik.handleSubmit}>
            <Title addClass="text-[40px] ">Admin Login Page</Title>
            <div className='flex flex-col gap-3  w-full mt-6'>
                {inputs.map((input)=>(
                    <Input key={input.id} {...input} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                ))}
               
            </div>
            <div className='flex flex-col w-full gap-y-4 mt-6'>
            <button className='btn-primary' >Login</button>
            
            </div>
            
        </form>
    </div>
  )
}
export const getServerSideProps=(ctx)=>{
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token === process.env.ADMIN_TOKEN){
        return{
            redirect:{
                destination:"/admin/adminprofile",
                permanent:false,
            }
        }
    }
    return{
        props:{}
    }
}
export default AdminLogin