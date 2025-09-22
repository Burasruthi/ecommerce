import React from 'react'
import Deals from './deals/Deals'
import Price from './price/Price'
import Colors from './colors/Colors'
import Brand from './brand/Brand'

const Sidebar = ({handleClick, handlePrice, clickedBrand,  handleColor, handleDeals, clickedDeals}) => {
  return (
    <div>
        <Deals handleDeals={handleDeals} clickedDeals={clickedDeals}/>
        <Price handlePrice={handlePrice}/>
        <Colors handleColor={handleColor}/>
        <Brand handleClick={handleClick} clickedBrand={clickedBrand} />

    </div>
  )
}

export default Sidebar