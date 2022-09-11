import React from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from "."
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"
import { IngredientForm } from "./ingredients/IngredientForm"
import { IngredientList } from "./ingredients/IngredientList"
import { RecipeForm } from "./recipe/RecipeForm"
import { RecipeIngredientForm } from "./recipe/RecipeIngredientForm"
import { RecipeList } from "./recipe/RecipeList"
import { SubscriptionList } from "./subscriptions/SubscriptionsList"
// token={token} setToken={setToken} setUserId={setUserId}
export const ApplicationViews = ({ token,setToken, user ,setUser} ) => {
    const PrivateRoute = ({ children }) => {
        return token? children : <Navigate to="/login" />;
      }
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login setToken={setToken} setUser={setUser}/>} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/recipes" element={<RecipeList  />} />
            <Route exact path="/subscriptions" element={<SubscriptionList user={user} />} />
            <Route exact path="/categories" element={<CategoryList/> } />
            <Route exact path="/recipes/new" element={<RecipeForm/> } />
            <Route exact path="/recipes/:id" element={<RecipeForm/> } />
            <Route exact path="/ingredients" element={<IngredientList/> } />
            <Route exact path="/ingredientnew" element={<IngredientForm/> } />
            <Route exact path="/recipeingredient" element={<RecipeIngredientForm/> } />
            <Route exact path="/ingredientedit/:id" element={<IngredientForm/> } />

            {/* <Route element={<PrivateRoute token={token}/>}>

            </Route> */}
            {/* <Route exact path="/appcard" component={() => <AppCards user={user} />} /> */} 
            {/* <Route exact path="/categories" element={
                    <PrivateRoute>
                        <CategoryList/>
                    </PrivateRoute>
                    } />

        
           
            <Route exact path="/login" element={<Login setToken={setToken} setUserId={setUserId}/>} />
            <Route exact path="/register" element={<Register />} />
            {/* <Route exact path="/appcard" component={() => <AppCards user={user} />} /> */}

        </Routes>
    </>
  )
}