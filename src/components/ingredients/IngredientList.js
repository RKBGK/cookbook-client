import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteIngredient, getIngredients} from "./IngredientManager.js"

import { VscTrash, VscEdit } from "react-icons/vsc";
// import "../styles/Ingredient.css"

export const IngredientList = (props) => {
    const [ ingredients, setIngredients] = useState([])
    const navigate= useNavigate()

    useEffect(() => {
        getIngredients().then(data => setIngredients(data))
    }, [])
    const handleMethod= (method,id) => {
        if (method === 'delete') {
          console.log("delete")
          deleteIngredient(id)
          .then(() => getIngredients().then(setIngredients));
        }
        // if (method === 'edit') {
        //     console.log("edit")
        //     <Link to={`/editIngredient/${Ingredient.id}`}></Link>
        //   }
      };

    return (
        <div>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/ingredientnew" })
                }}
            >Register New Ingredient</button>
            <article className="card">
                {  
                    ingredients.map(ingredient => {
                        return <section key={`ingredient--${ingredient.id}`} className="card">
                            <div className="ingredient__title"> 
                            <VscTrash onClick={() => handleMethod('delete',ingredient.id)}/>
                            <Link to={`/ingredientedit/${ingredient.id}`} ><VscEdit/ > </Link>
                            {ingredient.label}</div>
                            {/* <Link to={`/editgame/${game.id}`} > Edit</Link>
                            <button type="button"  onClick={() => handleMethod('delete',game.id)} > Delete</button> */}
                        </section>
                    })
                }
            </article>
        </div>
    )
}