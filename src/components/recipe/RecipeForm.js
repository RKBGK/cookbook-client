import React, { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../category/CategoryManager";
import { getIngredients } from "../ingredients/IngredientManager";
import { createNewRecipe, getMeasures, getRecipeById, updateRecipe } from "./RecipeManager";
// import { getCategory } from "./category/CategoryManager";



export const RecipeForm = () => {
    const navigate = useNavigate()
    const [ingredients, setIngredients] = useState([]);
    const [measures, setMeasures] = useState([]);
    const [categories, setCategories] = useState([])
    const [checkedCategories, setCheckedCategories] = useState([])
    const { id } = useParams()
    const editMode = id ? true : false
    const [recipeIngredients, setRecipeIngredients] = useState([])


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
        directions: "",
        cookingtime: "",
        categories: [],
        element:[]
        
    })


    useEffect(() => {
        getCategories().then(setCategories)
        getIngredients().then(setIngredients)
        getMeasures().then(setMeasures)
      
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
                        directions: res.directions,
                        cookingtime: res.cookingtime,
                        categories:res.categories,
                        element:res.element
                    })
                    const recipeCategories = res.categories.map(categoryObj => parseInt(categoryObj.id))
                    setCheckedCategories(recipeCategories)
                    // const recipeingredientlist = res.element.map(({ingredient,quantity,unit})=>{
                    //     return[ingredient,quantity,unit]
                    // })
                    setRecipeIngredients(res.element)
                    
                    
                }                
            })        
        }
        
    }, [])

    useEffect(() => {
        const changedRecipe = { ...currentRecipe }
        changedRecipe.categories = checkedCategories
        setCurrentRecipe(changedRecipe )
    }, [checkedCategories])

    const handleIngredientFormChange = (event, index) => {
        let data = [...recipeIngredients];
        data[index][event.target.name] = event.target.value;
        setRecipeIngredients(data);
    }
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

    const addExistingIngredient = (event) => {
        event.preventDefault()
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
                    <label htmlFor="directions">Directions:</label>
                    <textarea type="text" rows="7" name="directions" required autoFocus className="form-control"
                        defaultValue={currentRecipe.directions}
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
                <div className="form-group form-cat">
                    <h6> Categories:</h6>
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
            <div >
            {/* <form> */}
         <table>
            <thead>
                <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Unit</th>
                </tr>
            </thead>
                <tbody>
                  {recipeIngredients.map((recipeIngredient, index) => {
                    console.log('single ingredient',recipeIngredient.ingredient, index)
                    // value={Object.values(recipeIngredient.ingredient)[index]}
                    return (
                        <tr>
                        <div className="col recipe-ingredient-form d-inline-block" key={index} wrap="wrap" >
                            <td><select name="ingredient" required autoFocus className="d-inline-block"
                                value={recipeIngredient.ingredient}
                                onChange={event => handleIngredientFormChange(event, index)}>
                                <option value="0">Select Ingredient</option>
                                {
                                    ingredients.map((ingredient) => (
                                        <option key={ingredient.id} value={ingredient.id}>
                                            {ingredient.label}
                                        </option>
                                    ))
                                }
                            </select></td>
                            <td><input
                                name='quantity'
                                placeholder='Quantity'
                                onChange={event => handleIngredientFormChange(event, index)}
                                value = {recipeIngredient.quantity}
                            /></td>
                            <td><select name="measure" required autoFocus className="d-inline-block"
                                value={recipeIngredient.measure}
                                onChange={event => handleIngredientFormChange(event, index)}>
                                <option value="0">Select unit</option>
                                {
                                    measures.map((unit) => (
                                        <option key={unit.id} value={unit.id}>
                                            {unit.unit}
                                        </option>
                                    ))
                                }
                            </select></td>
                            <td>
                            <button onClick={() => removeExistingIngredient(index)}>Remove</button></td>
                        </div></tr>
                    )
                    
                })}</tbody></table>
            {/* </form> */}
            <div className="form-btns">
                <button onClick={addExistingIngredient}  >Add Ingredient</button>
                {/* <button onClick={addNewIngredient}>Create Ingredient</button> */}
            </div>
            
        </div>
            

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                   

                    const recipe = {
                        title: currentRecipe.title,
                        cookingtime: parseInt(currentRecipe.cookingtime),
                        image_url: currentRecipe.image_url,
                        video_url: currentRecipe.video_url,
                        description: currentRecipe.description,
                        directions: currentRecipe.directions,
                        publication_date: currentRecipe.publication_date,
                        categories: [...checkedCategories],
                        element:[...recipeIngredients]
                        
                        
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

