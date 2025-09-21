import React from 'react'
import './price.css'
const Price = ({handlePrice}) => {
    console.log(handlePrice)
  return (
    <div className='price'>
        <h3>Price</h3>
        
        <div className='price-details'>
            <div>
                <input type="radio" id="price1" name='price' onClick={()=>handlePrice("$20-$25")}/>
                <label htmlFor='price1'>$20-$25</label>
            </div>
            <div>
                <input type="radio" id="price2" name='price' onClick={()=>handlePrice("$25-$50")}/>
                <label htmlFor='price2'>$25-$50</label>
            </div>
            <div>
                <input type="radio" id="price3" name='price' onClick={()=>handlePrice("$50-$100")}/>
                <label htmlFor='price3'>$50-$100</label>
            </div>
            <div>
                <input type="radio" id="price4" name='price' onClick={()=>handlePrice("$100-$150")}/>
                <label htmlFor='price4'>$100-$150</label>
            </div>
            <div>
                <input type="radio" id="price5" name='price' onClick={()=>handlePrice("$150-$200")}/>
                <label htmlFor='price5'>$150-$200</label>
            </div>
        </div>
    </div>
  )
}

export default Price