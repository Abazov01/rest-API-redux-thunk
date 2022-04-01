import React, { useEffect, useState } from "react";
import burger from "../../images/burger.png";
import logo from "../../images/logo.png";
import search from "../../images/search.png";
import audio from "../../images/audio.png";
import video from "../../images/video.jpg";
import apps from "../../images/apps.jpg";
import kol from "../../images/kol.png";
import account from "../../images/account.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {getAllVido, searchVideo } from './../../actions/index';
import { useDispatch } from "react-redux";

export default function HeadVid() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const oper = e => {
    e.preventDefault()
    dispatch(searchVideo(value))
    navigate('/youtube/')
  }
  

  return (
    <div>
      <header>
        <div className="header__start">
          <img className="header__burger" src={burger} alt="img" />

          <a className="header_vid__logo" href="https://www.youtube.com/">
            <img className="vid__logo" src={logo} alt="img" />
          </a>
        </div>
        <div className="header__center">
          <input
            onChange={e=>setValue(e.target.value)}
            className="header__input"
            type="text"
            placeholder="  Введите запрос"
          />
          
            <button onClick={(e)=>oper(e)} className="header__button" type="submit">
              <img src={search} />
            </button>
          
          <img src={audio} alt="img" className="header__mic" />
        </div>
        <div className="header__end">
          <img src={video} alt="img" />
          <img src={apps} alt="img" />
          <img src={kol} alt="img" />
          <img src={account} alt="img" />
        </div>
      </header>
    </div>
  );
}
