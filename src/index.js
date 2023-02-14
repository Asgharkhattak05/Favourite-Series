import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css"
import Sdata from "./Sdata";


const Ncard=(val)=>{
return(
  <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
)
}

ReactDOM.render(
   <>
   <h1 className="heading-style">List Of Top 5 Series in 2022</h1>
       {Sdata.map(Ncard)}
    </>,
  document.getElementById("root")
)
