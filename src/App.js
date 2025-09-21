
import { useState } from 'react';
import './App.css';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import data from './data'


function App() {
  const [clickedBrand, setClickedBrand]=useState(null)
   const [clickedPrice, setClickedPrice]=useState(null)
  const handleClick=i=>{
    setClickedBrand(i)
  }
  const handlePrice=i=>{
    setClickedPrice(i)
  }
  
  const filterData=(data)=>{
   return data.filter(({ company, color, priceRange }) => {
      const brandMatch = clickedBrand ? company === clickedBrand : true;
      const priceMatch = clickedPrice ? priceRange === clickedPrice : true;
      return brandMatch && priceMatch;
    });
    
    }
    
    const filteredProducts = filterData(data);

  
  return (
  <>
    <Navbar/>
    <div className='section'>
      <Sidebar handleClick={handleClick} clickedBrand={clickedBrand} handlePrice={handlePrice}/>
      <Hero products={filteredProducts}/>
      
    </div>
    
  </>
  );
}
export default App;
