import '../App.css';
import './Banner';
import Cart from './Cart';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';

function App() {
  return (
    <div>
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart/>
        <ShoppingList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
