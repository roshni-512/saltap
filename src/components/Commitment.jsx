import React from 'react'
import { Button } from 'react-bootstrap'
export default function Commitment() {
  return (
    <div style={{backgroundColor:'#88D5B0',overflowX:'hidden'}}>
    <div className="">
       <div className="row d-flex justify-content-around">
       
               <div className='col-xl-5  col-lg-5 col-md-12 col-sm-5 mt-5 mb-5' >
               <p style={{ fontFamily: 'Alfa Slab One', fontSize: '84px' }} id='text22'>What you get <br/>so far </p>
                <p style={{fontFamily:'poppins' ,fontSize:'24px'}}>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</p>
                <Button  variant='dark' className=' btn56 mt-2' style={{width:'45%',padding:'20px',border:'none',fontSize:'28.16px'}}>Take A Demo</Button>
               </div>
               <div className='col-xl-5 col-lg-5 col-md-12 mt-5 mb-5'>
               <div > <img  className='offer1img mt-2' src={"./images/offer1.png"} alt =''style={{width:'15%',height:'110px',borderRadius:'5px',border:'5px white solid'}} /> <span style={{fontSize:'24px',fontWeight:600}} className='offer1text'>Approved by the ACPR(Banque de france)</span></div>
                <div> <img className='offer1img mt-2'src={"./images/offer2.png"} alt='' style={{width:'15%',height:'110px',borderRadius:'5px',border:'5px white solid'}}/> <span style={{fontSize:'24px',fontWeight:600}} className='offer1text'>Mastercard network</span> </div>
               <div> <img className='offer1img mt-2'src={"./images/offer3.png"} alt ='' style={{width:'15%',height:'110px',borderRadius:'5px',border:'5px white solid'}}/> <span style={{fontSize:'24px',fontWeight:600}} className='offer1text'>Funds secured according to French regulations</span> </div>
               <div> <img className='offer1img mt-2' src={"./images/offer4.png"} alt ='' style={{width:'15%',height:'110px',borderRadius:'5px',border:'5px white solid'}}/> <span style={{fontSize:'24px',fontWeight:600}} className='offer1text'>Your data is encrypted and protected</span></div>
                <div> <img className='offer1img mt-2'src={"./images/offer5.png"} alt ='' style={{width:'15%',height:'110px',borderRadius:'5px',border:'5px white solid'}}/><span style={{fontSize:'24px',fontWeight:600}} className='offer1text'>Independent subsidiary of Société Générale</span></div>  
               </div>
               </div>
       </div> 
   </div>
  )
}
