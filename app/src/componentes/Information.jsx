
import { useEffect, useState } from "react";
import Aside from "./Aside.jsx";
import axios from "axios";
import "./Information.css";
const Info = (props) => {
  const[MaxTemp, setMaxTemp] = useState("");
const[MinTemp, setMinTemp] = useState("");
const[seaLevel, setseaLevel] = useState("");
const[grnd_level, setgrnd_level] = useState("");
  const Visibility = 5;
useEffect(()=>{
  const Response = axios.get("http://localhost:3000/").then((Response)=>{
    const DegMaxTemp = Math.floor(Response.data.main.temp_max - 273.15);
    const DegMinTemp = Math.floor(Response.data.main.temp_min - 273.15);
    const sealevelo = Response.data.main.sea_level;
    const grnd_levelo = Response.data.main.grnd_level;
    setseaLevel(sealevelo);
    setgrnd_level(grnd_levelo);
    setMaxTemp(DegMaxTemp);
    setMinTemp(DegMinTemp);
  });
}, []);

  return (
    <>
      <Aside />
      <section className="SectionStyle">
        <div className="Row">
          <div className="boxStyle">
            <img src="src\assets\icons\stratic_icon\Maxtemp.png" className="imgclass" />
            <p className="visibilityREP">Max-Temp of Day = {MaxTemp}</p>
          </div>

          <div className="boxStyle">
            <img src="src\assets\icons\stratic_icon\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">sea_level (in meters ) = {seaLevel}</p>
          </div>
        </div>

        <div className="Row">
          <div className="boxStyle">
            <img src="src\assets\icons\stratic_icon\Lowtemp.png" className="imgclass" />
            <p className="visibilityREP">Min-Temp of Day ={MinTemp}</p>
          </div>
          <div className="boxStyle">
            <img src="src\assets\icons\stratic_icon\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">ground_level (in meters ) = {grnd_level}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
