import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';




  const overscrollOptions = {
    enable: false,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
    
  };



  
const options = {
   
    plugins: {
      overscroll: { ...overscrollOptions },
    },
    
  }
  
  const Scroll = () => {

    useEffect(() => {

        Scrollbar.use(OverscrollPlugin);

        Scrollbar.init(document.body, options);
        
    
      
    
        return () => {
          if (Scrollbar) Scrollbar.destroy(document.body)
        }  },[])
  


    return null;
}

export default Scroll;