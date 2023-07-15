import React from 'react'

export default function NavBar() {
  return (
      <div id="nav">
        <div><img src={"./images/sallogo.png"} style={{width:'100%',height:'40px'}} className='mt-1 mx-2 ' alt='' id='mobimg'/></div>
        <div><img src={"./images/linkedin1.png"} style={{width:'30%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/facebook1.png"} style={{width:'30%'}} className='mt-2 mx-2 mb-2' alt=''/>
        <img src={"./images/twitter.png"} style={{width:'30%'}} className='mt-2 mx-2 mb-2' alt=''/></div>
    </div>

  )
}

