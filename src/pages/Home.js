import React from "react";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "50px 0 0 0" }}>
          This is my portfolio project
        </h1>
        <h2 style={{ textAlign: "center", color:'brown', marginBottom: "30px"}}>In this project, I collected some of my work made on redux</h2>
        <p style={{width:'50%', margin: '0 auto', textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem earum molestias dolore maxime sequi, nostrum, porro facilis saepe consectetur at explicabo temporibus eligendi! Veniam ipsum vitae id voluptate qui? Veritatis quasi quod vel optio sunt mollitia porro, eaque cupiditate culpa. Temporibus, nostrum labore? Sed iste itaque maiores adipisci placeat beatae blanditiis, ut ratione repellat corporis rerum esse, architecto accusantium, reprehenderit odio delectus doloremque nisi commodi exercitationem et natus tempore? Neque temporibus debitis esse, incidunt dolorum alias iste dignissimos ratione consectetur cupiditate! Error nihil culpa aperiam impedit excepturi officia est quidem tempora dolorum sit ea pariatur ipsam tempore, repudiandae cum.</p>
      </div>
    </div>
  );
}
