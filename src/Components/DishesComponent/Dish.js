import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{dish.name}</h1>
            <img src={`${dish.img}.jpg`} alt="dish" className="foodImages"/>
            <h2>${dish.price}</h2>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=>dispatch(addItemToCart({dish, quantity}))}>Add to cart</button>
        </div>
    )
}
export default Dish;