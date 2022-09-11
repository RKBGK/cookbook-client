import React, { useState, useEffect } from "react";
import { getIngredients } from "../ingredients/IngredientManager";
import { getMeasures } from "./RecipeManager";

export const  RecipeIngredientForm = () => {
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);

    const [recipeIngredients, setRecipeIngredients] = useState([
        { ingredient: 0, quantity: 0, measure: 0 }
    ])

    useEffect(() => {
        getIngredients().then((ingredients) => {
            setIngredients(ingredients);
        })
        getMeasures().then((measures) => {
            setMeasures(measures);
        })
            console.log('measures',measures)
            console.log('ingredients',ingredients)

    }, []);

    const handleExistingFormChange = (event, index) => {
        let data = [...recipeIngredients];
        data[index][event.target.name] = event.target.value;
        setRecipeIngredients(data);
    }

    const addExistingIngredient = () => {
        let object = {
            ingredient: 0,
            quantity: 0,
            measure: 0
        }

        setRecipeIngredients([...recipeIngredients, object])
    }

    const removeExistingIngredient = (index) => {
        let data = [...recipeIngredients];
        data.splice(index, 1)
        setRecipeIngredients(data)
    }

    return (
        <>
        <div className="cocktail-ingredient-form">
            <form>
            <select name="ingredient" required autoFocus className="form-control"
                                >
                                <option value="0">Select Ingredient</option>
                                {
                                    measures.map((ingredient) => (
                                        <option key={ingredient.id} value={ingredient.id}>
                                            {ingredient.label}
                                        </option>
                                    ))
                                }
                            </select>
                {recipeIngredients.map((form, index) => {
                    return (
                        <div key={index}>
                            <select name="ingredient" required autoFocus className="form-control"
                                value={form.ingredient}
                                onChange={event => handleExistingFormChange(event, index)}>
                                <option value="0">Select Ingredient</option>
                                {
                                    ingredients.map((ingredient) => (
                                        <option key={ingredient.id} value={ingredient.id}>
                                            {ingredient.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <input
                                name='quantity'
                                placeholder='Quantity'
                                onChange={event => handleExistingFormChange(event, index)}
                                value = {form.amount}
                            />
                            <select name="measure" required autoFocus className="form-control"
                                value={form.measure}
                                onChange={event => handleExistingFormChange(event, index)}>
                                <option value="0">Select unit</option>
                                {
                                    measures.map((unit) => (
                                        <option key={unit.id} value={unit.id}>
                                            {unit.label}
                                        </option>
                                    ))
                                }
                            </select>
                            <button onClick={() => removeExistingIngredient(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <div className="form-btns">
                <button onClick={addExistingIngredient}>Add Ingredient</button>
                {/* <button onClick={addNewIngredient}>Create Ingredient</button> */}
            </div>
            
        </div>
        </>
    )
}