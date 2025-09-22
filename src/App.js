
import { useState } from 'react';
import './App.css';
import Hero from './hero/Hero';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import data from './data'
import Footer from './footer/Footer';


function App() {
  const [clickedBrand, setClickedBrand]=useState(null)
  const [clickedPrice, setClickedPrice]=useState(null)
  const [clickedColor, setClickedColor]=useState(null)
  const [clickedDeals, setClickedDeals]=useState(null)

  const handleClick=i=>{
    setClickedBrand(i)
  }
  const handlePrice=i=>{
    setClickedPrice(i)
  }

  const handleColor=i=>{
    setClickedColor(i)
  }
  const handleDeals=i=>{
    setClickedDeals(i)
  }
  
  const filterData=(data)=>{
   return data.filter(({ company, color, priceRange, isHot }) => {
      const brandMatch = clickedBrand ? company === clickedBrand : true
      const priceMatch = clickedPrice ? priceRange === clickedPrice : true
      const colorMatch= clickedColor ? color === clickedColor : true
      const dealsMatch = clickedDeals ? isHot === "true" && company === clickedDeals : true
       return brandMatch && priceMatch && colorMatch && dealsMatch;

     
    });

    
    
    }
    
    
    const filteredProducts = filterData(data);

  
  return (
  <>
    <Navbar/>
    <div className='section'>
      <Sidebar 
          handleClick={handleClick}
          clickedBrand={clickedBrand} 
          handlePrice={handlePrice}
          handleColor={handleColor} 
          handleDeals={handleDeals}
          clickedDeals={clickedDeals}/>
      <Hero products={filteredProducts}/>
      
    </div>
    <Footer/>
    
  </>
  );
}
export default App;
