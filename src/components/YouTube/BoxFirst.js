import React from "react";
import home1 from "../../images/home1.png";
import nav from "../../images/nav.png";
import podpis from "../../images/podpis.png";
import lib from "../../images/video.png";
import { useParams } from "react-router-dom";
// params.id ? "box__firstt" : "box__first"
export default function BoxFirst() {
  const params = useParams();
  return (
    <div className='box__first'>
      <div className={params.id ? 'none' : 'box-first__wrapper'}>
        <img src={home1} alt="img" />
        <p className="box-first__text">Главная</p>
        <br />
        <img src={nav} alt="img" />
        <p className="box-first__text">Навигатор</p>
        <br />
        <img src={podpis} alt="img" />
        <p className="box-first__text">Подписки</p>
        <br />
        <img src={lib} alt="img" />
        <p className="box-first__text">Библиотека</p>
        <br />
      </div>
    </div>
  );
}
