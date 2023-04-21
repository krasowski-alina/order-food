import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import removeItemFromCart from "../../redux/cartSlice"

const CartItem = ({item})=> {
console.log(item)
    const dishes = dataDishes.find(dish =>  dish.id === item.dishId)
    const dispatch = useDispatch()

    return(
        <div>
            <span>{item.quantity} {item.quantity > 1? "portions" : "portion"}</span>
            <span> of {dishes.name}</span>
            <span> ${dishes.price * item.quantity}</span>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: item.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="delete button"/>
            </span>
        </div>

)
}
export default CartItem;