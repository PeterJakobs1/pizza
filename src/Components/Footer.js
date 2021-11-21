import React from 'react'
import delivery from '../img/delivery.png';
import pickUp from '../img/pickUp.png';

function Footer() {
    
    return (
        
     <div className="main-footer">
        
         
         <div className="container">
         <div className="line"></div>

             <img src={delivery} className="delivery" width="100" height="50" />
             <div className="deliverytext">Deliver</div>
             <div className="PickUpText">PickUp</div>             
                 
             <img src={pickUp}  className="pickUp" width="50" height="50" />
            
         </div>
        
     </div>
     
    )
}

export default Footer 
