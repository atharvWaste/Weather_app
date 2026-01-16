import "./Location.css";

import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
 
  return (
    <section className="backGroundBox">
      <form  >
        <h2 className="HeadingClass">Give your current loction</h2>
        <hr />
        <div className="SectionForInput">
          <label className="Lable" htmlFor="Contery">
            Enter the Contery
          </label>
          <input type="text" id="Contery" required />
        </div>

        <div className="SectionForInput">
          <label className="Lable" htmlFor="State">
            Enter the state
          </label>
          <input type="text" id="State" required />
        </div>

        <div className="SectionForInput">
          <label className="Lable" htmlFor="City">
            Enter the City
          </label>
          <input type="text" id="City" required />
        </div>

        <button className="Submit" onClick={() => navigate("../")}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Location;
