import { useEffect } from 'react'
import './style.css'
import { MdSpaceDashboard } from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import { AiFillProject } from 'react-icons/ai'
import { MdContactMail } from 'react-icons/md'
import {  Link, useLocation } from "react-router-dom";

const List = () => {

    const { pathname } = useLocation()
useEffect(() => {
    switch (pathname) {
        case '/':
            document.querySelector('.home').style.color = '#00AEEF'
            break;
            case '/knowledge':
                document.querySelector('.knowledge').style.color = '#00AEEF'
            break;
            case '/contact':
                document.querySelector('.contact').style.color = '#00AEEF'
            break;
            case '/projects':
                document.querySelector('.projects').style.color = '#00AEEF'
            break;
    
        default:
            break;
    }
}, [pathname])
    

return(
    <div>
        <div className="ul_list">
            <Link to="/" className='divisor link home'> 
                <MdSpaceDashboard className='icon ' />
                Dashboard
            </Link>
      
            <Link to="/knowledge" className='link knowledge'>
                <ImBooks className='icon' />
                Conhecimento 
            </Link>
            
            <Link to="/projects"  className='divisor link projects' >
                <AiFillProject className='icon ' />
                Projetos 
            </Link>
            
            <Link to="/contact" className='link contact'>
                <MdContactMail className='icon' />
                Contato 
            </Link>
        </div>
    </div>
)
}
export default List