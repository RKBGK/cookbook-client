import React from "react";

import "../styles/recipe.css"

// export const RecipeList = () => {

//     return (
//         <>
//        <h1>recipe page only for logged in user</h1>
//         </>
//     )
// }

export const IngredientList = ( {key, ingredient, quantity, measure} ) => {

    return (
        <>
           <article className="recipes">
            <h1>hi</h1>

                <section key={`ingredient-${key}`} className="card">
                            <div className="recipe_title">{key}</div>
                            <div className="recipe_title">{ingredient}</div>
                            <div className="recipe_date">{quantity}</div>
                            <div className="recipe_date">{measure}</div>
                 
                        
         


                        </section>
            </article>

        </>
    )
}
