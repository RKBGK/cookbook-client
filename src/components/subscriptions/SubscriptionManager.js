const remoteURL = "http://localhost:8000"

export const getSubscriptions = (id) => {
    console.log('user',id)
    return fetch(`${remoteURL}/chefs/${id}/chefSubscriptions`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
        .then(response=> response.json())

    
}

