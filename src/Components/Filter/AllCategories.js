
import Filter from "./Filter";

const AllCategories = ()=> {
    const foodType = ['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL']
    return(
        <div>
            <h1>What kind of food do you like?</h1>
            {foodType.map(category => <Filter category={category}/>)}
        </div>

)
}
export default AllCategories;