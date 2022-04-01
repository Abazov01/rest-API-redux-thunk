import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  
  const [burger, setBurger] = useState()
  

  return (
    <div className="header">
      <div className="container header__row">
        <NavLink className={"header__a"} to="/">
          <img
            className="header__logo"
            src={`https://media.proglib.io/wp-uploads/2017/06/logo-redux.png`}
            alt=""
          />
        </NavLink>
        <ul className={burger ? "show-header__menu": 'header__menu'}>
          <li>
            <NavLink className={"header__a"} to="/all-rest-API-redux-thunk/youtube">
              YouTube
            </NavLink>
          </li>
          <li>
            <NavLink className={"header__a"} to="/all-rest-API-redux-thunk/cocktail">
              Cocktail
            </NavLink>
          </li>
          <li>
            <NavLink className={"header__a"} to="/all-rest-API-redux-thunk/giphy">
              Giphy
            </NavLink>
          </li>
          
          <li>
            <NavLink className={"header__a"} to="/all-rest-API-redux-thunk/randomuser">
              RandomUser
            </NavLink>
          </li>
          <li>
            <NavLink className={"header__a"} to="/all-rest-API-redux-thunk">
              <button className="header__btn">LogIn</button>
            </NavLink>
          </li>
        </ul>
        <div onClick={()=>setBurger(!burger)} className={burger ? 'show-mobile__btn':"mobile__btn"}>
          <span className="span"></span>
        </div>
      </div>
    </div>
  );
}
