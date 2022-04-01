import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVido } from './../../actions/index';
import { Link } from 'react-router-dom';

export default  function Videos() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllVido())
  },[])
  const  videos = useSelector(s => s.videos.videos)
  const boolean = Array.isArray(videos)

  console.log(videos);                //  object ????
  // console.log(boolean);                       //  true
  
  return (
    <div className="videos">
      <div className="row">
      { boolean && videos.map((e,i)=>{
        return (
          <div className='col-4' key={i}>
          <Link to={'detail/' + e.id.videoId}>
          <img className='videos__img' src={e.snippet.thumbnails.medium.url} alt=""/>
          <h3 className="videos__name">{e.snippet.title.slice(0,30)+ '...'}</h3>
          </Link>
        </div>
        )
      })}
      </div>
    </div>
  );

}
