import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = ({ token,user} ) => {
    const PrivateRoute = ({ children }) => {
        return user? children : <Navigate to="/login" />;
      }
  return (
    <>
        <Routes>
            <Route exact path="/" element={<CategoryList  />} />
            <Route exact path="/categories" element={
                <PrivateRoute>
                    <CategoryList />
                </PrivateRoute>
                } />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            {/* <Route exact path="/appcard" component={() => <AppCards user={user} />} /> */}

        </Routes>
    </>
  )
}
