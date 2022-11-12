import "./Landing.Module.css";
import { useDispatch, useSelector } from "react-redux";
// import {}
import Product_card from "../Product_sections/Product_card"

const Mybasket = () => {
  
    const product_data = useSelector((store) => store.productdata.products);

    console.log(product_data ,"data");
    return (
        <>
            <h3 className="myb">My Smart Basket</h3>
            <div className="myb2">
                {product_data.map((item, id) => {
                    return (<Product_card item={item} id={id} />)})}
            </div>
        </>
    )
}

export default Mybasket;