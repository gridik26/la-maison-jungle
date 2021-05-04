import { plantList } from '../datas/plantList';
import { useState } from 'react';
import '../styles/Categories.css'

function Categories({setCategory, categorySelected}) {

    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


    return(
        <div className='lmj-categories'>
            <select  value={categorySelected} 
            onChange={(e) => setCategory(e.target.value)}
            className='lmj-categories-select'>
                <option></option>
                {categories.map((cat) => ( 
                <option key={cat} value={cat}>{ cat }</option>))}
            </select>

        </div>
       
    )
    

}

export default Categories