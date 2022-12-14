import React from 'react'
import MenuWrapper from '../../components/products/MenuWrapper';
import About from '../../components/About';

import Carousel from '../../components/Carousel';
import Reservation from '../../components/Reservation';
import Customers from "../../components/customers/Customers"
const Home = ({productList,categoryList})=> {
  return (
    <div>
      <>
      <Carousel/>
      <MenuWrapper productList={productList} categoryList={categoryList} />
      <About/>
      <Reservation/>
      <Customers/>
      
      </>
     
    </div>
  )
}

export default Home;