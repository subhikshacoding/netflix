import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import person4 from './Assets/person4.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
  const[isScrolled,setIsScrolled] = useState(false);

  window.onscroll =() =>{
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => window.onscroll = null
  }
  return (
    <div className={isScrolled ? " scrolled" : "navbar"}>
        <div className="navbarcontainer">
            <div className="navbarleft">
                <img className='navbarimg1' src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt=''></img>
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>My List</span>

            </div>
            <div className="navbarright">
                    <SearchIcon className='icon'/>
                    <span>KID</span>
                    <NotificationsIcon className='icon'/>
                    <img  className="navbarimg"src={person4} alt="" />  
                    <div className='profile'>
                    <ArrowDropDownIcon className='icon'/>
                    <div className="options">
                      <span className='optionsetting'>Settings</span>
                      <span className='optionsetting'>Logout</span>

                    </div>
                      </div>                  
                    

            </div>
        </div>

</div>
  )
}

export default Navbar