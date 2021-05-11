import '../App.css';
import './Banner';
import Cart from './Cart';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css';
import { useState, useEffect} from 'react';

function App() {

  
  const [cart, updateCart] = useState([]);
  const cartString = JSON.stringify(cart);

  useEffect(() => {
    function handleFocusTab(){
      if(document.visibilityState === 'visible'){
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if(savedCart){
          updateCart(savedCart);
        }
      }
    }

    document.addEventListener('visibilitychange', handleFocusTab);
    const cartInitial = JSON.parse(localStorage.getItem('cart'));
    if(cartInitial){
        updateCart(cartInitial);
    } else {
      localStorage.setItem('cart', []);
    }
    return function(){
      document.removeEventListener('visibilitychange', handleFocusTab);
    };
  }, []);


  useEffect(() => {
		localStorage.setItem('cart', cartString);
	}, [cart]);


  return (
    <div>
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
