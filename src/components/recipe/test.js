import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { getIngredients } from "../fetch/IngredientsManager"
import { getPreparations, getIce, getGlass, createCocktail } from "../fetch/CocktailManager"
import "./Cocktail.css"
import { CocktailIngredients } from "./CocktailIngredientForm"


export const CocktailForm = () => {
    const history = useHistory()
    const [cocktailIngredients, setCocktailIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState([]);
    const [preparations, setPreparations] = useState([]);
    const [ice, setIce] = useState([]);
    const [glass, setGlass] = useState([]);

    const getCocktailIngredients = (data) => {
        setCocktailIngredients(data)
    };

    const getNewIngredients = (data) => {
        setNewIngredients(data)
    };

    const [currentCocktail, setCurrentCocktail] = useState({
        name: "",
        description: "",
        instructions: "",
        preparation: 0,
        glass: 0,
        ice: 0,
        img_url: ""
    })

    useEffect(() => {
        getPreparations().then((data) => setPreparations(data))
        getIngredients().then((data) => setIngredients(data))
        getIce().then((data) => setIce(data))
        getGlass().then((data) => setGlass(data))
    }, [])

    const changeCocktailState = (domEvent) => {
        let newCocktail = {...currentCocktail}
        let newValue = domEvent.target.value
        newCocktail[domEvent.target.name] = newValue
        setCurrentCocktail(newCocktail)
    }

    return (
        <form className="cocktail-form">
            <h2 className="cocktail-form-title">New Cocktail</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        value={currentCocktail.name}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentCocktail.description}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="preparation">Preparation:</label>
                    <select name="preparation" required autoFocus className="form-control"
                        value={currentCocktail.preparation}
                        onChange={changeCocktailState}>
                        <option value="0">Select Preparation</option>
                        {
                            preparations.map((preparation) => (
                                <option key={preparation.id} value={preparation.id}>
                                    {preparation.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="ice">Ice:</label>
                    <select name="ice" required autoFocus className="form-control"
                        value={currentCocktail.ice}
                        onChange={changeCocktailState}>
                        <option value="0">Select Ice</option>
                        {
                            ice.map((ice) => (
                                <option key={ice.id} value={ice.id}>
                                    {ice.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="glass">Glass:</label>
                    <select name="glass" required autoFocus className="form-control"
                        value={currentCocktail.glass}
                        onChange={changeCocktailState}>
                        <option value="0">Select Glass</option>
                        {
                            glass.map((glass) => (
                                <option key={glass.id} value={glass.id}>
                                    {glass.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="instructions">Instructions:</label>
                    <input type="text" name="instructions" required autoFocus className="form-control"
                        value={currentCocktail.instructions}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="img_url">Image URL:</label>
                    <input type="text" name="img_url" required autoFocus className="form-control"
                        value={currentCocktail.img_url}
                        onChange={changeCocktailState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {

                    evt.preventDefault()

                    newIngredients.map(ingredient => {
                        ingredient.name = ingredient.name
                        ingredient.type = parseInt(ingredient.type)
                        console.log(ingredient)
                    })

// ---------------------------------------------------------------------------------
                    cocktailIngredients.map((ingredient) => {
                        ingredient.ingredient = parseInt(ingredient.ingredient)
                        ingredient.amount = parseFloat(ingredient.amount)
                        ingredient.unit = parseInt(ingredient.unit)

                        console.log(ingredient)
                    })
// ---------------------------------------------------------------------------------
                    const cocktail = {
                        name: currentCocktail.name,
                        description: currentCocktail.description,
                        instructions: currentCocktail.instructions,
                        preparation: parseInt(currentCocktail.preparation),
                        glass: parseInt(currentCocktail.glass),
                        ice: parseInt(currentCocktail.ice),
                        img_url: currentCocktail.img_url
                    }

                    createCocktail(cocktail)     

                }}
                className="btn">Submit</button>
        </form>
    )
}