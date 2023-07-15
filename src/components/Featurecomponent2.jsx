import React from 'react'
import { Button } from 'react-bootstrap'
export default function Featurecomponent2() {
  return (
 
    <div style={{ padding: '1px',overflowX:'hidden' }} >
    <div className=' my-4' style={{ fontFamily: "Fraunces" }} >
        <div className='row' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className='col-xl-5 col-sm-5 col-md-12 ps-sm-5 mt-5 mb-5 col-lg-5 order-lg-first order-last '>
        <p style={{fontFamily:'Alfa Slab One',fontSize:'84px',lineHeight:'93.545px' }} className='mt-5 mb-5'>Secure</p>
        <p style={{fontFamily:'Poppins',fontSize:'24px',lineHeight:'42.4px'}} className='my-4 text6'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit,  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br></br> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
        <Button style={{backgroundColor:'#10AB61',width:'45%',padding:'20px',border:'none',fontSize:'28.16px'}} id='btn2' className='btn6'>Take a Free Demo</Button>  
            </div>
        <div className='col-xl-5 col-sm-5 col-md-12 mt-5 mb-5 col-lg-5 ' style={{display:'fllex', alignSelf:'center'}}>
        <img src={"./images/feature12.png"} style={{ width: '100%', float: 'right' }}  alt='' />
        </div>
          
        </div>
    </div>
</div>
  )
}
