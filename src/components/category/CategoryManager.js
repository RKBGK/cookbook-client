const remoteURL = "http://localhost:8000"

export const getCategories = () => {
    return fetch(`${remoteURL}/categories`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response => response.json())
}