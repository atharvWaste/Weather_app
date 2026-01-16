import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = () => {


  const [units, changer] = useState("Deg");

  const hadChanged = () => {
    if (units === "Deg") {
      changer("Fir");
    } else {
      changer("Deg");
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
       <Link to="/info" className="aclass">Info</Link>
      </div>
    </div>
  );
};

export default Aside;
