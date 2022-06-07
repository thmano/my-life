import Image from '../../components/Image';
import imageLogo from '../../assets/logo.png'
import { MdOutlineLogout } from 'react-icons/md'
import './style.css';
import List from '../../router/List';


const Menu = () =>{

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
            < MdOutlineLogout className='logout_icon' />
        </div>
    </div>
    <div className='side_menu'>
       <List />
    </div>
</div>

)

}
export default Menu;