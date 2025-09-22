import React from 'react'
import './product.css'
import { FaStar } from "react-icons/fa";


const Product = ({products}) => {
    console.log(products)

   if(!products || products.length === 0){
      return <h2 style={{textAlign:"center"}}> no results found</h2>
   }

  return (
    <>
  
    <div className='card'>
    {products.slice(0,6).map((item)=>(
    <div className='product'>
        <div className='image-details' key={item.id}>
            <img src={item.img} alt='shoeimage'/>
            {item.isHot === "true"?  <p>HOT</p>: " "}
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
            <p>{item.percent}</p>
        </div>
    </div>
     ))}
    </div>
    <div className='card-down'>
        <p>1</p>
        <p>2</p>
        <p className='s'>3</p>
        <p>4</p>
        <p>5</p>
    </div>
    </>
  )
}


export default Product