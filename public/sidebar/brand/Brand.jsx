import React, { useEffect, useState } from 'react'
import products from "../../../src/data";
import './brand.css'
import Products from '../../../src/components/section/products/Products';

const Brand = () => {
    // console.log(products)
    const [data,setData]=useState(products)
    
    
    const filterData=(cartData)=>{
      
        const updateItems= data.filter((item)=>{
           return item.company === cartData;
        })
        setData(updateItems)
        
     }
     console.log(data)

     const brandCounts={}
     products.forEach((item) => { 
        if(brandCounts[item.company]){
            brandCounts[item.company]=brandCounts[item.company]+1
        }
        else{
            brandCounts[item.company]=1
        }
     });
    // console.log(brandCounts)

   
    
  return (
    <div className='brand'>
        <h3>Brand</h3>
        
        <div className='brand-details'>
            <span onClick={e=>filterData("Nike")} >Nike</span>
            <p>{brandCounts["Nike"]}</p>
        </div>
        <div className='brand-details'>
            <span onClick={e=>filterData("Adidas")}>Adidas</span>
            <p>{brandCounts["Adidas"]}</p>
        </div>
        <div className='brand-details'>
            <span onClick={e=>filterData("Puma")}>Puma</span>
            <p>{brandCounts["Puma"]}</p>
        </div>
        <div className='brand-details'>
            <span onClick={e=>filterData("Reebok")}>Reebok</span>
            <p>{brandCounts["Reebok"]}</p>
        </div>
        <div className='brand-details'>
            <span onClick={e=>filterData("Vans")}>vans</span>
            <p>{brandCounts["Vans"]}</p>
        </div>
         <div>
            <Products data={data}/>
            {/* {data.map((item)=>(
                <div key={item.id}>
                    <img src={item.img} alt='image'/>
                    <ul><li>{item.company}</li>
                    <li>{item.newPrice}</li></ul>
                </div>
            ))} */}
         </div>
         {/* <div><span>{data.map((item)=>(
            <ul key={item.id}><li>{item.company}</li></ul>
        ))}</span></div> */}
    </div>
  )
}

export default Brand