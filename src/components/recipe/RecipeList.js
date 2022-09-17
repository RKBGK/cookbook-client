import React,  { useState, useEffect } from "react";
// import { useState, useEffect } from "react";
import { deleteRecipe, getRecipes } from "./RecipeManager.js";
import { Link } from "react-router-dom";
import { VscTrash, VscEdit} from "react-icons/vsc";
import "../styles/recipe.css"
// import { IngredientList } from "./IngredientList.js";

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
                            {/* <div className="recipe_id">{recipe.id}</div> */}
                            <div className="recipe_title">{recipe.title}</div>
                            {/* <div className="recipe_date">{recipe.publication_date}</div> */}
                            <div className="photoimg"> <img  src={recipe.image_url} alt="recipe"/></div>
                            {recipe.element.length ? (
                            <table className="intable table table-striped">
                                <thead>
                                    <tr key={`thead--${recipe.id}`}>
                                    <th>NO</th>
                                    <th>Ingredient</th>
                                    <th>Quantity</th>
                                    <th>Unit</th>
                                    </tr>
                                </thead>
                                <tbody>{recipe.element.map((data,index) => {
                                    return(
                                        <tr key={`ri--${index}`}>
                                        <td>{index}</td>
                                        <td>{data.ingredient.label}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.measure.unit}</td>
                                        </tr>
                                )})
                                     }
                            
                                </tbody>
                             </table>)
                             : null}
                            {recipe.categories.map((data) => {
                                    return(
                                        <h5>{data.label}</h5>
                            )})}
                            <div className="recipe_title">{recipe.directions}</div>
                            <VscTrash onClick={() => handleMethod('delete',recipe.id)}/>
                            <Link to={`/recipeedit/${recipe.id}`} ><VscEdit/ > </Link>
                        </section>
                    )})
                }
            </article>

        </>
    )
}
