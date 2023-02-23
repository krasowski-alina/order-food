
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponent/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <Dishes/>
        <Cart/>
      </div>
      <div className='block'>
        <AllCategories/>
      </div>
    </div>
  );
}

export default App;
