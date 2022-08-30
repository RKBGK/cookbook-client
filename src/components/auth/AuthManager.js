export const loginUser = (user) => {
    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then(res => res.json())
    .then(res => {
    
            localStorage.setItem("lu_token", res.token)
            localStorage.setItem("user", res.user)
    })
  }
//         if ("valid" in res && res.valid && "token" in res) {
  export const registerUser = (newUser) => {
    return fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(res => {
            localStorage.setItem("lu_token", res.token)
            localStorage.setItem("user", res.user)
            console.log(res)

    })
  }
  
  