import React from "react";
import { useState } from "react";
import Videos from './Videos';
import Details from './DetailsVid';
import { Outlet } from "react-router-dom";

export default function BoxSec(props) {
  const [active, setActive] = useState("");
  return (
    <div className="box__second">
      <div className="list">
        <p
          className={active === "al" ? "activee" : "box-second__btns"}
          onClick={() => setActive("al")}
        >
          Все
        </p>
        <p
          className={active === "dj" ? "activee" : "box-second__btns"}
          onClick={() => setActive("dj")}
        >
          Джемы
        </p>
        <p
          className={active === "mu" ? "activee" : "box-second__btns"}
          onClick={() => setActive("mu")}
        >
          Музыка
        </p>
        <p
          className={active === "ff" ? "activee" : "box-second__btns"}
          onClick={() => setActive("ff")}
        >
          Мультфильмы
        </p>
        <p
          className={active === "re" ? "activee" : "box-second__btns"}
          onClick={() => setActive("re")}
        >
          Рэп
        </p>
        <p
          className={active === "au" ? "activee" : "box-second__btns"}
          onClick={() => setActive("au")}
        >
          Аудиокниги
        </p>
        <p
          className={active === "sk" ? "activee" : "box-second__btns"}
          onClick={() => setActive("sk")}
        >
          Скетч-шоу
        </p>
        <p
          className={active === "tu" ? "activee" : "box-second__btns"}
          onClick={() => setActive("tu")}
        >
          Туристические направления
        </p>
        <p
          className={active === "no" ? "activee" : "box-second__btns"}
          onClick={() => setActive("no")}
        >
          Сейчас в эфире
        </p>
        <p
          className={active === "fi" ? "activee" : "box-second__btns"}
          onClick={() => setActive("fi")}
        >
          Фитнес
        </p>
      </div>
      <Outlet/>
      
    </div>
  );
}
