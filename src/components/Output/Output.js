import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Output.css";

export default function Output(props) {
  const cocktails = useSelector((s) => s.cocktailsReducer.coctails);
  const dispatch = useDispatch()
  console.log(props);
  const cocktail = props.cocktail;
  const giphy = useSelector(s => s.giphyRed)
  const users = useSelector(s => s.userReducer.users)
  useSelector(r => console.log(r))
  
  return (
    <div className="output">
      <h1 className="outpu__h">{cocktail ? "Cocktails" : props.giphy ? 'Giphy': props.weather ? 'Weather': props.user ? 'Users':null}</h1>
      <div className="container output__row">
        {cocktail ?
          cocktails &&
          cocktails.map((e, i) => {
            return (
              <NavLink key={i} className="col-3" to={'detail/' + e.idDrink}>
                <div >
                  <h2 className="output__title">{e.strDrink.slice(0, 15)}</h2>
                  <img className="output__img" src={e.strDrinkThumb} alt="" />
                </div>
              </NavLink>
            );
          }):
          props.giphy ? (
            Array.isArray(giphy) &&
            giphy.map((e,i)=>{
              return(
                <NavLink key={i} className='col-3' to='giphy'>
                  <iframe 
                  width='100%'
                  src={e.embed_url} 
                  >
                    {' '}
                  </iframe>
                </NavLink>
              )
            })
          ):
          props.user ? (
            Array.isArray(users) &&
            users.map((e,i)=>{
              return(
              <NavLink onClick={() => dispatch({type:"LIST_US_DET", payload:e})} key={i} className='col-3' to={'detail/' + e.name.last}>
                <h3>{e.name.title} {e.name.first} {e.name.last}</h3>
                <img className="output__img" src={e.picture.large} alt="" />
              </NavLink>
              )
            })
          ):null

}
      </div>
    </div>
  );
}
