const remoteURL = "http://localhost:8000"

export const getRecipes = () => {
    return fetch(`${remoteURL}/recipes`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response=> response.json())
}

export const deleteRecipe = (id) => {
    console.log(id)
    return fetch(`${remoteURL}/recipes/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
     })
        .then(getRecipes)
        
}

export const createNewRecipe = (newRecipe) => {
    console.log("new recipe test",[newRecipe])
    return fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    }).then(response => response.json())
}

export const updateRecipe = (recipe) => {
    console.log("updaterecipe",{recipe})
    return fetch(`${remoteURL}/recipes/${recipe.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
     })
        .then(getRecipes)
}

export const getRecipeById = (id) => {
    return fetch(`${remoteURL}/recipes/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}