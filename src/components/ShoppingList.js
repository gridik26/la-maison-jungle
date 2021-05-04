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
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
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
                    <div className='lmj-plant-item'> 
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