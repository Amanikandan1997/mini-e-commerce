import React from 'react'

function ProductDetail({product}) {
  return (
    <> <div class="container container-fluid">
    <div class="row f-flex justify-content-around">
        <div class="col-12 col-lg-5 img-fluid" id="product_image">
            <img src="/images/products/3.jpg" alt="sdf" height="500" width="500"/>
        </div>

        <div class="col-12 col-lg-5 mt-5">
            <h3>Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB</h3>
            <p id="product_id">Product # 387874kkfjkf</p>

            <hr/>

            <div class="rating-outer">
                <div class="rating-inner"></div>
            </div>
       

            <hr/>

            <p id="product_price">$456.00</p>
            <div class="stockCounter d-inline">
                <span class="btn btn-danger minus">-</span>

                <input type="number" class="form-control count d-inline" value="1" readOnly />

                <span class="btn btn-primary plus">+</span>
            </div>
             <button type="button" id="cart_btn" class="btn btn-primary d-inline ml-4">Add to Cart</button>

            <hr/>

            <p>Status: <span id="stock_status">In Stock</span></p>

            <hr/>

            <h4 class="mt-2">Description:</h4>
            <p>Processor: Intel i5-1235U (3.30 GHz up to 4.40 GHz), 10 Cores & 12MB Cache
                RAM & Storage: 8GB, 8Gx1, DDR4, 2666MHz Ach & 512GB SSD
                Display & Graphics: 15.6" FHD WVA AG 120Hz 250 nits Narrow Border & Integrated Graphics</p>
            <hr/>
            <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>
            
            <div class="rating w-50"></div>
                    
        </div>

    </div>

</div></>
  )
}

export default ProductDetail