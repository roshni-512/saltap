import React from "react";
import "./fonts.css";
import './landing.css'

import { Button } from 'react-bootstrap'
export default function Landing() {
  return (
    <div style={{overflowX:'hidden'}}>
    <div className="">
       <div className="row d-flex justify-content-around">
          <div className='col-xl-5 col-sm-5 col-md-12 mt-5 mb-5 col-lg-5 ' >
             <p className='mobview  'style={{fontFamily:'Alfa Slab One',fontSize:'130px',lineHeight:'130px' }}>Welcome<span id="text1" style={{fontSize:'80px'}}> to</span>  SALT APK.</p> 
             <p id='text2'style={{fontSize:'24px',lineHeight:'42.84px',wordWrap: 'break-word'}}>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
             <Button variant='dark'  style={{width:'45%',backgroundColor:' #10AB61',padding:'20px',border:'none',fontSize:'29px'}} id='btn'className="mt-3">Take a Free Demo</Button>
             <Button variant='dark' className='mx-2 mt-3' style={{width:'45%',padding:'20px',border:'none',fontSize:'29px'}} id='btn1'> Book a call</Button>
           <div style={{width:'90%', height:'100px',border:'1px solid #0fab60',borderRadius:'5px'}} id="view" className="mt-5 d-flex">
             <div id="view1" style={{borderRight:'1px solid #0fab60',width:'33.3%',textAlign:'center',padding:'30px'}}> <img src={"./images/Gift.png"} style={{width:'20%'}} className=' w-sm-100 'alt=''/><span style={{fontSize:'13px',color: '#5C6162'}}>15 Day’s Free</span></div>
             <div id="view2" style={{borderRight:'1px solid #0fab60',width:'33.3%',textAlign:'center',padding:'30px'}}> <img src={"./images/Lightning.png"} style={{width:'20%'}} className=' w-sm-100 'alt=''/><span style={{fontSize:'13px',color: '#5C6162'}}>15 Day’s Free</span></div>
             <div  id="view3"style={{width:'33.3%',padding:'30px',textAlign:'center'}}><img src={"./images/SmileySticker.png"} style={{width:'20%'}} className=' w-sm-100 'alt=''/><span style={{fontSize:'13px',color: '#5C6162'}}>15 Day’s Free</span></div>
           </div>
               </div>
               <div className='col-xl-5 col-sm-5 col-md-12 mt-5 mb-5 col-lg-5'>
                   <img src={"./images/landingimage.png"} style={{width:'100%', float:'left'}} className=' w-sm-100 ' id='img1'alt=''/>
               </div>
               </div>
               </div>
   </div>
  );
}
