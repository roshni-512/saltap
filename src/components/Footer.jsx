import React from 'react'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#10AB61",overflowX:'hidden'}}>
    <div className="d-none d-xl-block d-lg-block">
      <div className="row d-flex justify-content-around ">
        <div className="col-sm-3 col-12 d-flex" id='logo'><img
              src="./images/sallogo.png"
              width="100"
              height="40"
              className="mt-5 mx-5"
              alt=""
               id='logo'
              />
             
              </div>
        <div className="col-sm-6 col-12 me-auto  mt-5 pb-2  col-md-6 d-flex justify-content-center" id='info' >
               <a href="#action2"  className='mx-3' style={{color:'white',textDecoration:'none',fontSize:'24px'}} id='info4'>Terms of use</a>
              <a href="#action3"   className='mx-3' style={{color:'white',textDecoration:'none',fontSize:'24px'}} id='info2'>Configure cookies</a>
              <a href="#action2"  className='mx-3' style={{color:'white' ,textDecoration:'none',fontSize:'24px'}} id='info3'>©2023-2024, Salt, All rights reserved.</a>
             </div>
        <div className="col-sm-3 col-12 mt-3 pb-3 d-flex justify-content-center" id='social-links' >  
        <img src={"./images/linkedin1.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/facebook1.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/twitter.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
             </div>
      </div>
       </div>
       {/* /*mobile view */ }
       <div style={{ backgroundColor: "#10AB61",overflowX:'hidden'}}>
    <div className=" d-sm-block d-md-block d-xl-none d-lg-none ">
      <div className="row d-flex justify-content-around ">
      <div className="col-sm-12    mt-5 pb-2  col-md-6 d-flex justify-content-center" id='info' >
               <a href="#action2"  className='mx-3' style={{color:'white',textDecoration:'none',fontSize:'2px'}} id='info4'>Terms of use</a>
              <a href="#action3"   className='mx-3' style={{color:'white',textDecoration:'none',fontSize:'10px'}} id='info2'>Configure cookies</a>
              <a href="#action2"  className='mx-3' style={{color:'white' ,textDecoration:'none',fontSize:'10px'}} id='info3'>©2023-2024, Salt, All rights reserved.</a>
             </div>
        <div className="col-sm-6 " id='logo'><img
              src="./images/sallogo.png"
              width="100"
              height="40"
              className="mt-5 mx-5"
              alt=""
               id='logo'
               style={{float:'left'}}
              />
             
              </div>
        
        <div className="col-sm-3 col-12 mt-3 pb-3 d-flex justify-content-center" id='social-links' >  
        <img src={"./images/linkedin1.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/facebook1.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/twitter.png"} style={{width:'15%'}} className='mt-2 mx-2 mb-2' alt=''/>
             </div>
      </div>
       </div>
  </div>
  </div>

  
  )
}
