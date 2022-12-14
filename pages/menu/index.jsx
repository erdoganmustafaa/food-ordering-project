import React from 'react'
import MenuWrapper from '../../components/products/MenuWrapper'
import axios from 'axios'
function Index({productList,categoryList}) {
  console.log(productList);
  return (
    <div>
        <MenuWrapper categoryList={categoryList} productList={productList}/>
    </div>
  )
}
export const getServerSideProps = async ()=>{
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return{
    props:{
      categoryList: category.data? category.data : [],
      productList : product.data? product.data : [],
    },
  }
}
export default Index