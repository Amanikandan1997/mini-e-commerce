import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import slider1 from "../slideimage/slide2.jpg"
import slider2 from "../slideimage/side1.jpg"
import slider3 from "../slideimage/slide3.jpg"

export default function Slider() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem itemId={1}>
        <img  src={slider1} className='d-block w-100 '  style={{ height: '320px' }}alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={slider2}className='d-block w-100' style={{ height: '320px' }} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={slider3} className='d-block w-100' style={{ height: '320px' }} alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}