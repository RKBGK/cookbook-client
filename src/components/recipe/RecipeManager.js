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
    return fetch(`${remoteURL}/recipes${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("ltoken")}`
        }
     })
        .then(getRecipes)
        
}