import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { createIngredient,  getIngredientById, updateIngredient } from "./IngredientManager"
const initialState = {
    label:""}
export const IngredientForm = () => {
    const [currentIngredient, setCurrentIngredient] = useState(initialState)
    const navigate= useNavigate()
    const { id } = useParams()
    const editMode = id ? true : false

    useEffect(() => {
        if (editMode) {      
            let isMounted = true;
            getIngredientById(id).then((res) => {
              if (isMounted)  {
                setCurrentIngredient(
                    {
                        label: res.label
                    }
                )

                console.log(res)
              }
            })
        }        
    }, [])

    const changeIngredientState = (Ingredient) => {
        const newIngredient = Object.assign({}, currentIngredient)
        newIngredient[Ingredient.target.name] = Ingredient.target.value
        setCurrentIngredient(newIngredient)
    }
    return (

        <form className="IngredientForm">
        <h2 className="IngredientForm__title">Register New Ingredient</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="label">Label: </label>
                <input type="text" name="label" required autoFocus className="form-control"
                    value={currentIngredient.label}
                    onChange={changeIngredientState}
                />
            </div>
        </fieldset>
        <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const Ingredient = {
                        label: currentIngredient.label                      
                    }

                    // Send POST request to your API
                    {editMode ?                         
                        (updateIngredient({...Ingredient,id})
                            .then(() => navigate("/ingredients"))) :
                        (createIngredient(Ingredient)
                            .then(() => navigate("/ingredients")))

                    }
                }}
                className="btn btn-primary">{editMode ? "Updates" : "Add a new Ingredient"}</button>
        </form>
    )
    }