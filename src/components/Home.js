import React, { Fragment, useEffect, useState } from 'react'
import Product from './Product'
import Slider from './Slider'
import { useSearchParams } from 'react-router-dom';

function Home() {
    const [products,setProducts] =useState([]);
    const[searchParams,setSearchparams] =  useSearchParams()

    useEffect(()=>{
        fetch('https://dummyjson.com/products?'+searchParams)
        .then(res => res.json())
        .then (res => setProducts(res.products) )
    },[searchParams]
    )
  return (
   <Fragment>
     <Slider/>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product =>  <Product products={product}/> )}
       
       

       
      </div>
    </section>

    </Fragment>
  )
}

export default Home