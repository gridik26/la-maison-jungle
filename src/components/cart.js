function Cart() {
    const prixMonestera = 8;
    const prixLierre = 10;
    const prixBouquet = 15;
    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monestera : { prixMonestera }€</li>
                <li>Lierre : {prixLierre}€</li>
                <li>Bouquet : {prixBouquet}€</li>
            </ul>
            <p>Total du panier { prixMonestera + prixLierre + prixBouquet }€ </p>
        </div>
        
    );
}

export default Cart