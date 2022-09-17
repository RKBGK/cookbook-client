import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/navBar.css"
import Logo from "./recipe.jpeg"

export const NavBar = ({ token, setToken, setUser}) => {
  
  const navigate = useNavigate();
  const navbar = useRef()
 

  return (
    <nav className="navbar flex-md-nowrap" role="navigation" aria-label="main navigation">
      <div className="nav nav-pills nav-fill" ref={navbar}>

        <Link className="navbar-brand" to="/">
            <img
              className="nav__logo"
              src={Logo}
              alt="construction"
            />
        </Link>
        <Link to="/" className="nav-link">Home</Link>

        
        {
          token
            ?
            <> 
              <Link to="/recipes" className="nav-link">Recipes </Link>    
            </> 
            :
            ""
        }
        
        {/* {
          token
            ?
            <> 
              <Link to="/recipeingredient" className="navbar-item">RecipesIngredient</Link>    
            </> 
            :
            ""
        } */}
        {
          token
            ?
            <> 
              <Link to="/ingredients" className="nav-link">Ingredients </Link>    
            </> 
            :
            ""
        }
        {
          token
            ?
            <> 
              <Link to="/recipenew" className="nav-link">Add New Recipes </Link>    
            </> 
            :
            ""
        }
        {
          token
            ?
            <> 
              <Link to="/subscriptions" className="nav-link">Subscriptions </Link>  
            </> 
            :
            ""
        }

        {
          token
            ?
            <> 
              <Link to="/categories" className="nav-link">Categories</Link>   
            </> 
            :
            ""
        }


        {
          token
            ?
            <button className="button is-outlined" onClick={() => {
              setToken('')
              // setUser('')

              navigate('/login')
            }}>Logout</button>
            :
            <>
            
              <Link to="/register" className="button is-link">Register</Link>
              <Link to="/login" className="button is-outlined">Login</Link>
            </>
        }

      </div>
    </nav>
  )
}


