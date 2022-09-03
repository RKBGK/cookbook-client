
import React, { useState } from "react"

import { Routes, Route, Navigate} from 'react-router-dom';
import { ApplicationViews } from "./ApplicationViews"

import { NavBar } from "./nav/NavBar";


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
// useEffect(() => {
//     setTokenState(localStorage.getItem("token"))
// },[])

  return (
    <>
        <Routes>
            <Route render={() => {
                if (token) {
                    return <>
                        <Route>

                            <NavBar token={token} setToken={setToken} />
                            <ApplicationViews token={token} setToken={setToken} setUserId={setUserId}/>

                        </Route>
                    </>
                } else {
                    return <Navigate to="/login" />


                }
            }} />


        </Routes>

         <NavBar token={token} setToken={setToken} />
         <ApplicationViews token={token} setToken={setToken} setUserId={setUserId}/>

    </>
  );
}
