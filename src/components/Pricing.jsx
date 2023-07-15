import React from 'react'
import { Button } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Pricing() {
  var settings = {
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
  };
  return (
    <div style={{overflowX:'hidden' }} >
    <div className='my-4'  >
        <div className='row container-fluid ' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='col-xl-5 col-sm-5 col-md-12 ps-sm-5 mt-5 mb-5 col-lg-5  '>
        <p style={{fontFamily:'Alfa Slab One',fontSize:'84px',lineHeight:'93.545px' }} className='mt-5 mb-5'>Pricing</p>
        <p style={{fontFamily:'Poppins',fontSize:'24px',lineHeight:'42.4px'}} className='my-4 text6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit,  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br></br> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
        <Button style={{backgroundColor:'#10AB61',width:'45%',padding:'20px',border:'none',fontSize:'28.16px'}} id='btn2' className='btn6'>Take a Free Demo</Button>  
            </div>
        <div className='col-xl-5 col-sm-5 col-md-12 mt-5 mb-5 col-lg-5 ' style={{display:'fllex',justifyContent:'end'}}>
        <Slider {...settings}>
        <div><img src={"./images/pricing1 (1).png"} style={{ width: '100%',height:'650px' }}  alt='' /></div>
      
    <div> <img src={"./images/pricing1 (2).png"} style={{ width: '100%',height:'650px' }}  alt='' /></div>

    <div><img src={"./images/pricing1 (1).png"} style={{ width: '100%',height:'650px' }}  alt='' /></div>
      
      <div> <img src={"./images/pricing1 (2).png"} style={{ width: '100%',height:'650px' }}  alt='' /></div>
     
    </Slider>
        </div> 
          
        </div>
    </div>
</div>
  )
}
