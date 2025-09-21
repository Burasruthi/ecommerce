import React from 'react'
import Deals from './deals/Deals'
import Price from './price/Price'
import Colors from './colors/Colors'
import Brand from './brand/Brand'

const Sidebar = ({handleClick, handlePrice, clickedBrand}) => {
  return (
    <div>
        <Deals/>
        <Price handlePrice={handlePrice}/>
        <Colors/>
        <Brand handleClick={handleClick} clickedBrand={clickedBrand}/>

    </div>
  )
}

export default Sidebar