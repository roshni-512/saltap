import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Gallerycomponent() {
    var settings = {
        autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2.5,
            },
          },
        ],
       
      };
  return (
    <div>
    <div className="" style={{overflowX:'hidden'}}>
      <div className="col-xl-12  col-md-12 col-sm-5 mb-5 mt-5 spacing"style={{marginLeft:'90px'}}>
      <p style={{fontFamily:'Alfa Slab One',fontSize:'84px',lineHeight:'93.4px'}}className='text7' >Customize your content</p>
      <p style={{fontFamily:'Poppins',fontSize:'16px', lineHeight:'42.6px'}}className='text8'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br/>Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
     
      <div className='col-12 pt-5  mt-5 mb-5' style={{overflow:'hidden'}}>
      <Slider {...settings}>
        <div><img src={"./images/rectangle1.png"} style={{ width: '90%' }}  alt='' /></div>
      
    <div> <img src={"./images/rectangle2.png"} style={{ width: '90%' }}  alt='' /></div>
   
      <div>
        <img src={"./images/rectangle3.png"} style={{ width: '90%' }} alt='' />
      </div>
      <div>
      <img src={"./images/rectangle4.png"} style={{ width: '90%' }}  alt='' /> 
      </div>
      <div>
        <img src={"./images/rectangle1.png"} style={{ width: '90%' }}  alt='' />
      </div>
      <div>
        <img src={"./images/rectangle2.png"} style={{ width: '90%' }}  alt='' />
      </div>
    </Slider>
      
     
      
      </div>
      </div>
  </div>
  )
}
