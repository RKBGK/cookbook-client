const remoteURL = "http://localhost:8000"

export const getIngredients = () => {
    return fetch(`${remoteURL}/ingredients`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const getIngredientById = (id) => {
    return fetch(`${remoteURL}/ingredients/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}

export const deleteIngredient = (id) => {
    console.log(id)
    return fetch(`${remoteURL}/ingredients/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
     })
        .then(getIngredients)
        
}

export const createIngredient = (newIngredients) => {
    return fetch("http://localhost:8000/ingredients", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIngredients)
     })
        .then(getIngredients)
}

export const updateIngredient = (Ingredients) => {
    console.log("updateIngredients",Ingredients)
    return fetch(`${remoteURL}/ingredients/${Ingredients.id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Ingredients)
     })
        .then(getIngredients)
}