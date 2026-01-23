import RightCol from "./RightCol";
import LowerRep from "./LowerRep";
import Aside from "./Aside";

import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import "./desktop.css";

const Center = () => {
  const [isClicked, setisClicked] = useState(true);
const [UniesOfTemp, setUniesOfTemp] = useState("Deg")
  const svgSourceArray = ["clear_sky", "few_clouds", "rain", "scattered_clouds", "shower_rain", "snow" ,"thunderstorm"];
  const [svgSource, setSvgSource] = useState("clear_sky");
  const [Place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/").then((Response) => {
      const locationName = Response.data.name;
      const des = Response.data.weather[0].description;
      const Temp = Math.round(Response.data.main.temp - 273.15);
const FerTemp =  Math.round(Temp*1.8+32);
      setPlace(locationName);
      setDescription(des);

          // for svg change
      const formattedDesc = des.replaceAll(" ", "_");
      const finalIcon = svgSourceArray.includes(formattedDesc) ? formattedDesc : "clear_sky";
  setSvgSource(finalIcon);

  // for deg to fer convert
if (isClicked === false) {
      setTemp(FerTemp);
      console.log("fer is on");
      setUniesOfTemp("°F");
}else{
  setTemp(Temp);
  console.log("deg is on");
  setUniesOfTemp("°C");
}
 });
  }, [isClicked]);



  return (
    <div>
      <Aside setisClicked={setisClicked}/>
      <div className="topBox">
        <div className="loction">
          <label htmlFor="cityName" className="cityName"></label>
          <input
            type="text"
            id="cityName"
            className="inputcityName"
            value={Place}
            readOnly
          />
        </div>

        <div className="Logo">
           <img src={`/${svgSource}.svg`} className="Logoimg" />
        </div>
      </div>
      <div className="tempdisplay">
        <label htmlFor="TempDisplay" className="templdisplay"></label>
        <input type="number" id="TempDisplay" value={temp} readOnly />
        <span>{UniesOfTemp}</span>
      </div>
      <div className="looksLike">
        <p>Looks like {description}.</p>
      </div>
      <LowerRep />
      <RightCol />
    </div>
  );
};

export default Center;
