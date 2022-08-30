import React from "react"
import { Route, Routes } from 'react-router-dom'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
  return (
    <Routes>
        <Route exact path="/" element={CategoryList } />
        <Route exact path="/categories" element={CategoryList} />
        <Route exact path="/login" element={Login} />
        <Route exact path="/register" element={Register} />

    </Routes>
  )
}
