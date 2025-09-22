import React from 'react'
import './deals.css'
import data from '../../data';
const Deals = ( {handleDeals, clickedDeals}) => {

    const dealsNikeCount= data.filter((item)=>(item.isHot === "true" && item.company === "Nike")).length
    const dealsAdidasCount= data.filter((item)=>(item.isHot === "true" && item.company === "Adidas")).length
    const dealsPumaCount= data.filter((item)=>(item.isHot === "true" && item.company === "Puma")).length
    const dealsVansCount= data.filter((item)=>(item.isHot === "true" && item.company === "Vans")).length

  return (
    <div className='deals'>
        <h3>Hot Deals</h3>
        <div className='deals-details'  style={{ color: clickedDeals === "Nike" ? "blue" : "black" }}>
            <span onClick={()=>handleDeals("Nike")} >Nike</span>
            <p>{dealsNikeCount}</p>
        </div>
        <div className='deals-details' style={{color: clickedDeals === "Adidas" ? "blue" : "black"}}>
            <span onClick={()=>handleDeals("Adidas")}>Adidas</span>
            <p>{dealsAdidasCount}</p>
        </div>
        <div className='deals-details' style={{color: clickedDeals === "Puma" ? "blue" : "black"}}>
            <span onClick={()=>handleDeals("Puma")}>Puma</span>
            <p>{dealsPumaCount}</p>
        </div>
        <div className='deals-details' style={{color: clickedDeals === "Vans" ? "blue" : "black"}}>
            <span onClick={()=>handleDeals("Vans")}>Vans</span>
            <p>{dealsVansCount}</p>
        </div>
    </div>
  )
}

export default Deals