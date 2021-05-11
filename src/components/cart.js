import '../styles/cart.css';
import { useState, useEffect } from 'react';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	
	
	/*Alert à chaque mise à jour du panier*/ 
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total]);

	// TODO à modifier en utilisant le localStorage
	function removeOneItem(name, price, amount) {
		const ItemToRemove = cart.find((plant) => plant.name === name)
		if (ItemToRemove) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: ItemToRemove.amount -1 }
			])
		} 
	}

	function suppressItemCart(name) {

	}


	return isOpen ? (
		<div className='lmj-cart'>
			<button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								<button onClick={() => removeOneItem(name, price, amount)}> - </button>
								<button onClick={() => suppressItemCart(name)}> x </button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart