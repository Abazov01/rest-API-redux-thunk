import React from "react";
import "./Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchCocktailsById } from "../../actions/index";

export default function Detail(props) {
  const dispatch = useDispatch();
  let s = useSelector((r) => r.cocktailsReducer.cockDet);
  const params = useParams();
  useEffect(() => {
    dispatch(searchCocktailsById(params.id));
  }, []);

  const details = Object.assign({}, s);
  const userDet = useSelector(r => r.userReducer.usersDet)
  console.log(userDet);
  
  return (
    <div className="detail detail__cock"> 
    <h1 style={{margin:'0 auto', textAlign:'center'}}>{props.cocktail ? "Cocktail" : props.giphy ? 'Giphy': props.weather ? 'Weather': props.user ? 'User':null}</h1>
      {props.cocktail ?
      details && (
        <div className="container detail__row">
          <img className="detail__img" src={details[0]?.strDrinkThumb} alt="" />
          <div className="detail__description">
            <h1 className="detail__title">{details[0]?.strDrink}</h1>
            <p>
              <span className="high">Alcoholic:</span>{" "}
              {details[0]?.strAlcoholic}
            </p>
            <h3 style={{ textAlign: "center" }}>Ingredients:</h3>
            <ul>
              {details[0]?.strIngredient1 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient1 +
                    " --- " +
                    details[0]?.strMeasure1}
                </li>
              ) : null}
              {details[0]?.strIngredient2 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient2 +
                    " --- " +
                    details[0]?.strMeasure2}
                </li>
              ) : null}
              {details[0]?.strIngredient3 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient3 +
                    " --- " +
                    details[0]?.strMeasure3}
                </li>
              ) : null}
              {details[0]?.strIngredient4 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient4 +
                    " --- " +
                    details[0]?.strMeasure4}
                </li>
              ) : null}
              {details[0]?.strIngredient5 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient5 +
                    " --- " +
                    details[0]?.strMeasure5}
                </li>
              ) : null}
              {details[0]?.strIngredient6 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient6 +
                    " --- " +
                    details[0]?.strMeasure6}
                </li>
              ) : null}
              {details[0]?.strIngredient7 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient7 +
                    " --- " +
                    details[0]?.strMeasure7}
                </li>
              ) : null}
              {details[0]?.strIngredient8 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient8 +
                    " --- " +
                    details[0]?.strMeasure8}
                </li>
              ) : null}
              {details[0]?.strIngredient9 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient9 +
                    " --- " +
                    details[0]?.strMeasure9}
                </li>
              ) : null}
              {details[0]?.strIngredient10 !== null || '' ? (
                <li>
                  {details[0]?.strIngredient10 +
                    " --- " +
                    details[0]?.strMeasure10}
                </li>
              ) : null}

              
            </ul>
          </div>
        </div>
      ):props.user ? 
        userDet && (
          <div style={{textAlign:'center'}}>
            <h3>{userDet.name.title} {userDet.name.first} {userDet.name.last}</h3>
          <img style={{borderRadius:'100px', width:'30vw', height:'30vw'}} src={userDet.picture.large} alt="" />
          <p>{userDet.phone} - {userDet.nat}</p>
          <p>{userDet.email}</p>
          </div>          
        ):null
    }
    </div>
  );
}
