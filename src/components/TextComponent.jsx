import React from 'react'

export default function TextComponent() {
  return (
    <div style={{width:'100vw',height:'100vh',overflowX:'hidden'}}>
    <div className=" mt-5 mb-5">
      <div className="row ">
          <div className="col-12"style={{fontFamily:'Alfa Slab One',fontSize:'179px',textAlign:'center',lineHeight:'200px' }}>More agile than a </div>
      </div>
      <div className="row d-flex justify-content-between">
          <div className="col-7"style={{fontFamily:'Alfa Slab One',fontSize:'160px',textAlign:'center' ,lineHeight:'200px' }}>traditional </div>
          <div className="col-5 col-md-5 p-0 d-none d-md-block">  <img src={"./images/grid9.png"} style={{width:'60%',height:"250px"}}  alt=''/></div>
      </div>
      <div className="row">
      <div className="col-8"style={{fontFamily:'Alfa Slab One',fontSize:'178px',lineHeight:'80px' ,textAlign:'center'}}>Software <span style={{fontSize:'60px',fontFamily:'Alfa Slab One',fontWeight:400}}>more</span></div>
     
      </div>
      <div className="row">
          <div className="col-12"style={{fontFamily:'Alfa Slab One',fontSize:'178px',lineHeight:'180px',textAlign:'center'}}>human than an AI</div>
      </div>
    </div>
  </div>
  )
}
