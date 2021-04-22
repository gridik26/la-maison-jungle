import { useState } from 'react'
import '../styles/footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    function checkEmail() {
        if (!inputValue.includes('@')) {
            alert("ceci n'est pas une adresse mail valide")
        }
    }

    function handleInput(e) {
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue} onBlur={checkEmail} onChange={handleInput} />
		</footer>
	)

    
    
}

export default Footer




