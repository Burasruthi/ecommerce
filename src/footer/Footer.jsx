import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    
    <div className='footer'>
        <div className='footer-upper'>
            <div className='footer-upper-left'>
                <div className='footer-upper-left-logo'>
                    <img src="https://w7.pngwing.com/pngs/713/936/png-transparent-online-shopping-shopping-cart-logo-e-commerce-market-blue-angle-company-thumbnail.png" alt='logo'/>
                    <h3>E-Comm</h3>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil! Fugiat eum nemo blanditiis earum!</span>
            </div>
            <div className='footer-upper-middle'>
                <h3>Follow Us</h3>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                <div className='footer-upper-middle-images'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3gRWIQEG_W67ppkPTs0HR5HfgNRFS5Rtvxs1CUg2p0sKGjy8ci-OQO6qJ289-xnek9g&usqp=CAU" alt="facebook"/>
                    <img src="https://cdn-icons-png.flaticon.com/512/2496/2496110.png" alt="twitter"/>
                </div>

            </div>
            <div className='footer-upper-right'>
                 <h3>Contact Us</h3>
                    <span>E-Comm, 4578<br/>Marmora Road, <br/> Glasgrow D04 89GR</span>
            </div>
        </div>
        <div className='footer-down'>
            <div className='footer-down-inner'>
                <span>information</span>
                <ul>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>information</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='footer-down-inner'>
                <span>Service</span>
                <ul>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>information</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='footer-down-inner'>
                <span>My Account</span>
                <ul>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>information</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='footer-down-inner'>
                <span>Our Offeres</span>
                <ul>
                    <li><a href=''>About Us</a></li>
                    <li><a href=''>information</a></li>
                    <li><a href=''>Privacy Policy</a></li>
                    <li><a href=''>Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
        <div>
            <hr style={{margin:"0 150px 0 150px"}}></hr>
        </div>
        <div className='footer-down1'>
            <p>&copy; 2018 ecommerce theme by www.bisenbaev.com</p>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/2560px-Western_Union_logo.svg.png" alt='image'/>
                <img src="https://thumbs.dreamstime.com/b/mastercard-logo-blue-background-vector-image-eps-72682456.jpg" alt='image'/>
                <img src="https://www.shutterstock.com/image-vector/paypal-multinational-financial-technology-payment-260nw-2276341185.jpg" alt='image'/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rA-0ZxPm7g-iQzApiZvLriUmnQtmRhEwmw&s" alt='image'/>
            </div>
        </div>
    </div>
   

    
    
  )
}

export default Footer