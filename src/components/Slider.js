import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Banner1 from "../assets/banner/bannerImgOne.jpg"
import Banner2 from "../assets/banner/bannerImgFour.jpg"
import Banner3 from "../assets/banner/bannerImgThree.jpg"
import Banner4 from "../assets/banner/bannerImgFive.jpg"

export default function Home() {
  return (
    <>

    <div className='home'>
        <div className='home-containr'>
        <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img  src={Banner1} className='w-100 d-block' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={Banner2}className='w-100 d-block'  alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={Banner3} className='w-100 d-block'  alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={Banner4} className='w-100 d-block' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
        {/* <img alt="Amazon Home Shopping Spree" src={Banner1} height="100%" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-herolowcat._CB582034221_.jpg"/> */}
        </div>
      
    </div>
    </>
  )
}
