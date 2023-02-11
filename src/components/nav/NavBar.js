import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
        <div className="navbar__background" >
            <picture className="navbar__img" >
            <img className="nav__logo" src={'/WELogo.png'} alt="SnapSpot Logo" /> 
            </picture> 
        </div>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <div className="buffer"></div>
            <li className="navbar__item">
                <Link className="navbar__link" to="/photos"> Prompts</Link>
            </li>
            <div className="buffer"></div>
            <li className="navbar__item">
                <Link className="navbar__link" to="/roads"> Writing Space</Link>
            </li>
            <div className="buffer"></div>

            <li className="navbar__item">
            {
                (localStorage.getItem("lu_token") !== null) ?

                <div className="navbar__logout">
                        <div className="nav-item">
                          <span className="navbar-link nav-item navbar__span" onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}>Logout </span> 
                        </div>
                      </div>

                        :
                     <>
                     <li className="nav-item">
                         <Link className="nav-link" to="/login">Login</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/register">Register</Link>
                     </li>
                 </>
         } 
                         </li>       
        </ul>
    )
}