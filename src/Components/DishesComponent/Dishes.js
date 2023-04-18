import dataDishes from "../../data/dataDishes";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice"; 
import Dish from "./Dish";

const Dishes = ()=> {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
        {dataDishes
        .filter(dish => {
            if( selectedCategory === "ALL"){
                return dish
            }
            return selectedCategory === dish.category
        })
        .map((dish => {
        return (
            <Dish dish={dish}
            key = {dish.id}/>
        ) 
        } ))}
        </div>

)
}
export default Dishes;