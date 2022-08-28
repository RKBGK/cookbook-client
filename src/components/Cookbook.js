// import React, { useState } from "react"
// import { Route, Navigate , Routes} from "react-router-dom"
// import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

// export const Cookbook = () => {
//   const [token, setTokenState] = useState(localStorage.getItem('token'))

//   const setToken = (newToken) => {
//     localStorage.setItem('token', newToken)
//     setTokenState(newToken)
//   }

//   return (<>
//     {
//       token
//         ?
//         <>

//             <NavBar />
//             <ApplicationViews />

//         </>
//         :
//          <Navigate to="/login" />

         
//     }


//   </>)
// }


import React, { useState,useEffect } from "react"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"
import { NavBar } from "./nav/NavBar"


export const Cookbook = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(localStorage.getItem('user'))

    useEffect(() => {setToken()},[])
    useEffect(() => {setUser()},[])
    console.log(token)
    console.log(user)
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar token={token} setToken={setToken}  />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CategoryList />
      <Login token={token} setToken={setToken} setUser={setUser} />
      <Register token={token} setToken={setToken}/>
    </div>
  );
}
