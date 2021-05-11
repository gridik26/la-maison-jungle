import { plantList } from '../datas/plantList';
import '../styles/shoppingList.css';
import '../styles/plantItem.css';
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';



function ShoppingList({cart, updateCart}) {
    // const categories = plantList.reduce(
	// 	(acc, plant) =>
	// 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 	[]
	// )
    const [categorySelected, setCategory] = useState('')

    function addToCart(name, price) {
        const cartjson = localStorage.getItem('cart');
        const cartFromLocalStorage = JSON.parse(cartjson);
		const currentPlantSaved = cartFromLocalStorage.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cartFromLocalStorage.filter(
				(plant) => plant.name !== name
			)
			const newCart = [
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			];
            localStorage.setItem('cart', newCart);
            updateCart(newCart);
		} else {
			const newCart =[...cartFromLocalStorage, { name, price, amount: 1 }];
            localStorage.setItem('cart', newCart);
            updateCart(newCart);
		}
	}

	return(
        <div>
            {/* <ul>
                {categories.map((cat) => ( 
                <li key={cat}>{ cat } </li>))}
               
            </ul> */}
            <Categories categorySelected={categorySelected} setCategory={setCategory}/>
            <ul className='lmj-plant-list'> 
                {plantList.map((plant) => 
                !categorySelected || categorySelected === plant.category ?
                (
                    <div className='lmj-plant-item' key={plant.id}> 
                         <PlantItem 
                            id={plant.id}
                            cover={plant.cover}
                            name={plant.name}
                            water={plant.water}
                            light={plant.light}
                            price={plant.price}
                        />
                        <button onClick={() => addToCart(plant.name, plant.price)}>
                            Ajouter
                        </button>
                    </div>
                   
                    
                 ) : null)}

                
                
            </ul>
        </div>
    );
    
}

export default ShoppingList