import React from 'react'
import './brand.css'
import data from '../../data';



const Brand = ({handleClick, clickedBrand }) => {
   
    const nikeCount=data.filter((item)=>item.company === "Nike").length
    const adidasCount=data.filter((item)=>item.company === "Adidas").length
     const pumaCount=data.filter((item)=>item.company === "Puma").length
     const vansCount=data.filter((item)=>item.company === "Vans").length
     const reebokCount=data.filter((item)=>item.company === "Reebok").length

    

  return (
    <div className='brand'>
        <h3>Brand</h3>
        <div className='brand-details' style={{color: clickedBrand === "Nike"? "blue": "black"}}>
            <span  onClick={()=>handleClick("Nike")}  >Nike</span>
            <p>{nikeCount}</p>
        </div>
        <div className='brand-details' style={{color: clickedBrand === "Adidas"? "blue": "black"}} >
            <span onClick={()=>handleClick("Adidas")} >Adidas</span>
            <p>{adidasCount}</p>
        </div>
        <div className='brand-details' style={{color: clickedBrand === "Puma"? "blue": "black"}}>
            <span onClick={()=>handleClick("Puma")}  >Puma</span>
            <p>{pumaCount}</p>
        </div>
        <div className='brand-details' style={{color: clickedBrand === "Vans"? "blue": "black"}} >
            <span onClick={()=>handleClick("Vans")} >Vans</span>
            <p>{vansCount}</p>
        </div>
        <div className='brand-details' style={{color: clickedBrand === "Reebok"? "blue": "black"}}>
            <span onClick={()=>handleClick("Reebok")}  >Reebok</span>
            <p>{reebokCount}</p>
        </div>
        
    </div>
  )
}

export default Brand