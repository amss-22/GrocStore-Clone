import "./Landing.Module.css"
import { TbTruckDelivery } from 'react-icons/tb';
const Bestsell = () => {
    return (
        <>
            <h3 className="myb">Best Sellers</h3>
            <div className="myb2">
            <div className="box1">
                 <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg
             " alt="" /></div>
                
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

export default Bestsell;