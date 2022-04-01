import React, { useState } from "react";
import BoxFirst from "./BoxFirst";
import BoxSec from "./BoxSec";
import HeadVid from "./HeadVid";

import "./Youtube.css";
import { Route, Routes } from "react-router-dom";
import Videos from "./Videos";
import Details from "./DetailsVid";

export default function Youtube() {
  return (
    <div className="container-vid">
      <HeadVid />
      <section className="box">
        <BoxFirst />
        <BoxSec />
        
      </section>
    </div>
  );
}
