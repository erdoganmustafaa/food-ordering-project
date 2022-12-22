import React,{useEffect,useState} from 'react'
import MenuWrapper from '../../components/products/MenuWrapper'
import axios from 'axios'

function Index({categoryList}) {

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        setProductList(res?.data)
       
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);
  return (
    <div>
        <MenuWrapper categoryList={categoryList} productList={productList}/>
    </div>
  )
}
export const getServerSideProps = async ()=>{
  const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return{
    props:{
      categoryList: category.data? category.data : [],
      
    },
  }
}
export default Index