const ChangeQuantity = ({quantity, setQuantity})=> {
    const addQuantity = () =>{ 
        setQuantity(prevQuantity => prevQuantity + 1)
    }
    const removeQuantity = () =>{
        if (quantity<=1) return quantity
        setQuantity(prevQuantity => prevQuantity - 1)
    }
    return(
        <div>
            <button onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button onClick={removeQuantity}>-</button>
        </div>

)
}
export default ChangeQuantity;