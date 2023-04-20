import dataDishes from "../../data/dataDishes";

const CartItem = ({item})=> {
console.log(item)
    const dishes = dataDishes.find(dish =>  dish.id === item.dishId)

    return(
        <div>
            <span>{item.quantity} {item.quantity > 1? "portions" : "portion"}</span>
            <span> of {dishes.name}</span>
            <span> ${dishes.price * item.quantity}</span>
        </div>

)
}
export default CartItem;