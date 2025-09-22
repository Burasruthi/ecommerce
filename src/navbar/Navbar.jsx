import  './navbar.css'

const Navbar = () => {
  return (
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
  )
}

export default Navbar