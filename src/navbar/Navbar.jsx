import  './navbar.css'

const Navbar = () => {
  return (
    <>
    

   
    <div className='nav'>
        <div className='nav-left'>
            <img src="https://w7.pngwing.com/pngs/713/936/png-transparent-online-shopping-shopping-cart-logo-e-commerce-market-blue-angle-company-thumbnail.png" alt='img'/>
            <h2>E-Comm</h2>
        </div>
        <div className='nav-middle'>
            <ul>
                <li style={{color:"blue"}}>HOME</li>
                <li>BAG</li>
                <li>SNEAKERS</li>
                <li>BELT</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className='nav-right'>
            <img src="https://cdn-icons-png.flaticon.com/256/5166/5166615.png" alt='cart'/>
            <p>items $0.00</p>
        </div>
    </div>
    <div className='resposive'>
        <div className='navSmall'>
            <img src="https://cdn.prod.website-files.com/605826c62e8de87de744596e/676384c5f1eae7a1e79ae8d3_67637f0be47077919bae0b79_screenshot-2024-12-18-at-72302-pm-6762d481479f6.webp" alt='img'/>
        </div>
        <h1 style={{fontSize: "50px", paddingLeft:"40px"}}>Category</h1>
        <div className='navSmall-Category'>
            
            <div className='category'>
                <img src='https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/user8-512.png' alt='img'/>
                <p>Men's</p>
            </div>
            <div className='category'>
                <img src='https://cdn4.iconfinder.com/data/icons/peppyicons-rounded/512/user3-512.png' alt='img'/>
                <p>Women's</p>
            </div>
            <div className='category'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bNwNV8fQgwXpAB28tRfQ99EOZ8WPgHlQ9DhBIQBMwUhWa6b3cwJrOcxuyMA9ncEjEeg&usqp=CAU' alt='img'/>
                <p>Boy's</p>
            </div>
            <div className='category'>
                <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png' alt='img'/>
                <p>Girl's</p>
            </div>
        </div>
        <div className='flash'>
            <div className='flash1'>
                <h1 style={{fontSize: "50px", paddingLeft:"40px"}}>Flash Sales</h1>
                <p style={{fontSize: "30px", color:"blue"}}>See More</p>
            </div >
            <div className='flash-inner'>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/61sqhklmkmL._AC_SY695_.jpg" alt='img'/>
                    <h1>Nike Men Running Shoes</h1>
                    <span>$60.00</span>
                    <del>$80.00</del>
                    <div className='flash-d'>
                        <p>(83 reviews)</p>
                        <h3>10%OFF</h3>
                    </div>
                
                </div>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/51oa6nZIHAL._AC_SX695_.jpg" alt='img'/>
                    <h1>PUMA Men's Club Ii Era</h1>
                    <span>$60.00</span>
                    <del>$80.00</del>
                    <div className='flash-d'>
                        <p>(83 reviews)</p>
                        <h3>10%OFF</h3>
                    </div>
                
                </div>
                
            </div>
            
        </div>
        <div className='flash1'>
                <h1 style={{fontSize: "50px", paddingLeft:"40px", paddingTop:"10px"}}>Mega Sales</h1>
                <p style={{fontSize: "30px", color:"blue", paddingTop:"20px"}}>See More</p>
        </div>
        <div className='flash-inner'>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/41jEYcGYCzL._AC_SY695_.jpg" alt='img'/>
                    <h1>PUMA Men's Rebound</h1>
                    <span>$40.00</span>
                    <del>$50.00</del>
                    <div className='flash-d'>
                        <p>(17 reviews)</p>
                        <h3>15%OFF</h3>
                    </div>
                
                </div>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/71XL6I7LekL._AC_SX695_.jpg" alt='img'/>
                    <h1>PUMA Men's Rebound</h1>
                    <span>$40.00</span>
                    <del>$50.00</del>
                    <div className='flash-d'>
                        <p>(23 reviews)</p>
                        <h3>10%OFF</h3>
                    </div>
                
                </div>
                
        </div>
        <div className='navSmall'>
            <img style={{marginTop:"50px", marginBottom:"30px"}} src="https://img.freepik.com/free-photo/purchasing-shop-buying-selling-teade_53876-134043.jpg?semt=ais_incoming&w=740&q=80" alt='img'/>
        </div>
        
        <div className='flash-inner'>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/71JDbdxzfYL._AC_SY695_.jpg" alt='img'/>
                    <h1>Nike Women's Free Metcon</h1>
                    <span>$50.00</span>
                    <del>$60.00</del>
                    <div className='flash-d'>
                        <p>(17 reviews)</p>
                        <h3>10%OFF</h3>
                    </div>
                
                </div>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/81vMX3T02vL._AC_SX695_.jpg" alt='img'/>
                    <h1>Nike Women's Free Metcon</h1>
                    <span>$30.00</span>
                    <del>$50.00</del>
                    <div className='flash-d'>
                        <p>(13 reviews)</p>
                        <h3>10%OFF</h3>
                    </div>
                
                </div>
                
                
        </div>
        <div style={{margin:"20px"}}></div>
        <div className='flash-inner'>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/61d-XumbpkL._AC_SY695_.jpg" alt='img'/>
                    <h1>adidas Unisex-Adult</h1>
                    <span>$50.00</span>
                    <del>$60.00</del>
                    <div className='flash-d'>
                        <p>(12 reviews)</p>
                        <h3>15%OFF</h3>
                    </div>
                
                </div>
                <div className='flash-details'>
                    <img src="https://m.media-amazon.com/images/I/51JF7QK9x5L._AC_SX695_.jpg" alt='img'/>
                    <h1 >adidas Unisex-Adult</h1>
                    <span>$60.00</span>
                    <del>$90.00</del>
                    <div className='flash-d'>
                        <p>(53 reviews)</p>
                        <h3>20%OFF</h3>
                    </div>
                
                </div>
                
                
        </div>
    </div>
    </>
  )
}

export default Navbar