import { useState } from "react";

import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = ({setisClicked} ) => {
// deg => true ............ fir => false
  const [units, changer] = useState("DEG");
  const hadChanged = () => {
    if (units === "DEG"){
      changer("FER(°F)");
      setisClicked(false);
    } else {
      changer("DEG(°C)");
      setisClicked(true);
    }
  };


  return (
    <div className="outterBox">
      <div>
        <label htmlFor="Conveter"></label>
        <input id="Conveter" type="button" value={units} onClick={hadChanged} />
      </div>
      <div className="changeLocation">
       <Link to="/location" className="aclass">Location</Link>
      </div>
      <div className="AskAI">
       <Link to="/info" className="aclass" >Info</Link>
      </div>
       <div className="changeLocation">
       <Link to="/" className="aclass">Dasktop</Link>
      </div>
    </div>
  );
};

export default Aside;
