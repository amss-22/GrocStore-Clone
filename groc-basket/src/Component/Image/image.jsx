import ReactImageMagnify from 'react-image-magnify';
import "./image.Module.css"
const Image = () => {
    
    return (
        <>
            <div style={{width:"450px",height:"500px"}}>
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
                    src: "https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
                    width: 300,
                   height:450,
    },
    largeImage: {
        src:"https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg",
        width: 800,
        height: 800
    }
}} />
            </div>
        </>
        )    
}

export default Image