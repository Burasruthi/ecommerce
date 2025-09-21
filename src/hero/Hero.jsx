import React from 'react'
import './hero.css'
import Product from '../products/Product'
const Hero = ({products}) => {
    
  return (
    <div>
        <div className='hero'>
            <img src='https://s3-alpha.figma.com/hub/file/5848360838/8245fdd2-97c5-41ee-865e-523aaf0948aa-cover.png' alt='img'/>
        </div>
        <div className='filter'>
            filter
        </div>
        <Product products={products}/>
    </div>
  )
}

export default Hero