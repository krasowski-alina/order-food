
const Dish = ({dish}) => {
    return (
        <div>
            <h1>{dish.name}</h1>
            <img src={`${dish.img}.jpg`} alt="dish" className="foodImages"/>
            <h2>${dish.price}</h2>
            <button>How many portions?</button>
            <button>Add to cart</button>
        </div>
    )
}
export default Dish;