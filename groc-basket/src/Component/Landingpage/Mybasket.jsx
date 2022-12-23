import "./Landing.Module.css"
import { TbTruckDelivery } from 'react-icons/tb';
import './Mybasket.css';

const Mybasket = () => {
    return (
        <>
            <h3 className="myb">My Smart Basket</h3>
            <div className="myb2">
            <div className="box1">
                 <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg
             " alt="" /></div>
                
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Capsicum - Green (Loose)</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>  35</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg
             " alt="" /></div>
            
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Carrot - Orange (Loose)</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>17.25</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg
             " alt="" /></div>
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Coriander Leaves</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>7.50</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg
             " alt="" /></div>
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Cucumber (Loose)</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>19.50</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
             <div className="box1">
             <div className="boximg1"> <img src="https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg
             " alt="" /></div>
                 <p className="fresio">Fresho</p>
                 <h4 className="tender">Ladies' Fingers (Loose)</h4>
                 <h2 className="mrs"> <b>MRP:RS</b>21</h2>
                 <p className="stand"> <span><TbTruckDelivery/></span>Standard Delivery: Tomorrow <br /> 3:00PM - 7:30PM</p>
                 <button className="qty">QTY</button>
                 <button className="qtyone">1</button>
                 <button className="qtyadd">ADD</button>
             </div>
            </div>
        </>
    )
}

export default Mybasket;