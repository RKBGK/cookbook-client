
import React, { useState } from "react"
import { Routes, Route, Navigate, Link} from 'react-router-dom';
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar";
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

// import Navigation from "./nav/Navigation"


export const Cookbook = () => {
    const [token, setTokenState] = useState(localStorage.getItem('token'))

    const setToken = (newToken) => {
        localStorage.setItem('token', newToken)
        setTokenState(newToken)
      }
    
      const setUserId = (userid) => {
        localStorage.setItem('user', userid)
        console.log(localStorage.getItem('userId'))
      }


  return (
    <>
        <Routes>
            <Route render={() => {
                if (localStorage.getItem("token")) {
                    return <>
                        <Route>
                            <NavBar  token={token} setTokenState={setTokenState} />

                        </Route>
                    </>
                } else {
                    return <Navigate to="/login" />
                }
            }} />

 
           

            {/* <NavBar token={token} user={user} setToken={setToken} setUserId={setUserId}/>
        <ApplicationViews token={token} user={user} setToken={setToken} setUserId={setUserId}/> */}
        </Routes>
        {/* <Login />
        <Register /> */}
         <NavBar token={token} setToken={setToken} />
         <ApplicationViews token={token} setToken={setToken} setUserId={setUserId}/>
         <Link className="nav-link" to="/login" >
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
    </>
  );
}
