import React from 'react'
import './deals.css'
const Deals = () => {
  return (
    <div className='deals'>
        <h3>Hot Deals</h3>
        <div className='deals-details'>
            <span>Nike</span>
            <p>2</p>
        </div>
        <div className='deals-details'>
            <span>Adidas</span>
            <p>48</p>
        </div>
        <div className='deals-details'>
            <span>Nike</span>
            <p>14</p>
        </div>
        <div className='deals-details'>
            <span>Vans</span>
            <p>8</p>
        </div>
    </div>
  )
}

export default Deals