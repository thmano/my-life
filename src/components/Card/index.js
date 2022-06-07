import Image from "../Image"
import './style.css'


const Card = ({src_image, title_text}) => {

    return(
        <div className="body">
            <Image 
            src_image={src_image} 
            alt={'Logo'} 
         
            height={'120px'} ></Image>
            <h4>{title_text}</h4>
        </div>
    )
} 
export default Card