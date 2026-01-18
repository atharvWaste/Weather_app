import { useNavigate } from "react-router-dom";
import Aside from "./Aside.jsx";

import "./Information.css";
const Info = (props) => {
  const Visibility = 5;
  const navigate = useNavigate();

  return (
    <>
      <Aside />
      <section className="SectionStyle">
        <div className="Row">
          <div className="boxStyle">
            <img src="src\assets\icons\visibility.svg" className="imgclass" />
            <p className="visibilityREP">Max-Temp of Day{ "Data is getting from sateliete..."}</p>
          </div>

          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Air quality = { "Testing current Air sample"}</p>
          </div>

          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {"Data is getting from sateliete..."}</p>
          </div>
        </div>

        <div className="Row">
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Min-Temp of Day ={ "Data is getting from sateliete..."}</p>
          </div>
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Wind Direction = {"Data is getting from sateliete..."}</p>
          </div>
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility = {Visibility}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
