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
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>

          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>

          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>
        </div>

        <div className="Row">
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>
          <div className="boxStyle">
            <img src="src\assets\icons\Arrow.svg" className="imgclass" />
            <p className="visibilityREP">Visibility(in m) = {Visibility}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
