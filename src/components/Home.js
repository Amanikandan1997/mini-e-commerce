import React, { Fragment, useEffect, useState } from 'react'
import Product from './Product'
import Slider from './Slider'
import { useSearchParams } from 'react-router-dom';
import Product1 from './Product1';
import "./Product.css"
import TodayDeal from './TodayDeal';
import Banner from "../assets/bann33.gif"

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
    
     <Product1/>
     <img src={Banner} alt="loading..." style={{ width: '80%', height: '10%' }} />
    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map(product =>  <Product products={product}/> )}
       
       

       
      </div>
     
    </section>
    <h1 id="products_heading">Mani Mart Ads Page</h1>

  <TodayDeal/>
    </Fragment>
  )
}

export default Home