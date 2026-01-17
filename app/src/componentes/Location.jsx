import "./Location.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

const Location = () => {
  const navigate = useNavigate();

    const [valuOfContery,setvaluOfContery] = useState("");
  const [valuOfState,setvaluOfState] = useState("");
  const [valuOfCity,setvaluOfCity] = useState("");


// nav tar 3pacsha jast aasala pahije 
// numbers nasle pahije 
// jar evarty thing ok then i will convert it into array and give to backend
// tar function banvu jo he sagala handel karel ani value jar baro bar aasel tar eka variable made 
// store karel aani tovarianle array chay form made store karu shakto.

const FunValueOfInput=(valuOfContery, valuOfState, valuOfCity )=>{

 if (valuOfContery.length >= 3 && valuOfState.length>= 3 && valuOfCity.length >= 3) {
  
const ArrayOfInput = [valuOfContery, valuOfState, valuOfCity];
console.log(ArrayOfInput);

    axios.put("http://localhost:3000/Api", ()=>{
      ArrayOfInput
    })

 }
}

  return (
    <section className="backGroundBox">
      <form   onSubmit={(e) => {
    e.preventDefault();
    FunValueOfInput(valuOfContery, valuOfState, valuOfCity);
  }}>
        <h2 className="HeadingClass">Give your current loction</h2>
        <hr />
        <div className="SectionForInput">
          <label className="Lable" htmlFor="Contery">
            Enter the Contery
          </label>
          <input type="text" id="Contery" value={valuOfContery} onChange={(e) => setvaluOfContery(e.target.value)} required />
        </div>

        <div className="SectionForInput">
          <label className="Lable" htmlFor="State">
            Enter the state
          </label>
          <input type="text" id="State" value={valuOfState} onChange={(e) => setvaluOfState(e.target.value)}required />
        </div>

        <div className="SectionForInput">
          <label className="Lable" htmlFor="City">
            Enter the City
          </label>
          <input type="text" id="City" value={valuOfCity} onChange={(e) => setvaluOfCity(e.target.value)} required />
        </div>

        <button className="Submit" onClick={() => FunValueOfInput(valuOfContery,valuOfState,valuOfCity)}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Location;
