import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../category/CategoryManager";
import { createNewRecipe, getRecipeById, updateRecipe } from "./RecipeManager";
// import { getCategory } from "./category/CategoryManager";





export const RecipeForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [checkedCategories, setCheckedCategories] = useState([])
    const { id } = useParams()
    const editMode = id ? true : false

    var today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    today = `${yyyy}-${mm}-${dd}`;
    //     user : localStorage.getItem("lu_token"),

    const [currentRecipe, setCurrentRecipe] = useState({
        
        title: "",
        publication_date: today,
        image_url: "",
        description: "",
        video_url: "",
        recipe: "",
        cookingtime: "",
        category: [],
        
    })


    useEffect(() => {
        getCategories().then(setCategories)
        console.log(categories)
        if (editMode) {
            let isMounted = true;
            getRecipeById(id).then((res) => {

                if (isMounted) {
                    setCurrentRecipe({

                        title: res.title,
                        publication_date: res.publication_date,
                        image_url: res.image_url,
                        description: res.description,
                        video_url: res.video_url,
                        recipe: res.recipe,
                        cookingtime: res.cookingtime,
                        category:res.category
                    })
                    const recipeCategories = res.category.map(categoryObj => parseInt(categoryObj.id))
                    setCheckedCategories(recipeCategories)
                    console.log('currentRecipe',currentRecipe)
                }                
            })        
        }
        
    }, [])

    useEffect(() => {
        const changedRecipe = { ...currentRecipe }
        changedRecipe.category = checkedCategories
        setCurrentRecipe(changedRecipe )
    }, [checkedCategories])

    const changeRecipeState = (e) => {
        const newRecipe = { ...currentRecipe}
        if (e.target.name.includes("category")) {
            const currentCategories = [...checkedCategories]
            if (e.target.checked) {
                currentCategories.push(parseInt(e.target.value))
            } else {
                const index = currentCategories.indexOf(parseInt(e.target.value))
                currentCategories.splice(index, 1)
            }

            setCheckedCategories(currentCategories)
        }

        let selectedVal = e.target.value
        if (e.target.name.includes("Id")){
            selectedVal = parseInt(selectedVal)
        }
        newRecipe[e.target.name] = selectedVal
        setCurrentRecipe(newRecipe)
    }

    return(
        <form className="recipeForm">
            <h2 className="recipeForm_title">Add a new Recipe</h2>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        defaultValue={currentRecipe.title}
                        onChange={changeRecipeState}
                        />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select value={currentPost.category} name="category" onChange={changePostState} className="form-control">
                        <option value="0">Select a Category</option>
                        {categories.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.label}
                            </option>
                        ))}
                    </select>
                </div> */}
                <div className="form-group">
                    <label htmlFor="image_url">Image URL:</label>
                    <input type="text" name="image_url" required autoFocus className="form-control"
                        defaultValue={currentRecipe.image_url}
                        onChange={changeRecipeState}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="video_url">Image URL:</label>
                    <input type="text" name="video_url" required autoFocus className="form-control"
                        defaultValue={currentRecipe.video_url}
                        onChange={changeRecipeState}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        defaultValue={currentRecipe.description}
                        onChange={changeRecipeState}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="recipe">Recipe:</label>
                    <input type="text" name="recipe" required autoFocus className="form-control"
                        defaultValue={currentRecipe.Recipe}
                        onChange={changeRecipeState}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="cookingtime">cooktime:</label>
                    <input type="text" name="cookingtime" required autoFocus className="form-control"
                        defaultValue={currentRecipe.cookingtime}
                        onChange={changeRecipeState}
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <h3> categories:</h3>
                    {
                        categories.map(c => {
                            return <div key={c.id} className="categoryCheckbox">
                                <input type="checkbox"
                                    name={`category ${c.id}`}
                                    value={c.id}
                                    checked={checkedCategories.includes(c.id)}
                                    onChange={changeRecipeState}
                                ></input>
                                <label htmlFor={c.id}> {c.label}</label>
                            </div>
                        })
                    }
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                   

                    const recipe = {
                        title: currentRecipe.title,
                        cookingtime: parseInt(currentRecipe.cookingtime),
                        image_url: currentRecipe.image_url,
                        video_url: currentRecipe.video_url,
                        description: currentRecipe.description,
                        recipe: currentRecipe.recipe,
                        publication_date: currentRecipe.publication_date,
                        category: [...checkedCategories]
                    }

                    {editMode ?
                        (updateRecipe({...recipe, id})
                        .then(() => navigate("/recipes"))):
                        (createNewRecipe(recipe)
                        .then(() => navigate("/recipes")))
                    }
                    
                }}
                className="btn btn-primary">{editMode ? "Update" : "Add a new recipe"}</button>
        </form>
    )
}

