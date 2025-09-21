import React from 'react'
import './product.css'
import { FaStar } from "react-icons/fa";


const Product = ({products}) => {
    console.log(products)
  return (
    <div className='card'>
    {products.map((item)=>(
    <div className='product'>
        <div className='image-details' key={item.id}>
            <img src={item.img} alt='shoeimage'/>
            <p>HOT</p>
        </div>
        <h4>{item.title}</h4>
        <div className='review'>
            <FaStar className='review-details'/>
            <FaStar className='review-details'/>
            <FaStar className='review-details'/>
            <FaStar className='review-details'/>
            <span>{item.reviews}</span>
        </div>
        <div className='product-details'>
            <h3>${item.newPrice}</h3>
            <span>{item.prevPrice}</span>
            <p>10% OFF</p>
        </div>
    </div>
     ))}
    </div>
  )
}


export default Product