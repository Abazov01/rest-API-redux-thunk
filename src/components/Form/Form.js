import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCocktails, getAllGiphy, getUsersByCount, searchCocktail, searchGiphyByName } from "./../../actions/index";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    if(props.cocktail){
      dispatch(getAllCocktails());
    }else if(props.giphy){
      dispatch(getAllGiphy())
    }else {
      dispatch(getUsersByCount('8'))
    }
  }, []);
  
  
  const onClick = (e) => {
    e.preventDefault();
    if (props.cocktail === true) {
      if (value === ''){
        dispatch(getAllCocktails())
      }else{
        dispatch(searchCocktail(value))
      }
      navigate("/cocktail");
    }else if(props.giphy){
      if (value === ''){
        dispatch(getAllGiphy())
      }else{
        dispatch(searchGiphyByName(value))
      }
    }else if(props.user){
      if (value === ''){
        dispatch(getUsersByCount('8'))
      }else{
        dispatch(getUsersByCount(value))
      }
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="form">
      <div className="container">
        <form className="form__wrapper" action="">
          <input
            className="form__input"
            onChange={(e) => onChange(e)}
            type="text"
          />
          <button className="form__button" onClick={(e) => onClick(e)}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
