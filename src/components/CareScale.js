function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]

    const dosage = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    function handleClick({dosage, careType}) {
        alert(`Cette plante a besoin de  ${dosage[scaleValue]} ${
            careType === 'light' ? 'de lumière' : "d'arrosage"}`)
    }

    return (
        <div onClick={() => handleClick({dosage, careType})}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale

