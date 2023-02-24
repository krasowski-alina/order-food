import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";

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