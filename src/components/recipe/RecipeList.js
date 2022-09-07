import React,  { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
import { deleteRecipe, getRecipes } from "./RecipeManager.js";
// import { useNavigate } from "react-router-dom";
import { VscTrash} from "react-icons/vsc";
import "../styles/recipe.css"
import { IngredientList } from "./IngredientList.js";

// export const RecipeList = () => {

//     return (
//         <>
//        <h1>recipe page only for logged in user</h1>
//         </>
//     )
// }

export const RecipeList = () => {
    const [ recipes, setRecipes] = useState([])
    // const navigate= useNavigate();
    useEffect(() => {
        getRecipes().then(data => setRecipes(data))
    }, [])

    const handleMethod= (method,id) => {
        if (method === 'delete') {
          console.log("delete")
          deleteRecipe(id)
          .then(() => getRecipes().then(setRecipes));
        }
      };

    return (
        <>
           <article className="recipes">
            <h1>hi</h1>

                {
                    recipes.map((recipe)=> {
                        return(
                         <section key={`recipe--${recipe.id}`} className="card">
                            <div className="recipe_title">{recipe.id}</div>
                            <div className="recipe_title">{recipe.title}</div>
                            <div className="recipe_date">{recipe.publication_date}</div>
                            {recipe.element.map((data) => {
                                    return(
                                        <IngredientList
                                        key={data.id}
                                        ingredient={data.ingredient}
                                        quantity={data.quantity}
                                        unit={data.unit}
                                        />)
                            })
                            }
                            <VscTrash onClick={() => handleMethod('delete',recipe.id)}/>
                        </section>
                    )})
                }
            </article>

        </>
    )
}
