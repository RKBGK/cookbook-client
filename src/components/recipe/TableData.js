import React, { useState } from 'react';
import IngredientForm from './form';
import jsonData from './data.json';

function TableData() {
const [ingredientData, setIngredientData] = useState(jsonData);

const tableRows = ingredientData.map((info) => {
	return (
	<tr>
		<td>{info.id}</td>
		<td>{info.ingredient}</td>
		<td>{info.quantity}</td>
        <td>{info.measure}</td>
	</tr>
	);
});

const addRows = (data) => {
	const totalIngredients = ingredientData.length;
	data.id = totalIngredients + 1;
	const updatedIngredientData = [...ingredientData];
	updatedIngredientData.push(data);
	setIngredientData(updatedIngredientData);
};

return (
	<div>
	<table className="table table-stripped">
		<thead>
		<tr>
			<th>Sr.NO</th>
			<th>Ingredient</th>
			<th>Quantity</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<IngredientForm func={addRows} />
	</div>
);
}

export default TableData;
