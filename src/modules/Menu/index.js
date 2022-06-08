import { useState, useEffect } from 'react'

import Image from '../../components/Image';
import imageLogo from '../../assets/logo.png'
import NightlightIcon from '@mui/icons-material/Nightlight';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import './style.css';
import List from '../../router/List';


const Menu = () =>{

    const [theme, setTheme] = useState(false)

    useEffect(() => {

        if (theme === true) {
            document.querySelector('.header').style.backgroundColor = '#2b2828'
            document.querySelector('.side_menu').style.backgroundColor = '#2b2828'
            document.querySelector('.header_menu').style.color = '#fff'
            document.querySelector('.link').style.color = '#fff'
        }else{
            document.querySelector('.header').style.backgroundColor = '#fff'
            document.querySelector('.header_menu').style.color = '#5f5f5f'
            document.querySelector('.side_menu').style.backgroundColor = '#fff'
            document.querySelector('.link').style.color = '#282c34'
            
        }

    },[theme])

return (
<div className='container'>
    <div className='header'>
        <div className='logo'>
            <Image 
            src_image={imageLogo}  
            alt={'Logo'} 
            width={'120px'}
            height={'60px'} />
        </div>
        <div className='header_menu'>
            {theme === false && 
                < NightlightIcon onClick={() => setTheme( true ) } className='logout_icon' />
            }
            {theme === true && 
                < Brightness4Icon onClick={() => setTheme( false ) } className='logout_icon' />
            }
            < GTranslateIcon className='logout_icon' />
        </div>
    </div>
    <div className='side_menu'>
       <List />
    </div>
</div>

)

}
export default Menu;