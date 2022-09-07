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
     
                    recipes.map(({recipe , detailList }, i)=> {
                        return <section key={`recipe--${recipe.id}`} className="card">
                            <div className="recipe_title">{recipe.id}</div>
                            <div className="recipe_title">{recipe.title}</div>
                            <div className="recipe_date">{recipe.publication_date}</div>
                        
                            detailList.length &&
                            detailList.map((data, j) => (
                                <li key={i} span={12} spanSm={12} spanMd={6} spanLg={6}>
                                    <IngredientList
                                    key={data.id}
                                    ingredient={data.ingredient}
                                    quantity={data.quantity}
                                    measure={data.measure}
                                    />
                                </li>
    ))


                 
                            <VscTrash onClick={() => handleMethod('delete',recipe.id)}/>
         


                        </section>
                    })
                }
            </article>

        </>
    )
}
