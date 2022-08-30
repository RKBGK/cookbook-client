
import React, { useState,useEffect } from "react"
import { ApplicationViews } from "./ApplicationViews"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

import Navigation from "./nav/Navigation"


export const Cookbook = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState(localStorage.getItem('user'))

    useEffect(() => {
        setToken()
        setUser()
    },[])
    // useEffect(() => {setUser()},[])
    console.log(token)
    console.log(user)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Navigation token={token} user={user} />
      <ApplicationViews />

      {/* <Login token={token} setToken={setToken} setUser={setUser} />
      <Register token={token} setToken={setToken}/> */}
    </div>
  );
}
