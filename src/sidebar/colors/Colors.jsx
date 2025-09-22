import React from 'react'
import './colors.css'
const Colors = ({handleColor}) => {
  return (
   <div className='colors'>
        <h3>Colors</h3>
        <div className='colors-details'>
          <span className='colors-details-inner' style={{ backgroundColor:"red", color:"red"}} onClick={()=>handleColor("red")}>e</span>
          <span className='colors-details-inner' style={{ backgroundColor:"blue", color:"blue"}} onClick={()=>handleColor("blue")}>e</span>
          <span className='colors-details-inner' style={{ backgroundColor:"green", color:"green"}} onClick={()=>handleColor("green")}>e</span>
          <span className='colors-details-inner' style={{backgroundColor:"yellow", color:"yellow"}} onClick={()=>handleColor("yellow")}>e</span>
          <span className='colors-details-inner' style={{backgroundColor:"black", color:"black"}} onClick={()=>handleColor("black")}>e</span>
          <span className='colors-details-inner' style={{ backgroundColor:"White", color:"White"}} onClick={()=>handleColor("white")}>e</span>
        </div>
        
    </div>
  )
}

export default Colors