

const Image = ({src_image, alt, width, height}) => {
    return (
        <img src={src_image} alt={alt} style={{width:width, height:height }} />
    )
}
export default Image;