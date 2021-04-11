import '../styles/banner.css';
import leaf from '../assets/leaf.png';

function Banner() {

    const title = 'La maison jungle';

    return(
        <div className='lmj-banner'>
            <img src={leaf} alt='La maison jungle' className='lmj-logo'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    );
}

export default Banner