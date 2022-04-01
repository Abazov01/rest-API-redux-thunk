import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Giphy from "./pages/Giphy";
import RandomUser from "./pages/RandomUser";
import YouTube from "./pages/YouTube";
import Cocktail from "./pages/Cocktail";
import Videos from "./components/YouTube/Videos";
import DetailsVid from "./components/YouTube/DetailsVid";
import Output from "./components/Output/Output";
import Detail from './components/Detail/Detail';
import Details from "./components/YouTube/DetailsVid";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/all-rest-API-redux-thunk/" element={<Home />} />
        <Route path="/all-rest-API-redux-thunk/giphy" element={<Giphy />} />
        <Route path="/all-rest-API-redux-thunk/randomuser/" element={<RandomUser />}>
          <Route index element={<Output user/>}/>
          <Route path="detail/:id" element={<Detail user />} />
        </Route>
        <Route path="/all-rest-API-redux-thunk/youtube/" element={<YouTube />}>
          <Route index element={<Videos/>}/>
          <Route path="detail/:id" element={<DetailsVid />} />
        </Route>
        <Route path="/all-rest-API-redux-thunk/cocktail/" element={<Cocktail />}>
          <Route index element={<Output cocktail/>}/>
          <Route path="detail/:id" element={<Detail cocktail />} />
        </Route>
      </Routes>
    </div>
  );
}
