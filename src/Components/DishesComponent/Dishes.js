import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
// const {id, price, img, name, category } = dish

const Dishes = ()=> {
    return(
        <div>
        {dataDishes.map((dish => {
        return (
            <Dish dish={dish}
            key = {dish.id}/>
        ) 
        } ))}
        </div>

)
}
export default Dishes;