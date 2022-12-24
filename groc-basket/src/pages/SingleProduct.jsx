import React from "react";
import "./Single.Module.css";
import { TbTruckDelivery } from 'react-icons/tb';
import { BsTruck } from 'react-icons/bs';
import ReactImageMagnify from 'react-image-magnify';
import { useSelector } from "react-redux";




const SingleProduct = () => {
    
  const obj = useSelector((state)=> state.SingleProductReducer.singleData)
  console.log("obj",obj)
    return (
        <>
            <div className="singlepage">
                <div className="single1">
                    <header className="scat1">Category</header>
                    <hr />
                <p><b>Fruits & Vegetables</b> </p>
                <p className="scatfresh">Fresh Vegetables</p>
                <p className="scatfresh">Beans, Brinjals & Okra</p>
                <p className="scatfresh">Cabbage & Cauliflower</p>
                <p className="scatfresh">Cucumber & Capsicum</p>
                <p className="scatfresh">Gourd, Pumpkin, Drumstick</p>
                <p className="scatfresh">Leafy Vegetables</p>
                <p className="scatfresh">Potato, Onion & Tomato</p>
                <p className="scatfresh">Root Vegetables</p>
                    <p className="scat1">Specialty</p>
                    <hr />
                    <header> <b>Brands</b> </header>
                <p className="scatfresh">Fruits & Vegetables</p>
                <p className="scatfresh">Fresho</p>
                <p className="scatfresh">Fresho Cucumber & Capsicum</p>
                </div>
                <div className="single2">
                    <div className="capcium">
                        <Image image={obj.img_src}/>
                    </div>
                    <div className="capciumdata">
                        <button className="freshbtn">{obj.brand}</button> <br />
                        <br />
                        <h1 className="fresho">{obj.product_info}</h1> <br />
                        <h2><b>Price:</b>{obj.price}</h2> <br />
                        <div className="addbskt">
                            <div className="one">1</div>
                            <div className="atb">ADD TO BASKET</div>
                            <div className="sve">SAVE</div>
                        </div> <br />
                        <p className="standard"> <span><BsTruck /></span>  &nbsp; Standard delivery within 1 day</p>
                        <br />
                        <br />
                        <p className="pack">Pack Sizes</p>
                        <button className="five">500GM</button> <br />
                        <button className="onekg">1kg</button>
                    </div>
                    <div>
                    </div>
                </div>
              
            </div>
            <h1 className="myb">Frequently Bought Together
            
            </h1>
            <div className="myb2">
            
                
                
             <div className="box1">
                 <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg" alt="" /></div>
                
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Tender Coconut Water - No <br /> Added Sugar, Flavours</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>  35</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg
             " alt="" /></div>
            
                 <p className="fresio">B B Royal</p>
                 <h4 className="tender">Sona Masoori Raw Rice/Akki</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>  1199</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/40191534_1-borges-extra-virgin-olive-oil.jpg
             " alt="" /></div>
                 <p className="fresio">BORGES</p>
                 <h4 className="tender">Original Extra Virgin Olive Oil</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>1566</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/40192104_9-fresho-frozen-green-peas.jpg
             " alt="" /></div>
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Frozen Green Peas</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>99</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg
             " alt="" /></div>
                 <p className="fresio">BB Royal</p>
                 <h4 className="tender">Cumin/Jeera/Jeerige - Whole</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>409</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
   </div>
            
        </>
    )
}

export default SingleProduct;

const Image = ({image}) => {
    console.log("Image", {image})
    
    return (
        <>
        
            <div style={{width:"450px",height:"500px"}}>
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:image,
                    width: 300,
                   height:450,
    },
    largeImage: {
        src:image,
        width: 800,
        height: 800
    }
}} />
            </div>
        </>
        )    
}