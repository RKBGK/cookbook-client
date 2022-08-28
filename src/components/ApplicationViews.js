import React from "react"
import { Route, Switch } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
  return (
    <Switch>
        <Route exact path="/" component={CategoryList } />
        <Route exact path="/categories" component={CategoryList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <h1 >Welcome to Cookbook</h1>
        <h1 >Find recipe</h1>
    </Switch>
  )
}
