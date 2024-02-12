import React, { Fragment } from 'react'
import {Link} from "react-router-dom"
import Product1 from './Product1'

function Product({products}) {
  return (
    <Fragment>
   
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
          <Link to={"/product/"+products.id}>  <img
              className="card-img-top mx-auto"
              src={products.thumbnail} alt='image'
            /></Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
              <Link to={"/product/"+products.id}>{products.title}</Link>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">  
                  <div className="rating-inner" style={{width : `${products.rating/5 *100}%`}}></div>
                
                </div>
              </div>
              <p className="card-text">${products.price}</p>
              <Link to={"/product/"+products.id} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
          </div>
        </div>
   
   

    </Fragment>
  )
}

export default Product