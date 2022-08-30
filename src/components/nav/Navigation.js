import React from 'react';
import { Link } from 'react-router-dom';


export default function Navigation({token,user}) {
    console.log('token',token)
  return (
    <>
        <div>

            <Link to="/register" className="button is-link">Register</Link>
            <Link to="/login" className="button is-outlined">Login</Link>
            {user>0 ? (
                <Link to="/categories" className="navbar-item">Categories</Link>
            ) : (
            ''
            )}
            
        </div>


    </>

  );
}


