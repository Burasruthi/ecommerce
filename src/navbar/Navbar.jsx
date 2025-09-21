import  './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <img src="https://i.pinimg.com/736x/09/0f/55/090f5516b8b09acf34fd4d55517c2e24.jpg" alt='img'/>
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
            <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-shopping-cart-convenient-icon-png-image_4637407.jpg" alt='cart'/>
            <p>items $0.00</p>
        </div>
    </div>
  )
}

export default Navbar