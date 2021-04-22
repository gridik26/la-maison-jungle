import CareScale from './CareScale';
import '../styles/plantItem.css';

function PlantItem({ id, cover, name, water, light }){

return(
<div>
    <li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
	</li>
</div>
);


}


export default PlantItem