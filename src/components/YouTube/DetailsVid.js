import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getVideoById } from "../../actions";
import { useEffect } from "react";

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(params.id);
  const videos = useSelector((s) => s.videos.videos);
  // console.log(videos);
  const detail = useSelector((s) => s.detailVid);
  // console.log(detail);
  const boolean = Array.isArray(videos);
  useEffect(() => {
    dispatch(getVideoById(params.id));
  }, []);

  return (
    <div className="detail__vid">
      <div id="qwe" className="detail__left">
        <iframe 
          className="video__iframe"
          src={`https://www.youtube.com/embed/${params.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
          {" "}
        </iframe>
      </div>
      <div className="detail__right">
        <a href="#qwe">
        {boolean &&
          videos.map((e, i) => {
            if (params.id !== e.id.videoId) {
              return (
                <Link className="detail__link" key={i} to={"/all-rest-API-redux-thunk/youtube/detail/" + e.id.videoId}>
                    <div key={i} className="box-right__wrapper">
                      <div className="col-5">
                        <img
                          className="box-right__img"
                          src={e.snippet.thumbnails.default.url}
                          alt=""
                        />
                      </div>
                      <div className="col-7">
                        <h6 className="box-right__title">{e.snippet.title}</h6>
                        <p className="box-right__p">{e.snippet.publishTime}</p>
                      </div>
                    </div>
                </Link>
              );
            }})}
        </a>
          
      </div>
    </div>
  );
}
