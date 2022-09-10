import React, { useState } from 'react';

function IngredientForm(props) {
const [ingredient, setIngredient ] = useState('');
const [quantity, setQuantity ]= useState('');
const [measure, setMeasure ]= useState('');

const changeIngredient = (event) => {
	setIngredient(event.target.value);
};

const changeQuantity = (event) => {
	setQuantity(event.target.value);
};

const changeMeasure = (event) => {
	setMeasure(event.target.value);
};
const transferValue = (event) => {
	event.preventDefault();
	const val = {
	ingredient,
	quantity,
    measure,
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setIngredient('');
	setQuantity('');
    setMeasure('');
};

return (
	<div>
	<label>Ingredient</label>
	<input type="text" value={ingredient} onChange={changeIngredient} />
	<label>Quantity</label>
	<input type="text" value={quantity} onChange={changeQuantity} />
    <label>Measure</label>
	<input type="text" value={measure} onChange={changeMeasure} />
	<button onClick={transferValue}> Click Me</button>
	</div>
);
}

export default IngredientForm;
