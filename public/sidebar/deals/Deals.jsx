import './deals.css'

const Deals = () => {
  return (
     <div className='sideBar-hot'>
            <h3>Hot Deals</h3>
            <div className='sidebar-hot-details'>
              <h4>Nike</h4>  
              <p>2</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4 style={{color: "blue"}}>Airmax</h4>  
              <p style={{color: "blue"}}>48</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4>Nike</h4>  
              <p>14</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4>Nike</h4>  
              <p>15</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4>vans</h4>  
              <p>23</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4>All Stars</h4>  
              <p>1</p>
            </div>
            <div className='sidebar-hot-details'>
              <h4>Adidas</h4>  
              <p>95</p>
            </div>
        </div>
  )
}

export default Deals