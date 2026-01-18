import { useState } from "react";

import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
// deg => true ............ fir => false
  const [units, changer] = useState("deg");
  const hadChanged = () => {
    changer();
    if (units === "deg") {

      changer("fri");
    } else {
      changer("deg");
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
       <Link to="/info" className="aclass" >Indo</Link>
      </div>
    </div>
  );
};

export default Aside;
