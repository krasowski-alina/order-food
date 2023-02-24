import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
            <p className = { selectedCategory === category ? 'categoryBtnSelected': 'categoryBtn'}>{category}</p>
        </div>
    )
}
export default Filter;