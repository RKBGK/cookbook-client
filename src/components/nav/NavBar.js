import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import Logo from "./cookbook.jpeg"

export const NavBar = ({ token, setToken, setUser}) => {
  
  const navigate = useNavigate();
  const navbar = useRef()
  const hamburger = useRef()

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} height="3rem"  alt="cookbook"/> <h1 className="title is-4">Cookbook</h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} href={hamburger} >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>


      <div className="navbar-menu" ref={navbar}>
      <div className="navbar-start">
          
                <Link to="/" className="navbar-item">Home</Link>
                {/* <Link to="/recipes" className="navbar-item">Recipes </Link>    
                <Link to="/subscriptions" className="navbar-item">Subscriptions </Link>   */}
                {/* <Link to="/categories" className="navbar-item">Categories</Link>   */}
        
          {
            token
              ?
              <> 
                <Link to="/recipes" className="navbar-item">Recipes </Link>    
              </> 
              :
              ""
          }
          
          {
            token
              ?
              <> 
                <Link to="/recipeingredient" className="navbar-item">RecipesIngredient</Link>    
              </> 
              :
              ""
          }
          {
            token
              ?
              <> 
                <Link to="/ingredients" className="navbar-item">Ingredients </Link>    
              </> 
              :
              ""
          }
          {
            token
              ?
              <> 
                <Link to="/recipenew" className="navbar-item">Add New Recipes </Link>    
              </> 
              :
              ""
          }
          {
            token
              ?
              <> 
                <Link to="/subscriptions" className="navbar-item">Subscriptions </Link>  
              </> 
              :
              ""
          }

          {
            token
              ?
              <> 
                <Link to="/categories" className="navbar-item">Categories</Link>   
              </> 
              :
              ""
          }


</div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                token
                  ?
                  <button className="button is-outlined" onClick={() => {
                    setToken('')
                    setUser('')

                    navigate('/login')
                  }}>Logout</button>
                  :
                  <>
                  
                    <Link to="/register" className="button is-link">Register</Link>
                    <Link to="/login" className="button is-outlined">Login</Link>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}





// import React, { useRef } from "react"
// import { Link, useNavigate} from "react-router-dom"
// import "./NavBar.css"
// import Logo from "./cookbook.jpeg"

// export const NavBar = ({ token, setToken }) => {
//   const navigate = useNavigate();
//   const navbar = useRef()
//   const hamburger = useRef()

//   const showMobileNavbar = () => {
//     hamburger.current.classList.toggle('is-active')
//     navbar.current.classList.toggle('is-active')
//   }

//   return (
//     <nav className="navbar is-success mb-3" role="navigation" aria-label="main navigation">
//       <div className="navbar-brand">
//         <a className="navbar-item" href="/">
//           <img src={Logo} height="3rem"  alt="Cookbook"/> <h1 className="title is-4">Cookbook</h1>
//         </a>

//         <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//           <span aria-hidden="true"></span>
//         </a>
//       </div>

//       <div className="navbar-menu" ref={navbar}>
//         <div className="navbar-start">
//           {
      
//                 <Link to="/categories" className="navbar-item">Categories</Link>
//           }
//         </div>

//         <div className="navbar-end">
//           <div className="navbar-item">
//             <div className="buttons">
//               {
//                 token
//                   ?
//                   <button className="button is-outlined" onClick={() => {
//                     setToken('')
//                     navigate('/login')
//                   }}>Logout</button>
//                   :
//                   <>
//                     <Link to="/register" className="button is-link">Register</Link>
//                     <Link to="/login" className="button is-outlined">Login</Link>
//                   </>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }
