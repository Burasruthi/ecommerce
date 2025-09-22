import React from 'react'
import './hero.css'
import Product from '../products/Product'
import { FaChevronDown, FaBars, FaCandyCane} from "react-icons/fa";
const Hero = ({products}) => {
    
  return (
    <div>
        <div className='hero'>
            <img src='https://s3-alpha.figma.com/hub/file/5848360838/8245fdd2-97c5-41ee-865e-523aaf0948aa-cover.png' alt='img'/>
        </div>
        <div className='filter'>
            <div className='filter-left'>
              <p>13 items</p>
               <p>Sort By</p>

               <div className='filter-left1'>
                  <p>Name</p>
                   <FaChevronDown className='doropdown'/> 
               </div>
               
               <div className='filter-left2'>
                <p>Show</p>
                <p>12</p>
                 <FaChevronDown className='doropdown'/> 
               </div>
               
               
            </div>
            <div className='ham'>
              <img  className='hamburger' src="https://static.thenounproject.com/png/3700268-200.png" alt='img'/>
              <FaBars style={{color:"gray"}} className='hamburger'/>
            </div>
        </div>
        <Product products={products}/>
    </div>
  )
}

export default Hero